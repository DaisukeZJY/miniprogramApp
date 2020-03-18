// 请求封装
const appVersion = '1.0.0'

const httpRequest = (method, url, param, response, error) => {
  if (param && param.loading == false) {
    // 不需要loading
  } else {
    wx.showLoading({
      title: '请稍等',
      mask: true
    })
  }

  const token = wx.getStorageSync('tokenCacheKey')
  // 打印请求信息
  console.log('request url: ', url, 'token: ', token, 'param: ', param)

  wx.request({
    url: url,
    header: {
      'content-type': 'application/json',
      'token': token,
      'deviceType': 'mini',
      'appVersion': appVersion
    },
    method: method,
    data: param,
    success: res => {
      // 打印成功信息
      console.log('request success responese: ', res)

      // // 系统错误
      // if (res.statusCode == 502) {
      //   wx.showModal({
      //     title: '',
      //     content: '系统维护升级中，请稍后重试',
      //     showCancel: false
      //   })
      //   return response(res)
      // }
      // 错误码
      var code = res.data.code

      // 处理特定错误码
      if (code != 0) {
        // 不弹窗，返回上层处理
        if (param && param.errModal === false) {
          return response(res)
        }

        // 弹窗
        wx.showModal({
          title: '',
          content: res.data.msg,
          showCancel: false,
          success(res) {
            // 点击确定按钮时
            if (res.confirm) {
              if (code == 6 || code == 9) {
                // 登录失效
                // 清除账户信息
                const app = getApp()
                app.clearUserInfo()
                // 跳转登录页面
                wx.reLaunch({
                  url: '/pages/login/login',
                })
              }
            }
          }
        })
      }
      // 执行回调
      return response(res)
    },
    fail: err => {
      // 打印成功信息
      console.log('request fail error: ', err)

      if (param && param.errModal === false) {
        return error(err)
      }
      
      wx.showModal({
        title: '',
        content: err.errMsg,
        showCancel: false
      })
      return error(err)
    },
    complete: info => {
      if (param && param.loading == false) {
        // 不需要loading
      } else {
        wx.hideLoading()
      }
    }
  })
}

const httpUploadFile = (url, filePath, header, response, error) => {
  wx.showLoading({
    title: '请稍等',
    mask: true
  })

  const token = wx.getStorageSync('tokenCacheKey')
  // 打印请求信息
  console.log('UploadFile url: ', url, 'token: ', token, 'filePath: ', filePath, 'header: ', header)
  const _app = getApp()
  var commonHead = {
    'content-type': 'application/json',
    'token': token,
    'deviceType': 'IOS',
    'appVersion': _app.globalData.requestVersion,
    'systemVersion': ''
  }
  wx.uploadFile({
    url: url,
    filePath: filePath,
    name: 'fileName',
    header: Object.assign(commonHead, header), // 合并对象，相同属性会覆盖后值
    success: res => {
      // 打印成功信息
      console.log('uploadFile success responese: ', res)
      return response(res)
    },
    fail: err => {
      // 打印成功信息
      console.log('uploadFile fail error: ', err)
      return error(err)
    },
    complete: info => {
      wx.hideLoading()
    }
  })
}

module.exports = {
  _get: (url, param, response, error) => httpRequest('GET', url, param, response, error),
  _post: (url, param, response, error) => httpRequest('POST', url, param, response, error),
  _put: (url, param, response, error) => httpRequest('PUT', url, param, response, error),
  _delete: (url, param, response, error) => httpRequest('DELETE', url, param, response, error),

  _uploadFile: (url, filePath, header, response, error) => httpUploadFile(url, filePath, header, response, error),
}