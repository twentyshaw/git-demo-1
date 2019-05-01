var allButtons = $('#buttons > span')
for (var i = 0; i < allButtons.length; i++) {
	$(allButtons[i]).on('click', function(x){
		var index = $(x.currentTarget).index()
		var p = index * -300
		$('#image').css({
			transform:'translate(' + p + 'px)'
		})
		n = index
		allButtons.eq(n % size).addClass('blue').siblings('.blue').removeClass('blue')
	})
}

var n = 0
var size = allButtons.length
setButton(allButtons.eq(n % size))
var timeId = interval()
$('#window').on('mouseenter',function(){
	window.clearInterval(timeId)
})
$('#window').on('mouseleave',function(){
	interval()
})

function interval(){
	return setInterval(()=>{
		n += 1
		setButton(allButtons.eq(n % size))
    },1200)
}

function setButton($button){
	$button.trigger('click').addClass('blue').siblings('.blue').removeClass('blue')
}