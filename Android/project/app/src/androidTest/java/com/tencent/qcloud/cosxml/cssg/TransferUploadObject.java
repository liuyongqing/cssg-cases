package com.tencent.qcloud.cosxml.cssg;

import android.os.Environment;
import android.support.test.runner.AndroidJUnit4;
import android.support.test.InstrumentationRegistry;

import com.tencent.cos.xml.*;
import com.tencent.cos.xml.common.*;
import com.tencent.cos.xml.exception.*;
import com.tencent.cos.xml.listener.*;
import com.tencent.cos.xml.model.*;
import com.tencent.cos.xml.model.object.*;
import com.tencent.cos.xml.model.bucket.*;
import com.tencent.cos.xml.model.tag.*;
import com.tencent.cos.xml.transfer.*;
import com.tencent.qcloud.core.auth.*;
import com.tencent.qcloud.core.common.*;
import com.tencent.qcloud.core.http.*;
import com.tencent.cos.xml.model.service.*;
import com.tencent.qcloud.cosxml.cssg.GlobalInitCustomProvider.MyCredentialProvider;

import org.junit.Test;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import android.content.Context;
import android.util.Log;

import java.net.*;
import java.util.*;
import java.nio.charset.Charset;
import java.io.*;

@RunWith(AndroidJUnit4.class)
public class TransferUploadObject {

    private static Context context;

    private static void assertError(Exception e, boolean isMatch) {
        if (!isMatch) {
            throw new RuntimeException(e.getMessage());
        }
    }

    private static void assertError(Exception e) {
        assertError(e, false);
    }

    private String uploadId;
    private String part1Etag;

    @BeforeClass public static void setUp() {
        context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        
    }

    @AfterClass public static void tearDown() {
        
    }

    public void TransferUploadObject()
    {
        CosXmlServiceConfig serviceConfig = new CosXmlServiceConfig.Builder()
               .isHttps(true) // 设置 Https 请求
               .setRegion("ap-guangzhou") // 设置默认的存储桶地域
               .builder();
        
        // 构建一个从临时密钥服务器拉取临时密钥的 Http 请求
        HttpRequest<String> httpRequest = null;
        try {
           httpRequest = new HttpRequest.Builder<String>()
                   .url(new URL(""))
                   .build();
        } catch (MalformedURLException e) {
           e.printStackTrace();
        }
        QCloudCredentialProvider credentialProvider = new SessionCredentialProvider(httpRequest);
        credentialProvider = new ShortTimeCredentialProvider(BuildConfig.COS_SECRET_ID, BuildConfig.COS_SECRET_KEY, 3600); // for ut
        CosXmlService cosXmlService = new CosXmlService(context, serviceConfig, credentialProvider);
        
        // 初始化 TransferConfig
        TransferConfig transferConfig = new TransferConfig.Builder().build();
        
        /*若有特殊要求，则可以如下进行初始化定制。如限定当对象 >= 2M 时，启用分片上传，且分片上传的分片大小为 1M, 当源对象大于 5M 时启用分片复制，且分片复制的大小为 5M。*/
        transferConfig = new TransferConfig.Builder()
                .setDividsionForCopy(5 * 1024 * 1024) // 是否启用分片复制的最小对象大小
                .setSliceSizeForCopy(5 * 1024 * 1024) //分片复制时的分片大小
                .setDivisionForUpload(2 * 1024 * 1024) // 是否启用分片上传的最小对象大小
                .setSliceSizeForUpload(1024 * 1024) //分片上传时的分片大小
                .build();
        
        //初始化 TransferManager
        TransferManager transferManager = new TransferManager(cosXmlService, transferConfig);
        
        String bucket = "bucket-cssg-test-1253653367"; //存储桶，格式：BucketName-APPID
        String cosPath = "object4Android"; //对象在存储桶中的位置标识符，即称对象键
        String srcPath = Environment.getExternalStorageDirectory().getPath() + "/object4Android";//"本地文件的绝对路径";
        String uploadId = null; //若存在初始化分片上传的 UploadId，则赋值对应的uploadId值用于续传;否则，赋值null。
        //上传对象
        COSXMLUploadTask cosxmlUploadTask = transferManager.upload(bucket, cosPath, srcPath, uploadId);
        
        /**
        * 若是上传字节数组，则可调用 TransferManager 的 upload(string, string, byte[]) 方法实现;
        * byte[] bytes = "this is a test".getBytes(Charset.forName("UTF-8"));
        * cosxmlUploadTask = transferManager.upload(bucket, cosPath, bytes);
        */
        
        /**
        * 若是上传字节流，则可调用 TransferManager 的 upload(String, String, InputStream) 方法实现；
        * InputStream inputStream = new ByteArrayInputStream("this is a test".getBytes(Charset.forName("UTF-8")));
        * cosxmlUploadTask = transferManager.upload(bucket, cosPath, inputStream);
        */
        
        //设置上传进度回调
        cosxmlUploadTask.setCosXmlProgressListener(new CosXmlProgressListener() {
                    @Override
                    public void onProgress(long complete, long target) {
                        float progress = 1.0f * complete / target * 100;
                        Log.d("TEST",  String.format("progress = %d%%", (int)progress));
                    }
                });
        //设置返回结果回调
        cosxmlUploadTask.setCosXmlResultListener(new CosXmlResultListener() {
                    @Override
                    public void onSuccess(CosXmlRequest request, CosXmlResult result) {
            COSXMLUploadTask.COSXMLUploadTaskResult cOSXMLUploadTaskResult = (COSXMLUploadTask.COSXMLUploadTaskResult)result;
                        Log.d("TEST",  "Success: " + cOSXMLUploadTaskResult.printResult());
                    }
        
                    @Override
                    public void onFail(CosXmlRequest request, CosXmlClientException exception, CosXmlServiceException serviceException) {
                        Log.d("TEST",  "Failed: " + (exception == null ? serviceException.getMessage() : exception.toString()));
                    }
                });
        //设置任务状态回调, 可以查看任务过程
        cosxmlUploadTask.setTransferStateListener(new TransferStateListener() {
                    @Override
                    public void onStateChanged(TransferState state) {
                        Log.d("TEST", "Task state:" + state.name());
                    }
                });
        
        /**
        若有特殊要求，则可以如下操作：
         PutObjectRequest putObjectRequest = new PutObjectRequest(bucket, cosPath, srcPath);
         putObjectRequest.setRegion(region); //设置存储桶所在的地域
         putObjectRequest.setNeedMD5(true); //是否启用Md5校验
         COSXMLUploadTask cosxmlUploadTask = transferManager.upload(putObjectRequest, uploadId);
        */
        
        //取消上传
        cosxmlUploadTask.cancel();
        
        
        //暂停上传
        cosxmlUploadTask.pause();
        
        //恢复上传
        cosxmlUploadTask.resume();
        
        
    }

    @Test public void testTransferUploadObject() {
      TransferUploadObject();
    }
}
