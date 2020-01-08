// pages/common/webView/webView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = JSON.parse(decodeURIComponent(options.obj))
    console.log('webView param obj: ', obj)
    const webUrl = obj.webUrl
    const title = obj.title
    console.log('加载路径:', webUrl, '标题：', title)
    this.setData({
      webUrl: webUrl
    })
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  binderror(eventhandler){
    console.log(eventhandler)
  },

  bindload(eventhandler){
    console.log(eventhandler)
  }

})