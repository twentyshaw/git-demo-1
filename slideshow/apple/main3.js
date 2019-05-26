var allButtons = $('#buttons > ul >li')
for (var i = 0; i < allButtons.length; i++) {
	$(allButtons[i]).on('click', function(x){
		var index = $(x.currentTarget).index()
		var p = index * -760
		$('#image').css({
			transform:'translate(' + p + 'px)'
		})
		n = index
		setButton(allButtons.eq(n))
	})
}
var n = 0
size = allButtons.length
allButtons.eq(n % size).trigger('click')
timeId = interval()
$('#window').on('mouseenter',function(){
	window.clearInterval(timeId)
})
$('#window').on('mouseleave',function(){
	timeId = interval()
})

function interval(){
	return setInterval(()=>{
		n += 1
		allButtons.eq(n % size).trigger('click')
    },2000)
}

function setButton($button){
	$button.addClass('blue').siblings('.blue').removeClass('blue')
}