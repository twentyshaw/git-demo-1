var canvas = document.getElementById("draw")


var canvasView = function(){
	var pageWidth = document.documentElement.clientWidth
	var pageHeight = document.documentElement.clientHeight
	canvas.width = pageWidth
	canvas.height = pageHeight
}
canvasView(canvas)
window.onresize = function(canvas){
	canvasView(canvas)
}

var context = canvas.getContext("2d")
var using = false
var painting = false
var clean = false

var listenTouser = function(x){
	if (document.body.ontouchstart !== undefined) {
		canvas.ontouchstart = function(x){
			using = true
			var spot_x = x.touches[0].clientX
			var spot_y = x.touches[0].clientY
			lastPoint_x = spot_x
			lastPoint_y = spot_y
			if (clean) {
				context.clearRect(lastPoint_x,lastPoint_y,10,10)
			}else{
				drawpoint(lastPoint_x,lastPoint_y)
			}
 		}

		canvas.ontouchmove = function(x){
			var spot_x = x.touches[0].clientX
		    var spot_y = x.touches[0].clientY
		    newPoint_x = spot_x
		    newPoint_y = spot_y
			if (using) {
				if (clean) {
					context.clearRect(newPoint_x,newPoint_y,10,10)
				}else{
					drawline(lastPoint_x,lastPoint_y,newPoint_x,newPoint_y)
					lastPoint_x = newPoint_x
		            lastPoint_y = newPoint_y
				}
			}
		}

		canvas.ontouchend = function(){
			using = false
		}
	}else{
		canvas.onmousedown = function(x){
			using = true
			var spot_x = x.clientX
			var spot_y = x.clientY
			lastPoint_x = spot_x
			lastPoint_y = spot_y
			if (clean) {
				context.clearRect(lastPoint_x,lastPoint_y,10,10)
			}else{
				drawpoint(lastPoint_x,lastPoint_y)
			}
		}


		canvas.onmousemove = function(x){
			var spot_x = x.clientX
		    var spot_y = x.clientY
		    newPoint_x = spot_x
		    newPoint_y = spot_y
			if (using) {
				if (clean) {
					context.clearRect(newPoint_x,newPoint_y,10,10)
				}else{
					drawline(lastPoint_x,lastPoint_y,newPoint_x,newPoint_y)
					lastPoint_x = newPoint_x
		            lastPoint_y = newPoint_y
				}
			}
		}

		canvas.onmouseup = function(x){
			using = false
		}
	}
	
}

pencil.onclick = function(){
	clean = false
	painting = true
	pencil.classList.add("active")
	eraser.classList.remove("active")
}

eraser.onclick = function(){
	clean = true
	painting = false
	eraser.classList.add("active")
	pencil.classList.remove("active")
}

clearall.onclick = function(){
	painting = false
	clean = false
	context.clearRect(0, 0, canvas.width, canvas.height)
}

save.onclick = function(){
	var url = canvas.toDataURL("image/png")
	var a = document.createElement("a")
	document.body.appendChild(a)
	a.href = url
	a.download = ""
	a.click()
}

black.onclick = function(){
	painting = true
	context.fillStyle = "black"
	context.strokeStyle = "black"
	black.classList.add("selected")
	red.classList.remove("selected")
	yellow.classList.remove("selected")
	green.classList.remove("selected")
}

red.onclick = function(){
	painting = true
	context.fillStyle = "red"
	context.strokeStyle = "red"
	red.classList.add("selected")
	black.classList.remove("selected")
	yellow.classList.remove("selected")
	green.classList.remove("selected")
}

yellow.onclick = function(){
	painting = true
	context.fillStyle = "yellow"
	context.strokeStyle = "yellow"
	yellow.classList.add("selected")
	black.classList.remove("selected")
	red.classList.remove("selected")
	green.classList.remove("selected")
}

green.onclick = function(){
	painting = true
	context.fillStyle = "green"
	context.strokeStyle = "green"
	green.classList.add("selected")
	black.classList.remove("selected")
	yellow.classList.remove("selected")
	red.classList.remove("selected")
}

thin.onclick = function(){
	painting = true
    context.lineWidth = 1
	thin.classList.add("choosen")
	thick.classList.remove("choosen")
}
thick.onclick = function(){
	painting = true
    context.lineWidth = 5
	thick.classList.add("choosen")
	thin.classList.remove("choosen")
}

var drawpoint = function(x1,y1){
	context.beginPath()
	context.arc(x1, y1, 1, 0, 360)
	context.fill()
}

var drawline = function(x1,y1,x2,y2){
	context.beginPath()
	context.moveTo(x1,y1)
	context.lineTo(x2,y2)
	context.stroke()
}

listenTouser()

