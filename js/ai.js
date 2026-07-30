const sendBtn = document.getElementById("send-question");
const input = document.getElementById("user-question");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", askAI);

input.addEventListener("keypress", function(event){
    if(event.key==="Enter"){
        askAI();
    }
});

function askAI(){

    const question=input.value.trim();

    if(question==="") return;

    chatBox.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    chatBox.innerHTML += `
        <div class="ai-message">
            This is where the AI response will appear after we connect the AI service.
        </div>
    `;

    input.value="";

    chatBox.scrollTop=chatBox.scrollHeight;

}
