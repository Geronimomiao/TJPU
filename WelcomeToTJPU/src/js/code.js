!function () {
  let cssCode = window.cssCode = `
/*你好，我是天津工业大学一名在读学生。
请允许我对我们学校做一个简单介绍，纯文字太单调，我想来点特别的。
首先我准备一下样式。*/
*{
	transition: all .5s;
}
/*白色伤眼睛，来点暗色系的背景吧！*/
html{
	background: #333034;
}
/*让我们给它加一个边框吧*/
#code{
    border: 2px solid #00FF1B;
    padding: 20px;
}
/*代码看不清楚？来点高亮吧！*/
.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.punctuation{
    color: #f8f8f2;
}
.token.function{
    color: red;
}
#code{
    color: #f8f8f2;
}
/*来点动画吧*/
#code{
    animation: breath 4s linear infinite;
}
/*现在开始写介绍吧*/
/*首先我需要一张纸*/
`;
  let htmlCode = window.htmlCode = `
#code{
    display: inline-block;
    position: fixed;
    right: 0;
    width: 50%;
    height: 80%;
    margin-right: 20px;
}
#paper{
    position: fixed;
    display: inline-block;
    left: 0;
    width: 45%;
    height: 80%;
    background: linear-gradient(to bottom, #f4f39e, #f5da41); 
    padding: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    margin-top: 30%;
    overflow: auto;
}
/*掉下去了！怎么办？*/
/*没关系，再用我们将它拉上来*/

#paper{
    margin-top: 0;
}
`;
  let markdown = window.markdown = `
# TJPU
## 校园风景
#### 体育馆
![image](http://wsmpage.cn/tjpu/1503047858524.jpg?imageMogr2/thumbnail/200x300>)
#### 泮湖
![image](http://wsmpage.cn/tjpu/20180629094616834.png?imageMogr2/thumbnail/200x300>)
#### 图书馆(亚洲最长
![image](http://wsmpage.cn/tjpu/7437bc63-3f3c-40c5-8921-6e9f12e09a00.jpg?imageMogr2/thumbnail/200x300>)

#### 下拉有彩蛋（方向键 向下

## 学校简介
  * 双一流（没错 去年评上的
  * 出门地铁站 (敲重点 超方便 有没有
  * 空调 WiFi 西瓜 （简直nice
  * 同华为合作

![image](http://wsmpage.cn/tjpu/QQ20190628-0.jpg?imageMogr2/thumbnail/200x300>)

## 最后为我院打波广告
![image](http://wsmpage.cn/tjpu/788754cd5ca9bc33.jpg?imageMogr2/thumbnail/!200x200r)
`;
}.call()
