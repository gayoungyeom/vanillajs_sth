const result = document.querySelector(".js-result");

function plus(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function saveValue(curNum) {
    result.value = curNum;
    localStorage.setItem("oper1", curNum);
    localStorage.setItem("oper2", "");
    localStorage.setItem("operator", "");
}

function paintResult() {
    if(result.value > "10000000000") {
        console.log("over");

    }
    const oper1 = localStorage.getItem("oper1");
    const oper2 = localStorage.getItem("oper2");
    const operator = localStorage.getItem("operator");
    if(operator === '+'){
        const curNum = plus(parseInt(oper1), parseInt(oper2));
        saveValue(curNum);
    } else if(operator === '-') {
        const curNum = min(parseInt(oper1), parseInt(oper2));
        saveValue(curNum);
    } else if(operator === '*') {
        const curNum = mul(parseInt(oper1), parseInt(oper2));
        saveValue(curNum);
    } else if(operator === '/') {
        const curNum = div(parseInt(oper1), parseInt(oper2));
        saveValue(curNum);
    }
}


function setOperator(optr) {
    localStorage.setItem("operator", optr);
}

function setOper2(oper2) {
    localStorage.setItem("oper2", oper2);
}

function setOper1(oper1) {
    localStorage.setItem("oper1", oper1);
}

function isNum(value) {
    if(localStorage.getItem("operator") === "") { 
        //oper1 받는 중
        const num1 = localStorage.getItem("oper1");
        const num2 = value;
        const oper1 = num1 + num2;
        result.value = oper1;
        setOper1(oper1);
    } else {
        //oper2 받는 중
        const num1 = localStorage.getItem("oper2");
        const num2 = value;
        const oper2 = num1 + num2;
        result.value = oper2;
        setOper2(oper2);
    }

}

function getValue(value) {
    const curResult = result.value;
    if(curResult === "0") {
        if(isNaN(value)) return;
        const num1 = value;
        result.value = num1;
        setOper1(num1); 
    } else {
        if(isNaN(value)) {
            if(localStorage.getItem("operator") === "") { //첫번째
                setOperator(value);
            } else { //누적
                paintResult();
                setOperator(value);
            }
        } else {
            isNum(value);
        }        
    }
}

function reset() {
    result.value = 0;
    localStorage.setItem("oper1", "");
    localStorage.setItem("operator", "");
    localStorage.setItem("oper2", "");
}

function init() {
   reset();
}

init();