const login = document.getElementById('loginbtn');
const register = document.getElementById('registerbtn');
const formRegister = document.getElementById('register-form');
const formLogin = document.getElementById('login-form')
document.addEventListener('click',e=>{
    console.log(e.target)
    if(e.target===login){
        login.classList.add("button-toggle");
        register.classList.remove("button-toggle");
        formLogin.style.display = "block";
        formLogin.style.left = "25%";
        formRegister.style.left = "60%";
        formRegister.style.display = "none";

    }
})
document.addEventListener('click',e=>{
    if(e.target===register){
        login.classList.remove("button-toggle");
        register.classList.add("button-toggle");
        formLogin.style.left = "10%"
        formRegister.style.display = "block";
        formRegister.style.left = "30%";
        formLogin.style.display = "none";
    }
})