var APP_ID = 'pj6ds8WbAQaFMug7t28jYY9B-gzGzoHsz';
var APP_KEY = 'aI0cMRzGys0e21cRAYHxfo9T';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function(e){
	e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let username = myForm.querySelector('input[name=username]').value
    var Message = AV.Object.extend('Message');
	var comment = new Message();
	comment.save({
	  'username': username,
	  'content': content
	}).then(function(object) {
	  let li = document.createElement('li')
      li.innerText = `${object.attributes.username}:${object.attributes.content}`
      let commentList = document.querySelector('#commentList')
      commentList.appendChild(li)
      myForm.querySelector('input[name=content]').value = ''
	})
})

var query = new AV.Query('Message');
  query.find().then(function (message) {
  	let array = message.map((item)=>item.attributes)
    array.forEach(item => {
      let li = document.createElement('li')
      li.innerText = `${item.username}:${item.content}`//`${}`这个写法还是第一次见
      let commentList = document.querySelector('#commentList')
      commentList.appendChild(li)
    });
  },
  function(error){
  	alert('提交失败，再试一次吧')
  })