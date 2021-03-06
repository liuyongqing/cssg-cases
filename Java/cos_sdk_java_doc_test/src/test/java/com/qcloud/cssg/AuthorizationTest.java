package com.qcloud.cssg;

import com.qcloud.cos.COSClient;
import com.qcloud.cos.COSEncryptionClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.*;
import com.qcloud.cos.exception.*;
import com.qcloud.cos.model.*;
import com.qcloud.cos.internal.crypto.*;
import com.qcloud.cos.region.Region;
import com.qcloud.cos.http.HttpMethodName;
import com.qcloud.cos.utils.DateUtils;
import com.qcloud.cos.transfer.*;
import com.qcloud.cos.model.lifecycle.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.net.URL;
import java.io.File;
import java.io.FileInputStream;
import javax.crypto.SecretKey;
import java.security.KeyPair;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static com.qcloud.cos.demo.SymmetricKeyEncryptionClientDemo.loadSymmetricAESKey;

public class AuthorizationTest {

    private COSClient cosClient;


    public void getAuthorizationForDownload() {
        //.cssg-snippet-body-start:[get-authorization-for-download]
        String secretId = System.getenv("COS_KEY");
        String secretKey = System.getenv("COS_SECRET");
        COSCredentials cred = new BasicCOSCredentials(secretId, secretKey);
        COSSigner signer = new COSSigner();
        // 设置过期时间为1个小时
        Date expiredTime = new Date(System.currentTimeMillis() + 3600L * 1000L);
        // 要签名的 key, 生成的签名只能用于对应此 key 的下载
        String key = "/object4java";
        String sign = signer.buildAuthorizationStr(HttpMethodName.GET, key, cred, expiredTime);
        //.cssg-snippet-body-end
    }

    public void getAuthorizationForUpload() {
        //.cssg-snippet-body-start:[get-authorization-for-upload]
        String secretId = System.getenv("COS_KEY");
        String secretKey = System.getenv("COS_SECRET");
        COSCredentials cred = new BasicCOSCredentials(secretId, secretKey);
        COSSigner signer = new COSSigner();
        //设置过期时间为1个小时
        Date expiredTime = new Date(System.currentTimeMillis() + 3600L * 1000L);
        // 要签名的 key, 生成的签名只能用于对应此 key 的上传
        String key = "/object4java";
        String sign = signer.buildAuthorizationStr(HttpMethodName.PUT, key, cred, expiredTime);
        //.cssg-snippet-body-end
    }

    public void getAuthorizationForDelete() {
        //.cssg-snippet-body-start:[get-authorization-for-delete]
        String secretId = System.getenv("COS_KEY");
        String secretKey = System.getenv("COS_SECRET");
        COSCredentials cred = new BasicCOSCredentials(secretId, secretKey);
        COSSigner signer = new COSSigner();
        // 设置过期时间为1个小时
        Date expiredTime = new Date(System.currentTimeMillis() + 3600L * 1000L);
        // 要签名的 key, 生成的签名只能用于对应此 key 的删除
        String key = "/object4java";
        String sign = signer.buildAuthorizationStr(HttpMethodName.DELETE, key, cred, expiredTime);
        //.cssg-snippet-body-end
    }


    @Before
    public void setup() {
        //.cssg-snippet-body-start:[global-init]
        // 1 初始化用户身份信息（secretId, secretKey）。
        String secretId = System.getenv("COS_KEY");
        String secretKey = System.getenv("COS_SECRET");
        COSCredentials cred = new BasicCOSCredentials(secretId, secretKey);
        // 2 设置 bucket 的区域, COS 地域的简称请参照 https://cloud.tencent.com/document/product/436/6224
        // clientConfig 中包含了设置 region, https(默认 http), 超时, 代理等 set 方法, 使用可参见源码或者常见问题 Java SDK 部分。
        Region region = new Region("ap-guangzhou");
        ClientConfig clientConfig = new ClientConfig(region);
        // 3 生成 cos 客户端。
        COSClient cosClient = new COSClient(cred, clientConfig);
        //.cssg-snippet-body-end
    }

    @After
    public void teardown() {
    }

    @Test
    public void testGetAuthorization() {
        getAuthorizationForDownload();
        getAuthorizationForUpload();
        getAuthorizationForDelete();
    }

}