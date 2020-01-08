// pages/login/login.js
// 缓存key

const _app = getApp()
const _tokenCacheKey = _app.globalCacheConfig.cacheKeyConfig.tokenCacheKey
const _userInfoCacheKey = _app.globalCacheConfig.cacheKeyConfig.userInfoCacheKey
const _accIdCacheKey = _app.globalCacheConfig.cacheKeyConfig.accIdCacheKey

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: wx.getStorageSync('login-phone'),
    password: '',
    seePsdUrl: '/resources/login/login_psd_not_see_icon.png',
    seePsd: false,
    loginDisable: true
  },

  onLoad(){
    
  },

  onShow(){
    wx.hideHomeButton()
  },

  phoneChange(res){
    const phone = res.detail.value
    let loginDisable = true
    if (phone.length > 0 && this.data.password.length > 0){
      loginDisable = false
    }
    this.setData({
      phone: phone,
      loginDisable: loginDisable
    })
  },

  passwordChange(res){
    const password = res.detail.value
    let loginDisable = true
    if (password.length > 0 && this.data.phone.length > 0) {
      loginDisable = false
    }
    this.setData({
      password: password,
      loginDisable: loginDisable
    })
  },

  // 点击查看密码
  clickSeePsdBtn(){
    var seePsd = !this.data.seePsd
    this.setData({
      seePsd: seePsd,
      seePsdUrl: seePsd ? '/resources/login/login_psd_see_icon.png' : '/resources/login/login_psd_not_see_icon.png'
    })
  },

  // 登录
  login(){
    let param = {
      mobile: this.data.phone,
      pwd: this.data.password,
      act: '2'
    }
    const _that = this
    _app.appPOST(_app.globalURLConfig.loginUrl, param, res => {
      
      if (res.data.code == 0) {
        // 存储相关信息
        const userInfo = res.data.result
        if (userInfo.accType == 'R' || userInfo.accType == '1') {
          wx.showModal({
            title: '暂不支持校长账号使用',
            content: '请使用家长账号登录',
            showCancel: false
          })
          return
        } else if (userInfo.accType == 'T' || userInfo.accType == '2') {
          wx.showModal({
            title: '暂不支持老师账号使用',
            content: '请使用家长账号登录',
            showCancel: false
          })
          return
        }

        const userInfoKey = _userInfoCacheKey + userInfo.accId
        const token = userInfo.token
        console.log('token:', token, 'accId:', userInfo.accId, 'userInfo:', userInfo)

        try {
          wx.setStorageSync('login-phone', _that.data.phone)
          wx.setStorageSync(_tokenCacheKey, token)
          wx.setStorageSync(_accIdCacheKey, userInfo.accId)
          wx.setStorageSync(userInfoKey, userInfo)
        } catch (e) {
          console.log('缓存错误: ', e)
        }

        const app = getApp()
        app.globalData.token = token
        app.globalData.userInfo = userInfo
        app.globalData.isLogin = true
        app.globalData.accId = userInfo.accId

        // 跳转到主页面
        wx.switchTab({
          url: '/pages/home/home',
        })
      }
    }, err => {
      
    })
  
   
  }
})