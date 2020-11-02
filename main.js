let formSection = document.getElementById('formSection');
let send = document.getElementById('send');


send.onclick = function() {
    let name = document.getElementById('name').value;
    let question = document.getElementById('question').value;
    
let postInfo = new XMLHttpRequest();
    postInfo.open('get', `https://api.telegram.org/bot1388833980:AAHH8s0ZumuaQrQiY1YmNQhtrudypQjfNzM/sendMessage?text= %0AName: ${name}%0AQuestion: ${question}&chat_id=-430097627`, false)
    postInfo.send();
}