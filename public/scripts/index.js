// console.log("Hello, world!");
// alert("Cookies?");

const login = () => {    
    console.log(usernameInput.value + " " + passwordInput.value);
    if((usernameInput.value === correctUser) && (passwordInput.value === correctPass)){

        sessionStorage.name = "Eduardo Vega";

        window.location = "./pages/profile.html";

    }else{
        alert("Incorrect username or password");
        console.log("Incorrect username or password");
    }   
};

const button = document.getElementById("submit-button");
const username = document.getElementById("username");
const password = document.getElementById("password");


const loging = () => {
    console.log(username.value + " " + password.value);
    window.location.href = "/home";
    
};


button.addEventListener("click",login);
