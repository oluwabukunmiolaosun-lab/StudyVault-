function checkAnswer(button, correct){

    const result = document.getElementById("result");

    if(correct){
        result.innerHTML="✅ Correct!";
        result.style.color="green";
    }else{
        result.innerHTML="❌ Wrong answer. Try again.";
        result.style.color="red";
    }

}
