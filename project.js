// pegar os ids do html
const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector('#welcome');
const logoutBtn = document.querySelector('#logout');

// funcao para mostrar que o user esta logado e mandar um oi para ele
function checkUser(){
    const userName = localStorage.getItem('name');
    const userNameElement = document.querySelector("#username");
    
    if (!userName) {
        welcomeContainer.style.display = "none";
        nameForm.style.display = "block";
    }else{
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block";
        userNameElement.textContent = userName;
    }
}

// colocar dados no storage
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    // colocar no local storage
    localStorage.setItem("name", nameInput.value);
    nameInput.value = "";
    checkUser();
});

// evento do botao sair
logoutBtn.addEventListener("click", () =>{
    localStorage.removeItem('name');
    checkUser();
})

// Application start
checkUser();


