// miniprogram/pages/pro/pro-item-detail/pro-item-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        itemData:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        console.log(this)
        const eventChannel = this.getOpenerEventChannel()
        eventChannel.on('pro-item-detailInfo',function(data){
            that.setData({itemData:data.data})
            wx.setNavigationBarTitle({
                title:data.data.name+'专题'
            })
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})