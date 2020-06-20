// miniprogram/pages/pro/pro.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        type: {
            A: '餐厨垃圾',
            B: '其他垃圾',
            C: '可回收物',
            D: '有害垃圾',
            E: '倒掉'
        },
        mainList: [{
                name: '小龙虾',
                imgPath: "/images/pro/xia/xia.png",
                _id: 1,
                info: [{
                        title: "整只小龙虾",
                        imgPath: "/images/pro/xia/xia.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "龙虾头",
                        imgPath: "/images/pro/xia/xiatou1.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "龙虾壳",
                        imgPath: "/images/pro/xia/xiake.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "龙虾肉",
                        imgPath: "/images/pro/xia/xiarou.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "去黄龙虾头",
                        imgPath: "/images/pro/xia/xiatou2.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    }
                ]
            },
            {
                name: '粽子',
                imgPath: "/images/pro/zz/zz.png",
                _id: 2,
                info: [{
                        title: "整只粽子",
                        imgPath: "/images/pro/zz/zz.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "粽叶",
                        imgPath: "/images/pro/zz/yezi.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "粽子馅",
                        imgPath: "/images/pro/zz/xian.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "粽子绳",
                        imgPath: "/images/pro/zz/shengzi.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "蛋黄",
                        imgPath: "/images/pro/zz/danhuang.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    }
                ]
            },
            {
                name: '奶茶',
                imgPath: "/images/pro/naicha/beizi.png",
                _id: 3,
                info: [{
                        title: "没喝完的奶茶",
                        imgPath: "/images/pro/naicha/naicha.png",
                        type: "E",
                        typeName: "倒掉"
                    },
                    {
                        title: "奶茶杯",
                        imgPath: "/images/pro/naicha/beizi.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "奶茶杯盖",
                        imgPath: "/images/pro/naicha/beigai.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "奶茶杯身",
                        imgPath: "/images/pro/naicha/beishen.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "珍珠",
                        imgPath: "/images/pro/naicha/zhenzhu.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    }
                ]
            },
            {
                name: '电池',
                imgPath: "/images/pro/dianchi/wugonggandianchi.png",
                _id: 4,
                info: [{
                        title: "无汞干电池",
                        imgPath: "/images/pro/dianchi/wugonggandianchi.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "充电宝",
                        imgPath: "/images/pro/dianchi/chongdianbao.png",
                        type: "C",
                        typeName: "可回收物"
                    },
                    {
                        title: "手机电池",
                        imgPath: "/images/pro/dianchi/shoujidianchi.png",
                        type: "D",
                        typeName: "有害垃圾"
                    },
                    {
                        title: "蓄电池",
                        imgPath: "/images/pro/dianchi/xudianchi.png",
                        type: "D",
                        typeName: "有害垃圾"
                    }
                ]
            },
            {
                name: '外卖',
                imgPath: "/images/pro/waimai/waimaidai.png",
                _id: 5,
                info: [{
                        title: "剩菜剩饭",
                        imgPath: "/images/pro/waimai/shengcaishengfan.png",
                        type: "A",
                        typeName: "餐厨垃圾"
                    },
                    {
                        title: "快餐盒",
                        imgPath: "/images/pro/waimai/kuaicanhe.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "一次性塑料勺子",
                        imgPath: "/images/pro/waimai/shaozi.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "外卖袋",
                        imgPath: "/images/pro/waimai/waimaidai.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "一次性餐盒",
                        imgPath: "/images/pro/waimai/canhe.png",
                        type: "B",
                        typeName: "其他垃圾"
                    }
                ]
            },
            {
                name: '化妆品',
                imgPath: "/images/pro/huazhuangpin/kouhong.png",
                _id: 6,
                info: [{
                        title: "指甲油",
                        imgPath: "/images/pro/huazhuangpin/zhijiayou.png",
                        type: "D",
                        typeName: "有害垃圾"
                    },
                    {
                        title: "指甲油瓶",
                        imgPath: "/images/pro/huazhuangpin/zhijiayouping.png",
                        type: "D",
                        typeName: "有害垃圾"
                    },
                    {
                        title: "口红",
                        imgPath: "/images/pro/huazhuangpin/kouhong.png",
                        type: "B",
                        typeName: "其他垃圾"
                    },
                    {
                        title: "面霜瓶",
                        imgPath: "/images/pro/huazhuangpin/mianshuang.png",
                        type: "C",
                        typeName: "可回收物"
                    },
                ]
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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