const subTitle = document.querySelector(".subTitle"),
    range = document.querySelector(".range"),
    inputForm = document.querySelector(".inputForm"),
    myNum = document.querySelector(".myNum"),
    chose = document.querySelector(".chose"),
    result = document.querySelector(".result");

function outofRange(){
    window.alert("Your number is out of the RANGE!");
}

function getRandom(){
    const max = range.value;
    return Math.floor(Math.random() * max) + 1;
}

function setRange(){
    const max = range.value;
    subTitle.innerText = `Generate a number between 0 and ${max}`;
}

function paintResult(){
    let random = getRandom();
    const num = JSON.parse(myNum.value);
    const max = range.value;
    if(num > max){
        outofRange();
    } else{
        chose.innerText = `You chose: ${num}, the machine chose: ${random}.`;
        result.innerText = num === random  ? "You won!" : "You lost!";
    }
}

function handleSubmit(event){
    event.preventDefault();
    paintResult();
}

function init() {
    range.addEventListener("input", setRange);
    inputForm.addEventListener("submit", handleSubmit);
}

init();