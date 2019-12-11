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
var uploadId
var eTag
var tempFilePath = createFileSync(path.join(process.cwd(), "temp-file-to-upload"), 2048)

function putBucket() {
  return new Promise((resolve, reject) => {
    cos.putBucket({
  })
}

function deleteObject() {
  return new Promise((resolve, reject) => {
    cos.deleteObject({
  })
}

function deleteBucket() {
  return new Promise((resolve, reject) => {
    cos.deleteBucket({
  })
}

function putObject() {
  return new Promise((resolve, reject) => {
    cos.putObject({
  })
}

function putObjectAcl() {
  return new Promise((resolve, reject) => {
    cos.putObjectAcl({
  })
}

function putObjectAclUser() {
  return new Promise((resolve, reject) => {
    cos.putObjectAcl({
  })
}

function putObjectAclAcp() {
  return new Promise((resolve, reject) => {
    cos.putObjectAcl({
  })
}

function getObjectAcl() {
  return new Promise((resolve, reject) => {
    cos.getObjectAcl({
  })
}

function getPresignDownloadUrl() {
    var url = cos.getObjectUrl({
    assert.ok(url)
}

function getPresignDownloadUrlSigned() {
    var url = cos.getObjectUrl({
    assert.ok(url)
}

function getPresignDownloadUrlCallback() {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl({
  })
}

function getPresignDownloadUrlExpiration() {
  return new Promise((resolve, reject) => {
    cos.getObjectUrl({
  })
}

function getPresignDownloadUrlThenFetch() {
  return new Promise((resolve, reject) => {
    var request = require('request');
  })
}

function getPresignUploadUrl() {
  return new Promise((resolve, reject) => {
    var request = require('request');
  })
}

function deleteMultiObject() {
  return new Promise((resolve, reject) => {
    cos.deleteMultipleObject({
  })
}

function restoreObject() {
  return new Promise((resolve, reject) => {
    cos.restoreObject({
  })
}

function initMultiUpload() {
  return new Promise((resolve, reject) => {
    cos.multipartInit({
  })
}

function listMultiUpload() {
  return new Promise((resolve, reject) => {
    cos.multipartList({
  })
}

function uploadPart() {
  return new Promise((resolve, reject) => {
    const filePath = tempFilePath // 本地文件路径
  })
}

function listParts() {
  return new Promise((resolve, reject) => {
    cos.multipartListPart({
  })
}

function completeMultiUpload() {
  return new Promise((resolve, reject) => {
    cos.multipartComplete({
  })
}

function abortMultiUpload() {
  return new Promise((resolve, reject) => {
    cos.multipartAbort({
  })
}

function transferUploadObject() {
  return new Promise((resolve, reject) => {
    const filePath = tempFilePath // 本地文件路径
  })
}

function transferCopyObject() {
  return new Promise((resolve, reject) => {
    cos.sliceCopyFile({
  })
}

function batchUploadObjects() {
  return new Promise((resolve, reject) => {
    const filePath1 = tempFilePath // 本地文件路径
  })
}

function copyObject() {
  return new Promise((resolve, reject) => {
    cos.putObjectCopy({
  })
}

function uploadPartCopy() {
  return new Promise((resolve, reject) => {
    cos.uploadPartCopy({
  })
}

function putObjectBuffer() {
  return new Promise((resolve, reject) => {
    cos.putObject({
  })
}

function putObjectString() {
  return new Promise((resolve, reject) => {
    cos.putObject({
  })
}

function putObjectFolder() {
  return new Promise((resolve, reject) => {
    cos.putObject({
  })
}

function headObject() {
  return new Promise((resolve, reject) => {
    cos.headObject({
  })
}

function getObject() {
  return new Promise((resolve, reject) => {
    cos.getObject({
  })
}

function getObjectRange() {
  return new Promise((resolve, reject) => {
    cos.getObject({
  })
}

function getObjectPath() {
  return new Promise((resolve, reject) => {
    cos.getObject({
  })
}

function getObjectStream() {
  return new Promise((resolve, reject) => {
    cos.getObject({
  })
}



describe("testObjectMetadata", function() {
  it("putObject", function() {
    return putObject()
  })
  it("putObjectAcl", function() {
    return putObjectAcl()
  })
  it("putObjectAclUser", function() {
    return putObjectAclUser()
  })
  it("putObjectAclAcp", function() {
    return putObjectAclAcp()
  })
  it("getObjectAcl", function() {
    return getObjectAcl()
  })
  it("getPresignDownloadUrl", function() {
    return getPresignDownloadUrl()
  })
  it("getPresignDownloadUrlSigned", function() {
    return getPresignDownloadUrlSigned()
  })
  it("getPresignDownloadUrlCallback", function() {
    return getPresignDownloadUrlCallback()
  })
  it("getPresignDownloadUrlExpiration", function() {
    return getPresignDownloadUrlExpiration()
  })
  it("getPresignDownloadUrlThenFetch", function() {
    return getPresignDownloadUrlThenFetch()
  })
  it("getPresignUploadUrl", function() {
    return getPresignUploadUrl()
  })
  it("deleteMultiObject", function() {
    return deleteMultiObject()
  })
  it("restoreObject", function() {
    return restoreObject()
  })
})
describe("testObjectMultiUpload", function() {
  it("initMultiUpload", function() {
    return initMultiUpload()
  })
  it("listMultiUpload", function() {
    return listMultiUpload()
  })
  it("uploadPart", function() {
    return uploadPart()
  })
  it("listParts", function() {
    return listParts()
  })
  it("completeMultiUpload", function() {
    return completeMultiUpload()
  })
})
describe("testObjectAbortMultiUpload", function() {
  it("initMultiUpload", function() {
    return initMultiUpload()
  })
  it("uploadPart", function() {
    return uploadPart()
  })
  it("abortMultiUpload", function() {
    return abortMultiUpload()
  })
})
describe("testObjectTransfer", function() {
  it("transferUploadObject", function() {
    return transferUploadObject()
  })
  it("transferCopyObject", function() {
    return transferCopyObject()
  })
  it("batchUploadObjects", function() {
    return batchUploadObjects()
  })
})
describe("testObjectCopy", function() {
  it("copyObject", function() {
    return copyObject()
  })
  it("initMultiUpload", function() {
    return initMultiUpload()
  })
  it("uploadPartCopy", function() {
    return uploadPartCopy()
  })
  it("completeMultiUpload", function() {
    return completeMultiUpload()
  })
})
describe("testObjectPutget", function() {
  it("putObject", function() {
    return putObject()
  })
  it("putObjectBuffer", function() {
    return putObjectBuffer()
  })
  it("putObjectString", function() {
    return putObjectString()
  })
  it("putObjectFolder", function() {
    return putObjectFolder()
  })
  it("headObject", function() {
    return headObject()
  })
  it("getObject", function() {
    return getObject()
  })
  it("getObjectRange", function() {
    return getObjectRange()
  })
  it("getObjectPath", function() {
    return getObjectPath()
  })
  it("getObjectStream", function() {
    return getObjectStream()
  })
  it("deleteObject", function() {
    return deleteObject()
  })
})
