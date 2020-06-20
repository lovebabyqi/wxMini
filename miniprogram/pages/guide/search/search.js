// miniprogram/pages/guide/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchList:[],
        showList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('search', function(data) {
            const _list = data.guideInfo.map(item=>{
                return {bgc:item.bgc,type:item.type,list:item.list}
            })
            that.setData({searchList:_list})
        })
    },
    searchList(e){//input输入, 实时检索
        const value = e.detail.value;
        if(value){
            let reg = new RegExp(value,'i')
            let _list = [];
            this.data.searchList.forEach((item,index)=>{
                item.list.forEach((cItem,cIndex)=>{
                    if(reg.test(cItem)){
                        _list.push({type:item.type,name:cItem})
                    }
                })
            })
            this.setData({showList:_list})
        }else{
            let _list = []
            this.setData({showList:_list})
        }
        
        
    },
    backGuide(){//取消按钮, 返回上一页
        wx.navigateBack({
          complete: (res) => {},
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