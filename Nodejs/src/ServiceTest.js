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

function getService() {
  return new Promise((resolve, reject) => {
    cos.getService(function (err, data) {
  })
}

function getRegionalService() {
  return new Promise((resolve, reject) => {
    cos.getService({
  })
}

function getAuthorization() {
    var COS = require('cos-nodejs-sdk-v5');
    assert.ok(Authorization)
}



describe("testGetService", function() {
  it("getService", function() {
    return getService()
  })
  it("getRegionalService", function() {
    return getRegionalService()
  })
  it("getAuthorization", function() {
    return getAuthorization()
  })
})
