var messages = document.getElementById("messages")
var textbox = document.getElementById("textbox")
var button = document.getElementById("button")

button.addEventListener("click" , function(){
   var  newMessages = document.createElement("li")
   newMessages.innerHTML = textbox.value;
   messages.appendChild(newMessages)
   textbox.value = ""
})