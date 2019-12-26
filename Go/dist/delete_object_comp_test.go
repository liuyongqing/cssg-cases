//.cssg-snippet-body-start:[delete-object-comp]
  package main
  
  import (
      "context"
      "fmt"
      "net/url"
      "os"
      "io/ioutil"
      "net/http"
  
      "github.com/tencentyun/cos-go-sdk-v5"
  )
  
  func main() {
      // 将<BucketName-APPID>和<region>修改为真实的信息
      // 例如：http://bucket-cssg-test-go-1253653367.cos.ap-guangzhou.myqcloud.com
      u, _ := url.Parse("http://<BucketName-APPID>.cos.<region>.myqcloud.com")
      b := &cos.BaseURL{BucketURL: u}
      c := cos.NewClient(b, &http.Client{
          Transport: &cos.AuthorizationTransport{
              SecretID: os.Getenv("COS_KEY"),
              SecretKey: os.Getenv("COS_SECRET"),  
          },
      })
      name := "test_object"
      _, err := c.Object.Delete(context.Background(), name)
      if err != nil {
          panic(err)
      }
  }
  assert.Nil(s.T(), err, "Test Failed")
  //.cssg-snippet-body-end

