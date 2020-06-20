// components/pro-item-component/pro-item-component.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemData:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goDetail(){
            var that = this;
            wx.navigateTo({
              url: '/pages/pro/pro-item-detail/pro-item-detail',
              success:function(res){
                res.eventChannel.emit('pro-item-detailInfo',{data:that.data.itemData})
              }
            })
            // console.log(this.data.itemData)
        }
    }
})
