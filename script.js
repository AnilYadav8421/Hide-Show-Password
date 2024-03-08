const password = document.getElementById("password");
const eyeicon = document.getElementById("eyeicon");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "img/eye-open.png"
    }else{
        password.type == "text"
        password.type = "password";
        eyeicon.src = "img/eye-close.png"
    }
}