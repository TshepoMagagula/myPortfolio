//elements
let sendBtn = document.getElementById("sendBtn");
let textbox = document.getElementById("textbox");
let chatContainer = document.getElementById("chatContainer");

var user = {message:"", counter: 0};

var questionsToAsk = [
    {"question":"How can I help you?", "answer": ""},
    {"question":"How did you find this Portfolio?", "answer": ""},
    {"question":"How did you find this website?", "answer": ""}
]

askQuestions();

function askQuestions(){
    if(questionsToAsk.length > user.counter){
        setTimeout(function(){
            chatBotSendMsg(questionsToAsk[user.counter].question);
            user.counter++;
        }, 1000)
    }

    console.log(questionsToAsk[user.counter -1])
}

var possibleMsgArr = [
    {"message": "how are you", "response": "I'm great"},
    {"message": "hi", "response": "Hello!"},
    {"message": "Who are you", "response": "I'm your assistant"},
    {"message": "what's your name?", "response": "I'm Bot"},
    {"message": "what is your name?", "response": "I'm Bot"},
    {"message": "how old are", "response": "I was created on 23/10/2024"},
   /*  {"message": "what's your name?", "response": "I'm Bot"},
    {"message": "what's your name?", "response": "I'm Bot"} */
];

setTimeout(function(){
    chatBotSendMsg("Hii from Chatbot");
}, 1000);

function chatBotSendMsg(messageTxt){
    var messageElement = document.createElement("div");
    messageElement.classList.add("textAlignR");
    /* messageElement.classList.add("");
    messageElement.classList.add(""); */
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>Chatbot: </span>" +
    "<span>" + messageTxt +"</span>";

    messageElement.animate([{easing:"ease-in", opacity:0.4}, {opacity:1}], {duration: 1000});
    chatContainer.appendChild(messageElement);
};

function sendMessage(messageTxt){
    var messageElement = document.createElement("div");
    messageElement.classList.add("leftText");
    /* messageElement.classList.add("");
    messageElement.classList.add(""); */ 
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>Chat: </span>" +
    "<span>" + messageTxt +"</span>"

    messageElement.animate([{easing:"ease-in", opacity:0.4}, {opacity:1}], {duration: 1000});

    chatContainer.appendChild(messageElement);
};

sendBtn.addEventListener("click", function(e){
    if(textbox.value == ""){
        alert("Please type in message");
    }else {
        var messageTxt = textbox.value;
        user.message = messageTxt;
        sendMessage(messageTxt);

        // processMsg ();
        textbox.value = "";

        askQuestions();

        questionsToAsk[user.counter -1].response = user.message;
    }
});

function processMsg(){
    var result = possibleMsgArr.filter(val => val.message.includes(user.message.toLowerCase()));

    if(result.length > 0) {
        var response = result[0].response;

        setTimeout(function(){
            chatBotSendMsg(response);
        }, 1500)
    }else {
        setTimeout(function(){
            chatBotSendMsg("I don't understand");
        }, 1500)
    }
    
};

