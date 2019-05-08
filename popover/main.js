$(clickMe).on('click', function(){
	if(popover.style.display === 'block'){
		$(popover).hide()
	}else{
		$(popover).show()
		setTimeout(function(){
			$(document).one('click', function(){
				$(popover).hide()
			})
		},0)
	}
})