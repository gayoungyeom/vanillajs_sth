const body = document.querySelector("body"),
    signform = document.querySelector(".sign"),
    id = document.querySelector(".id"),
    pw = document.querySelector(".pw"),
    signin = document.querySelector(".signin"),
    signup = document.querySelector(".signup"),
    h2 = document.querySelector("h2"),
    h1 = document.querySelector("h1");


function login(){
    const userName = id.value;
    const pwd = pw.value;
    if(pwd === localStorage.getItem(userName)){
        //로그인 성공
        body.removeChild(signform);
        h1.innerText = `Hello ${userName}`;
    } else{
        //로그인 실패
        window.alert("Incorret ID or PW")
    }
}

function handleSignup(){
    const userName = id.value;
    const pwd = pw.value;
    h2.innerText = "SIGN UP";
    console.log(signin.placehodler);
    if(userName === "" && pwd === ""){
        console.log("NULL");
    } else{
        localStorage.setItem(userName, pwd);
    }
}

function handleSignin(){
    h2.innerText = "SIGN IN";
    login();
}

function init(){
    signin.addEventListener("click", handleSignin);
    signup.addEventListener("click", handleSignup);
}

init();