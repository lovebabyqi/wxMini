// miniprogram/pages/guide/guide.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        city:"",
        citys:[],
        isShowMask:false,
        tabBar:[{name:"厨余垃圾",type:"A"},{name:"其他垃圾",type:"B"},{name:"可回收物",type:"C"},{name:"有害垃圾",type:"D"}],
        currentIndex:0,
        guideInfo:[]
    },
    showMask(){//显示遮罩,选择所属地
        this.setData({isShowMask:true})
    },
    selectCity(e){//选择所属地
        if(e.target.dataset.city){
            var that = this;
            const nowCity = e.target.dataset.city;
            app.globalData.city = nowCity;
            this.setData({city:nowCity,isShowMask:false});
        }
    },
    toggleTab(e){//切换选项卡
        if(e.target.dataset.index===0||e.target.dataset.index){
            this.setData({currentIndex:e.target.dataset.index})
        }
        console.log(e.target.dataset.index)
    },
    toSearch(){
        var that = this;
        wx.navigateTo({
          url: '/pages/guide/search/search',
          success(res){
            res.eventChannel.emit('search',{guideInfo:that.data.guideInfo})
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({guideInfo:app.globalData.guideInfo})
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
        this.setData({city:app.globalData.city,citys:app.globalData.citys})
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