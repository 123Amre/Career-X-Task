const aviMessages = [];
const carXMessages = [];
let currentUsername = 'avi';

const messagesContainer = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

function switchUser(username) {
    currentUsername = username;
    updateMessages();
}

function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message !== '') {
        const userMessages = currentUsername === 'avi' ? aviMessages : carXMessages;
        userMessages.push({ user: currentUsername, message, timestamp: Date.now() });

        // Update messages for both users
        updateMessages();

        // Clear the input field
        messageInput.value = '';

        // Optional: Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function updateMessages() {
    messagesContainer.innerHTML = '';

    // Combine and sort messages from both users based on timestamp or any other criteria
    const allMessages = [...aviMessages, ...carXMessages].sort((a, b) => a.timestamp - b.timestamp);

    allMessages.forEach((msg) => {
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = `${msg.user}: ${msg.message}`;
        messagesContainer.appendChild(newMessage);
    });
}


