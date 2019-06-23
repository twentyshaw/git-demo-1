function writeCode(prefix,code,fn){
	let wrapper = document.querySelector('#wrapper')
    let style = document.querySelector('#style')
    let n = 0
    let id = setInterval(()=>{
		n += 1
		wrapper.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
		style.innerHTML = prefix + code.substring(0,n)
		wrapper.scrollTop = wrapper.scrollHeight
		if (n >= result.length) {
			window.clearInterval(id)
			fn.call()
		}
	},10)
}
function createPaper(fn) {
	var paper = document.createElement('div')
	var content = document.createElement('pre')
	paper.id = 'paper'
	content.id = 'content'
	document.body.appendChild(paper)
	paper.appendChild(content)
	fn.call()
}

function writeMarkdown(markdown,fn){
	let content = document.querySelector('#content')
    let n = 0
    let id = setInterval(()=>{
		n += 1
		content.innerHTML = marked(markdown.substring(0,n))
		if (n >= result.length) {
			window.clearInterval(id)
			fn.call()
		}
	},10)
}

var result = `/*面试官你好，我是JiangXiao
  我将以动画的形式介绍自己
  只用文字介绍太单调了
  我就用代码来介绍吧
  首先准备一些样式*/
*{
    transition:all 1s;
}
body{
	font-size: 16px;
}
#wrapper{
	border: 1px solid #000;
	background: #ccc;
	padding: 24px;
}
/*我想让代码高亮*/
.token.selector{
	color:#690;
}
.token.property{
	color:#905;
}
.token.function{
	color:#DD4A68;
}
/*再加点3D效果*/
#wrapper{
	transform: rotate(360deg);
}
/*不玩了 开始自我介绍吧*/
`
var result2 = `/*首先 我需要一张白纸*/
#wrapper{
	position: fixed;
	left: 0;
	width: 50%;
	height:100%;
}
#paper{
	position:fixed;
	right:0;
	width: 50%;
	height: 100%;
	background: #ccc;
	padding: 30px;
}
#paper #content{
	height:100%;
	width:100%;
	background:#fff;
}
`
var result3 = `# 自我介绍
## 基本信息
我叫JiangXiao
24岁
毕业于山东大学
## 技术
HTML，CSS，JavaScript
## 爱好
逛技术博客与技术论坛
`
writeCode('', result, ()=>{
	createPaper(()=>{
		writeCode(result,result2,()=>{
			writeMarkdown(result3)
		})
	})
})
