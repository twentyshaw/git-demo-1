window.jQuery = function(nodeOrSelector){
	let nodes ={}
	if (typeof nodeOrSelector === 'string') {
		let temp = document.querySelectorAll(nodeOrSelector)
		for (var i = 0; i < temp.length; i++) {
			nodes[i] = temp[i]
		}
		nodes.length = temp.length
		}else if(nodeOrSelector instanceof Node){
			nodes = {
				0:nodeOrSelector,
				length: 1
			}
		}
	nodes.addClass = function(classes){
			for (var i = 0; i < nodes.length; i++) {
				nodes[i].classList.add(classes)
			}
	}

	nodes.setText = function(text){
		if (text === undefined) {
			var texts = []
			for (var i = 0; i < nodes.length; i++) {
				texts.push(nodes[i].textContent)
			}
			return texts
		}else{
			for (var i = 0; i < nodes.length; i++) {
				nodes[i].textContent = text
			}
		}
	}
	return nodes	
}

window.$ = jQuery

var $div = $('div')
$div.addClass('red')
$div.setText('hi') 