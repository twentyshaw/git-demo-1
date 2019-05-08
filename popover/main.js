$(clickMe).on('click', function(){
	$(popover).show()
	setTimeout(function(){
		$(document).one('click', function(){
			$(popover).hide()
		})
	},0)
})