// pages/common/scanView/scanView.js

var _number = 0;
var _next = true

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 创建动画
    this.animation = wx.createAnimation()
    let windowHeight = wx.getSystemInfoSync().windowHeight
    let windowWidth = wx.getSystemInfoSync().windowWidth
    var margin = windowWidth - 80;

    // 先执行一次
    this.setupAnimation(margin)

    const _that = this
    _number = setInterval(function () {
      _that.setupAnimation(margin)
    }, 3000)
  },

  // 执行动画
  setupAnimation(margin){
    if (_next) {
      this.animation.translate(0, margin).step({duration: 3000})
      this.setData({ animation: this.animation.export() })
      _next = !_next
    } else {
      this.animation.translate(0, 0).step({ duration: 3000})
      this.setData({ animation: this.animation.export() })
      _next = !_next
    }
  },

  // 扫描成功
  bindscancode(e){
    console.log('扫描成功: ', e)
    if (e.detail.result) {
      // 获取事件通道
      const eventChannel = this.getOpenerEventChannel();
      // 执行事件
      eventChannel.emit('scanResult', {
        result: e.detail.result
      })
      wx.navigateBack({

      })
    }
  }

})