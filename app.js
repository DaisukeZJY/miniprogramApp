//app.js
import HttpRequest from '/request.js'
import UrlConfig from '/urlConfig.js'
import CacheConfig from '/cacheConfig.js'

App({
  onLaunch: function () {

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })

    // wx.clearStorageSync()


    // 判断是否登录
    let token = wx.getStorageSync('tokenCacheKey')
    console.log('token:', token)
    if (token) {
      this.globalData.token = token
      let accId = wx.getStorageSync('accIdCacheKey')
      const userInfoCacheKey = 'userInfoCacheKey' + accId
      let userInfo = wx.getStorageSync(userInfoCacheKey)
      this.globalData.userInfo = userInfo
      if (userInfo){
        this.globalData.accId = accId
        this.globalData.isLogin = true
      }
    } else {
      // wx.reLaunch({
      //   url: '/pages/login/login',
      // })
    }

    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync()
    console.log('系统信息: ', systemInfo)
    var statusBarHeight = systemInfo.statusBarHeight
    var isIphoneX = false
    if (statusBarHeight == 44) {
      // 有刘海
      isIphoneX = true
    }
    this.globalData.systemInfo = systemInfo;
    this.globalData.isIphoneX = isIphoneX

    // 加载数据字典
    this.getCommonDataDic()
  },

  // ================全局方法=====================
  // 清除账户信息
  clearUserInfo: function () {
    this.globalData.isLogin = false
    this.globalData.userInfo = null
    this.globalData.token = ''
    this.globalData.accId = ''
  },



  // ================全局属性=====================
  globalData: {
    userInfo: null,  // 用户信息
    accId: '', // 用户id
    token: '',
    isLogin: false, // 是否登录

    student: null, // 当前学生信息


    systemInfo: null, // 系统信息
    isIphoneX: false, // 是否有刘海
    currentVersion: '1.4.0', // 当前小程序版本
    requestVersion: '2.3.0',// 当前请求版本
  },
  // 全局请求路径配置
  globalURLConfig: UrlConfig,
  // 全局请求路径配置
  globalCacheConfig: CacheConfig,


  // ================自定义方法=====================
  /**获取公共数据 */
  getCommonDataDic: function(){
    // this.getProCityCombityData()
    // this.getHotCityData()
  },

  /**获取地区数据 */
  getProCityCombityData: function(){
    const _that = this
    let param = {
      loading: false
    }
    var number = setInterval(function () {
      _that.appGET(_that.globalURLConfig.findProCityComnityUrl, param, res => {
        clearInterval(number)
        if (res.data.code == 0) {
          // 缓存数据
          wx.setStorageSync(_that.globalCacheConfig.cacheKeyConfig.proCityComnityDataKey, res.data.result)
        }
      }, err => {
        clearInterval(number)
      })
    }, 5000)
  },

  /**获取热门城市数据 */
  getHotCityData: function () {
    const _that = this
    let param = {
      loading: false
    }
    var number = setInterval(function () {
      _that.appGET(_that.globalURLConfig.findComnityHotCityUrl, param, res => {
        clearInterval(number)
        if (res.data.code == 0) {
          // 缓存数据
          wx.setStorageSync(_that.globalCacheConfig.cacheKeyConfig.hotCityComnityDataKey, res.data.result)
        }
      }, err => {
        clearInterval(number)
      })
    }, 5000)
  },

  // ================暴露请求封装方法=====================
  
  // get请求
  appGET: function(url, param, response, error) {
    HttpRequest._get(url, param, response, error)
  },
  // post请求
  appPOST: function (url, param, response, error) {
    HttpRequest._post(url, param, response, error)
  },
  // put请求
  appPUT: function (url, param, response, error) {
    HttpRequest._put(url, param, response, error)
  },
  // delete请求
  appDELETE: function (url, param, response, error) {
    HttpRequest._delete(url, param, response, error)
  },
  // 上传文件
  appUploadFile: function (url, filePath, header, response, error){
    HttpRequest._uploadFile(url, filePath, header, response, error)
  }
})