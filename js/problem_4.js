const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
function printFeedback(){
    const length = messageInput.value.length;
    if (length <= MAX_CHARACTERS) {
        const n = MAX_CHARACTERS - length;
        messageInput.classList.add('is-valid'); 
        messageInput.classList.remove('is-invalid'); 
        messageFeedback.classList.add('valid-feedback'); 
        messageFeedback.classList.remove('invalid-feedback'); 
        messageFeedback.textContent = n + ' character' + addS(n) + ' left'; 
    }
    else {
        const n = length - MAX_CHARACTERS;
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        messageFeedback.classList.add('invalid-feedback');
        messageFeedback.classList.remove('valid-feedback');
        messageFeedback.textContent = n + ' character' + addS(n) + ' too long';
    }
}
messageInput.addEventListener('input', printFeedback);
printFeedback();