const messageIn = document.querySelector('#messagein')
const messageOut = document.querySelector("#messageout");
const submit = document.querySelector("#submit");

submit.addEventListener('click', sendMessage);

function sendMessage() {
    let content = messageIn.value;
    messageOut.innerHTML = content;
    alert('Message "' + content + '" has been sent to the site! ');
    messageIn.value = "";
}