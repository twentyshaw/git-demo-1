!function(){
	var duration = 50
	function writeCode(prefix,code,fn){
		let container = document.querySelector('#code')
	    let style = document.querySelector('#styleTag')
	    let n = 0
	    setTimeout(function run(){
			n += 1
			container.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
			style.innerHTML = prefix + code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if (n < result.length) {
				setTimeout(run,duration)
			}else{
				fn && fn.call()
			}
		},duration)
    }

$('#action').on('click','button',function(e){
	let $button = $(e.currentTarget)
	let speed = $button.attr('data-speed')
	$button.addClass('active').siblings('.active').removeClass('active')
	switch(speed){
		case 'slow':
			duration = 100
			break
		case 'normal':
			duration = 50
			break
		case 'fast':
			duration =10
			break
	}
})

var result = `/*来画一只皮卡丘(ง •_•)ง

1.首先需要准备皮卡丘的皮

*/
#preview{
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FEE433;
}
#wrapper{
	width: 100%;
	height: 165px;
	position: relative;
}
/*

2.接下来，画皮卡丘的鼻子

*/
.nose{
	width: 22px;
	height: 10px;
	border-style: solid;
	border-width: 12px;
	border-color: black transparent transparent;
	border-radius: 11px; 
	position: absolute;
	left: 50%;
	top: 28px;
	margin-left: -11px;
}
/*

3.然后画皮卡丘的眼睛

*/
.eye{
	width: 49px;
	height: 49px;
	background: #2e2e2e;
	position: absolute;
	border-radius: 50%;
	border:2px solid #000;
}
/*

左眼在左边

*/
.eye.left{
	right: 50%;
	margin-right: 90px;
}
/*

右眼在右边(°ー°〃)

*/
.eye.right{
	left: 50%;
	margin-left: 90px;
}
/*

还要画上大眼珠子

*/
.eye:after{
	content: "";
	display: block;
	width: 24px;
	height: 24px;
	background: #fff;
	position: absolute;
	border-radius: 50%;
	left: 6px;
	top: -1px;
	border:2px solid #000;
}
/*

4.来画皮卡丘的小红晕（其实是电极( •̀ ω •́ )y

*/
.face{
	width: 68px;
	height: 68px;
	background: #FC0D1C;
	border:2px solid #000;
	border-radius: 50%;
	position: absolute;
	top: 85px
}
/*

正电极（？

*/
.face.left{
	right: 50%;
	margin-right: 116px;
}
/*

负电极（。

*/
.face.right{
	left: 50%;
	margin-left: 116px;
}
/*

6.最后画皮卡丘的嘴巴

*/
#wrapper div:not(:last-child){
	z-index: 1;
}
/*

上嘴唇

*/
.upperLip{
	height: 25px;
	width: 80px;
	border: 3px solid #000;
	position: absolute;
	top: 50px;
	border-top:none;
	background: #FEE433;
}
.upperLip.left{
	right: 50%;
	border-right: none;
	border-bottom-left-radius: 40px 25px;  
	transform: rotate(-20deg);
}
.upperLip.right{
	left: 50%;
	border-left: none;
	border-bottom-right-radius: 40px 25px;  
	transform: rotate(20deg);
}
/*

下嘴唇

*/
.lipWrapper{
	bottom: 0;
	position: absolute;
	left: 50%;
	margin-left: -150px;
	height: 110px;
	overflow: hidden;
	width: 300px;
}
.lowerLip{
	width: 300px;
	height: 3500px;
	background: #A80C0A;
	border-radius: 200px/2000px;
	border: 2px solid #000;
	position: absolute;
	bottom: 0;
	overflow: hidden;
}
/*

小舌头

*/
.lowerLip:after{
	content: "";
	height: 100px;
	width: 100px;
	position: absolute;
	bottom: -20px;
	left: 50%;
	margin-left: -50px;
	background: #FF5C62;
	border-radius: 50px;
}
/*

好了，这只皮卡丘送给你(｡･ω･｡)ﾉ♡

*/`
writeCode('', result)
}.call()

