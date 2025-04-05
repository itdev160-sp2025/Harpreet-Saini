


let messages = [];


const data = [
    { type: 'in', text: 'Hello! How can I help you?' },
    { type: 'out', text: 'I need assistance with my account.' },
];


function Message(type, text) {
    this.type = type;
    this.text = text;
}


function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(message.type === 'out' ? 'out-message' : 'in-message');
    messageElement.textContent = message.text;
    return messageElement;
}


function addMessageHandler(event) {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText === '') return; 

    
    let messageType;
    if (event.target.id === 'send-button') {
        messageType = 'out';
    } else if (event.target.id === 'reply-button') {
        messageType = 'in';
    }

    const newMessage = new Message(messageType, messageText);

  
    messages.push(newMessage);

    
    const messageContainer = document.getElementById('message-container');
    const messageElement = createMessageElement(newMessage);
    messageContainer.appendChild(messageElement);

  
    messageInput.value = '';

    
    messageContainer.scrollTop = messageContainer.scrollHeight;
}


function loadSeedData() {
    data.forEach((messageData) => {
        const message = new Message(messageData.type, messageData.text);
        messages.push(message);
        const messageElement = createMessageElement(message);
        document.getElementById('message-container').appendChild(messageElement);
    });
}


function init() {
    loadSeedData();

    
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
}


window.onload = init;
