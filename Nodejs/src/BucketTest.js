const assert = require('assert')
const fs = require('fs')
const path = require('path')

var createFileSync = function (filePath, size) {
  if (!fs.existsSync(filePath) || fs.statSync(filePath).size !== size) {
      fs.writeFileSync(filePath, Buffer.from(Array(size).fill(0)));
  }
  return filePath;
};

function initCOS () {
    var COS = require('cos-nodejs-sdk-v5');
    return cos
}
var cos = initCOS()

function putBucket() {
  return new Promise((resolve, reject) => {
    cos.putBucket({
  })
}

function deleteBucket() {
  return new Promise((resolve, reject) => {
    cos.deleteBucket({
  })
}

function getBucket() {
  return new Promise((resolve, reject) => {
    cos.getBucket({
  })
}

function getBucketPrefix() {
  return new Promise((resolve, reject) => {
    cos.getBucket({
  })
}

function headBucket() {
  return new Promise((resolve, reject) => {
    cos.headBucket({
  })
}

function putBucketAcl() {
  return new Promise((resolve, reject) => {
    cos.putBucketAcl({
  })
}

function putBucketAclUser() {
  return new Promise((resolve, reject) => {
    cos.putBucketAcl({
  })
}

function putBucketAclAcp() {
  return new Promise((resolve, reject) => {
    cos.putBucketAcl({
  })
}

function getBucketAcl() {
  return new Promise((resolve, reject) => {
    cos.getBucketAcl({
  })
}

function putBucketPolicy() {
  return new Promise((resolve, reject) => {
    cos.putBucketPolicy({
  })
}

function getBucketPolicy() {
  return new Promise((resolve, reject) => {
    cos.getBucketPolicy({
  })
}

function deleteBucketPolicy() {
  return new Promise((resolve, reject) => {
    cos.deleteBucketPolicy({
  })
}

function putBucketCors() {
  return new Promise((resolve, reject) => {
    cos.putBucketCors({
  })
}

function getBucketCors() {
  return new Promise((resolve, reject) => {
    cos.getBucketCors({
  })
}

function optionObject() {
  return new Promise((resolve, reject) => {
    cos.optionsObject({
  })
}

function deleteBucketCors() {
  return new Promise((resolve, reject) => {
    cos.deleteBucketCors({
  })
}

function putBucketLifecycle() {
  return new Promise((resolve, reject) => {
    cos.putBucketLifecycle({
  })
}

function putBucketLifecycleArchive() {
  return new Promise((resolve, reject) => {
    cos.putBucketLifecycle({
  })
}

function putBucketLifecycleExpired() {
  return new Promise((resolve, reject) => {
    cos.putBucketLifecycle({
  })
}

function putBucketLifecycleCleanAbort() {
  return new Promise((resolve, reject) => {
    cos.putBucketLifecycle({
  })
}

function putBucketLifecycleHistoryArchive() {
  return new Promise((resolve, reject) => {
    cos.putBucketLifecycle({
  })
}

function getBucketLifecycle() {
  return new Promise((resolve, reject) => {
    cos.getBucketLifecycle({
  })
}

function deleteBucketLifecycle() {
  return new Promise((resolve, reject) => {
    cos.deleteBucketLifecycle({
  })
}

function putBucketVersioning() {
  return new Promise((resolve, reject) => {
    cos.putBucketVersioning({
  })
}

function getBucketVersioning() {
  return new Promise((resolve, reject) => {
    cos.getBucketVersioning({
  })
}

function putBucketReplication() {
  return new Promise((resolve, reject) => {
    cos.putBucketReplication({
  })
}

function getBucketReplication() {
  return new Promise((resolve, reject) => {
    cos.getBucketReplication({
  })
}

function deleteBucketReplication() {
  return new Promise((resolve, reject) => {
    cos.deleteBucketReplication({
  })
}

function putBucketTagging() {
  return new Promise((resolve, reject) => {
    cos.putBucketTagging({
  })
}

function getBucketTagging() {
  return new Promise((resolve, reject) => {
    cos.getBucketTagging({
  })
}

function deleteBucketTagging() {
  return new Promise((resolve, reject) => {
    cos.deleteBucketTagging({
  })
}



describe("testBucketACL", function() {
  it("getBucket", function() {
    return getBucket()
  })
  it("getBucketPrefix", function() {
    return getBucketPrefix()
  })
  it("headBucket", function() {
    return headBucket()
  })
  it("putBucketAcl", function() {
    return putBucketAcl()
  })
  it("putBucketAclUser", function() {
    return putBucketAclUser()
  })
  it("putBucketAclAcp", function() {
    return putBucketAclAcp()
  })
  it("getBucketAcl", function() {
    return getBucketAcl()
  })
})
describe("testBucketPolicy", function() {
  it("putBucketPolicy", function() {
    return putBucketPolicy()
  })
  it("getBucketPolicy", function() {
    return getBucketPolicy()
  })
  it("deleteBucketPolicy", function() {
    return deleteBucketPolicy()
  })
})
describe("testBucketCORS", function() {
  it("putBucketCors", function() {
    return putBucketCors()
  })
  it("getBucketCors", function() {
    return getBucketCors()
  })
  it("optionObject", function() {
    return optionObject()
  })
  it("deleteBucketCors", function() {
    return deleteBucketCors()
  })
})
describe("testBucketLifecycle", function() {
  it("putBucketLifecycle", function() {
    return putBucketLifecycle()
  })
  it("putBucketLifecycleArchive", function() {
    return putBucketLifecycleArchive()
  })
  it("putBucketLifecycleExpired", function() {
    return putBucketLifecycleExpired()
  })
  it("putBucketLifecycleCleanAbort", function() {
    return putBucketLifecycleCleanAbort()
  })
  it("putBucketLifecycleHistoryArchive", function() {
    return putBucketLifecycleHistoryArchive()
  })
  it("getBucketLifecycle", function() {
    return getBucketLifecycle()
  })
  it("deleteBucketLifecycle", function() {
    return deleteBucketLifecycle()
  })
})
describe("testBucketReplicationAndVersioning", function() {
  it("putBucketVersioning", function() {
    return putBucketVersioning()
  })
  it("getBucketVersioning", function() {
    return getBucketVersioning()
  })
  it("putBucketReplication", function() {
    return putBucketReplication()
  })
  it("getBucketReplication", function() {
    return getBucketReplication()
  })
  it("deleteBucketReplication", function() {
    return deleteBucketReplication()
  })
})
describe("testBucketTagging", function() {
  it("putBucketTagging", function() {
    return putBucketTagging()
  })
  it("getBucketTagging", function() {
    return getBucketTagging()
  })
  it("deleteBucketTagging", function() {
    return deleteBucketTagging()
  })
})

describe("CleanBucket", function() {
  it("deleteBucket", function() {
    return deleteBucket()
  })
  it("putBucket", function() {
    return putBucket()
  })
})