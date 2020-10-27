// 1388833980:AAHH8s0ZumuaQrQiY1YmNQhtrudypQjfNzM

// https://api.telegram.org/bot
// -430097627

let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');

show.onclick = function() {
    formSection.style.display = 'block';
    show.style.display = 'none';
}

send.onclick = function() {
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let message = document.getElementById('message').value;
    
    let postInfo = new XMLHttpRequest();
    postInfo.open('get', `https://api.telegram.org/bot1388833980:AAHH8s0ZumuaQrQiY1YmNQhtrudypQjfNzM/sendMessage?text= %0AName: ${name}%0APhone Number: ${phoneNumber}%0AMessage: ${message}&chat_id=-430097627`, false)
    postInfo.send();
}