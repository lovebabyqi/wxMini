Page({
    data: {
        exam:[],
        isActive:false,
        types:{A:'厨余垃圾',B:'其他垃圾',C:'可回收物',D:'有害垃圾'},
        currentIndex:0,
        record:[],//答题时记录正确答案和选择的答案
        score:0,//记录分数,总分100分
        preTime:0
    },
    selectTab(e){//点击选项, 需要用到节流, 每题只能点一次, 点击后切换题需要520ms动画,530ms后再允许点击
        let nowTime = Date.now();
        if(nowTime - this.data.preTime<530){
            return;
        }
        this.setData({preTime:nowTime})
        const currentType = e.target.dataset.type;//选择的答案
        if(currentType){
            const nowIndex = this.data.currentIndex;
            const index = nowIndex + 1;
            const record = this.data.record;
            const currentExam = this.data.types[currentType];//选择的信息
            const trueExam = this.data.types[this.data.exam[nowIndex].type];//正确的信息
            const trueType = this.data.exam[nowIndex].type;
            const examName = this.data.exam[nowIndex].name;
            record.push({examName,currentExam,trueExam,trueType});//记录题name,选择的答案,正确答案
            this.setData({isActive:true},()=>{
                setTimeout(()=>{
                    this.setData({isActive:false,currentIndex:index,record:record});
                },300)
            })
            if(index===10){
                let score = 0;
                this.data.record.forEach((item,index)=>{
                    if(item.currentExam===item.trueExam){
                        score += 10
                    }
                })
                this.setData({score:score})
                //计算完分数, 点击再考一次重置record
            }
        }
    },
    saveExam(){//保存成绩
        console.log('保存成绩')
    },
    restartExam(){//再考一次
        this.setData({record:[],score:0,currentIndex:0});
        this.randomExam()
    },
    share(){//分享,考考别人
        console.log('分享')
    },
    randomExam(){
        const app = getApp();
        const guideInfo = app.globalData.guideInfo;
        let randomExam = [];
        for(let i=0;i<10;i++){
            let index1 = parseInt(Math.random()*4)
            let length = guideInfo[index1].list.length
            let index2 = parseInt(Math.random()*length)
            randomExam.push({type:guideInfo[index1].type,name:guideInfo[index1].list[index2]})
        }
        this.setData({exam:randomExam})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.randomExam()
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