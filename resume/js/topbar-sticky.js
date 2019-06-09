!function(){
	var view = document.querySelector('#topNav')
	var controller = {
		view:null,
		init: function(view){
			this.view = view
			this.bindEvents()
		},
		bindEvents: function(){
			var view = this.view //这里的this就是上面initi函数中调用bindEvents传进来的this，也就是controller
			window.addEventListener('scroll',(x) => {
				if(window.scrollY > 0) {
					this.active() //因为箭头函数没有this，这里的this就是外面的this，即controller
				}else{
					this.deactive()
				}
			})
		},
		active: function(){
			this.view.classList.add("sticky")
		},
		deactive: function(){
			this.view.classList.remove("sticky")
		}
	}
	controller.init(view)
}.call() 
