# 小程序，垃圾分类指南

## 1. 主要功能

1. 指南主页展示分类概念，展示具体条目，搜索垃圾查看对应分类
    搜索不区分大小写，实时响应。.
2. 普及垃圾分类知识
    各类垃圾概念，投放要求。
3. 测试垃圾分类知识
    满分100分，每次测试10题，测试结果展示分数，答题详细. 
    可保存成绩单至相册.。
4. 专题查看垃圾所属分类
    例如：化妆品，奶茶，外卖。根据不同专题查看对应垃圾分类。
5. 属地，默认成都。

## 2. 代码结构

区分模板template，组件component，页面page

- 模板只需要wxml wxss，只负责渲染数据，没有事件处理
- 组件有点击事件
- page是完整页面

```javascript
/miniprogram
	/components
		/pro-item-component
			pro-item-component//专题页功能组件,点击跳转至pro-item-detail
	/images	//存放图片图标资源
	/pages
		/exam
			exam	//测试题页
		/guide
			guide	//首页指南
			/search
				search//搜索页
		/pro
			pro	//专题首页,展示所有专题
			/pro-item-detail
				pro-item-detail//专题详情页
		/setting
			setting//设置
	/template
		/guide-mainInfo-template
			guide-mainInfo-template//首页右侧内容区模板
	app.js
	app.json
	app.wxss
```

## 3. 业务逻辑梳理

图片资源,，数据使用本地数据，没有使用云存储。

主要数据定义在app.js	globalData

```json
globalData:{
    citys:['北京','长春','成都'],//展示部分
    city:'成都',
    guideInfo:[
    {
        title:'厨余垃圾',
        type:'A',
        bgc:'#c6e5d9',
        logo:'/images/guide/typeA.png',
        elplain:'是指易腐蚀的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。',
        rtext:['纯流质的食物垃圾，如牛奶等，应直接倒入下水口','有包装的餐厨垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器'],
        list:['CoCo的青稞','姑娘果','菇娘果','秸秆杯','秸秆碗','KFC圆筒冰淇淋','Mcake','QQ软糖','阿波罗火腿',"阿华田巧克力酱"]
    },
    {
        title:'其他垃圾',
        bgc:'#fff1b9',
        type:'B',
        logo:'/images/guide/typeB.png',
        elplain:'是指除有害垃圾、可回收物、厨余（餐厨）垃圾以外的其他生活废弃物。',
        rtext:['尽量沥干水分','难以辨识类别的生活垃圾投入其他垃圾容器内'],
        list:['1号电池','3D打印模型','3D眼睛','504胶水','504胶水废包装','5号电池','7号电池','A4执包装袋','CD','CoCo奶茶杯','DVD']
    },
    {
        title:'可回收物',
        bgc:'#aacfd0',
        type:'C',
        logo:'/images/guide/typeC.png',
        elplain:'是指事已回收和可循环再利用的废弃物。主要包括废玻璃、废金属、废塑料、废纸张、废织物等。',
        rtext:['轻投轻放','清洁干燥，避免污染','废纸尽量平整','立体包装请清空内容物，清洁后压扁投放','有尖锐边角的，应包裹后投放'],
        list:['84消毒液瓶','A3纸','A4纸','AD钙奶瓶','AD钙瓶','Armani包','保险柜','保险箱','CD塑料盒','Celine包','Chanel包']
    },
    {
        title:'有害垃圾',
        bgc:'#fec8c9',
        type:'D',
        logo:'/images/guide/typeD.png',
        elplain:'是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中生产的除外。主要包括废电池、废灯管、废药品、废油漆桶等。',
        rtext:['充电电池、纽扣电池、蓄电池投放时请注意轻放','油漆桶、杀虫剂如有残留物请密闭后投放','荧光灯、节能灯易破损请连带包装或包裹后轻放','废药品及其包装连带包装一并投放'],
        list:['502胶水','704粘合剂','704粘和剂','LED灯(含水银)','LED灯泡','驱虫药','万用表电池','X光片','氨基甲酸脂类除草剂','氨基甲酸酯类杀虫剂']
    },
    ]
}
```

主要是`guide.wxml`和`exam.wxml`会使用到`guideInfo`数据。

### 3.1 guide首页

* header 部分左侧展示属地，点击会弹出遮罩选择属地，也可在`setting`页选择。搜索栏不是`input`输入框，只需要点击跳转至`search.wxml`，在`search`页面完成搜索功能。

* 公告栏，横向滚动消息定义animation动画
* 内容区`tabbar`背景样式用遮罩写法，初始只有6rpx，选项点击后200rpx作为文字背景，同时定义宽度过渡动画`transition`
* 内容区右侧部分纯数据展示，根据tabbar切换内容

### 3.2 试题

* 数据部分

```javascript
data: {
    exam:[],//试题
    isActive:false,//动态控制类名,实现过渡动画
    types:{A:'厨余垃圾',B:'其他垃圾',C:'可回收物',D:'有害垃圾'},
    currentIndex:0,
    record:[],//答题时记录正确答案和选择的答案
    score:0,//记录分数,总分100分
    preTime:0//答题时,过渡动画会有时间, 需要用到节流, 每题只能点击一次答案
},
```

* 关键功能，根据`guideInfo`获取10组随机题。10道题使用wx:for列表渲染，根据`currentIndex+1`切换下一题显示。当`currentIndex===9`时处在最后一题。最后一题结束`currentIndex`为9，这时计算答题结果，记录分数，展示答题结果。点击再考一次，重新获取随机试题。

```javascript
//获取随机试题
randomExam(){
    const app = getApp();
    const guideInfo = app.globalData.guideInfo;
    let _randomExam = [];
    for(let i=0;i<10;i++){
        let index1 = parseInt(Math.random()*4);//四选一
        let length = guideInfo[index1].list.length;
        let index2 = parseInt(Math.random()*length);//根据四选一结果选择具体项
        let type = guideInfo[index].type;//取得具体项type
        let name = guideInfo[index1].list[index2];//取得具体项name
        _randomExam.push({type,name});
    }
    this.setData({exam:_randomExam});
}
```

* 答题过程

```javascript
selectTab(e){//点击选项, 需要用到节流, 每题只能点一次, 点击后切换题需要520ms动画,530ms后再允许点击
    let nowTime = Date.now();
    if(nowTime - this.data.preTime<530){//节流
        return;
    }
    this.setData({preTime:nowTime})
    const currentType = e.target.dataset.type;//选择的答案,事件委托的写法
    if(currentType){
        const nowIndex = this.data.currentIndex;//
        const index = nowIndex + 1;
        const record = this.data.record;
        const currentExam = this.data.types[currentType];//选择的信息
        const trueExam = this.data.types[this.data.exam[nowIndex].type];//正确的信息
        const trueType = this.data.exam[nowIndex].type;
        const examName = this.data.exam[nowIndex].name;
        record.push({examName,currentExam,trueExam,trueType});//记录题name,选择的答案,正确答案
        this.setData({isActive:true},()=>{//保证过渡动画执行
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
```

### 3.3 专题

专题页已展示为主，单个专题抽离成组件`pro-item-component`，点击专题跳转至`pro-detail.wxml`展示具体专题。

### 3.4 设置

`setting.wxml`提供属地选择功能，简单布局，事件委托。