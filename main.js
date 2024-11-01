//elements
let sendBtn = document.getElementById("sendBtn");
let textbox = document.getElementById("textbox");
let chatContainer = document.getElementById("chatContainer");

var user = {message:"", counter: 0};

chatBotSendMsg("Please choose an option: ")
initialiseOptions();

var questionsToAsk = [
    {"question":"How can I help you?", "answer": ""},
    {"question":"How did you hear about this Portfolio?", "answer": ""},
    {"question":"What's the reason for your visit?", "answer": ""},
    {"question":"How did you find this website?", "answer": ""},
]

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

/* setTimeout(function(){
    chatBotSendMsg("Hii from Chatbot");
}, 1000); */

function chatBotSendMsg(messageTxt){
    var messageElement = document.createElement("div");
    messageElement.classList.add("textAlignR");
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
        let messageTxt = textbox.value;
        user.message = messageTxt;
        sendMessage(messageTxt);

        // processMsg ();
        textbox.value = "";

        // askQuestions();

       // questionsToAsk[user.counter -1].answer = user.message;

       assistantResponse(messageTxt);


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

function initialiseOptions() {
    let options = [
        {number:1, choice: "Find out more about Tshepo"},
        {number:2, choice: "View experience & Projects"},
        {number:3, choice: "Get in touch with Tshepo"},
    ];

    var messageElement = document.createElement("div");
    messageElement.classList.add("textAlignR");
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    for (let i = 0; i < options.length; i++){
        messageElement.innerHTML += "<br>" +
        "<span>" + options[i].number + "- " + options[i].choice +"</span>";
    }

    messageElement.animate([{easing:"ease-in", opacity:0.4}, {opacity:1}], {duration: 1000});
    chatContainer.appendChild(messageElement);

}

function assistantResponse(messageTxt){
    let userChoice = parseInt(messageTxt.trim())
    switch(userChoice){
        case 1:
            ///get
            alert("you chose weather");
        case 2:
            //get
            alert("you chose sport");
        case 3:
            //get
            alert("you chose news");
        default:
            //get
            alert("you chose default");
    }
}

//Fade in Div

window.addEventListener('load', () => {
    setTimeout(() => {
        const myDiv = document.getElementById('welcmDiv');
        myDiv.classList.add('show');
    },700);
    
});

// toggle Chatbot
let editTextElement;

function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbotWindow");
    if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
        chatbotWindow.style.display = "flex";
    } else {
        chatbotWindow.style.display = "none";
    }
}

function displayClickToChat(isHover) {
    const hoverText = document.getElementById('hoverText');
    if (isHover) {
        hoverText.style.display = 'block';
    } else {
        hoverText.style.display = 'none';
    }
}   

function toggleDivs() {
    const div1 = document.getElementById('experiences');
    const div2 = document.getElementById('projects');

    // Toggle active class on both divs
    div1.classList.toggle('active');
    div2.classList.toggle('active');
}