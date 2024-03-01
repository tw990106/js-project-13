const logo = document.getElementById("logo")

logo.addEventListener("click",()=>{
    window.location.href = "../index.html"
})

const login = () =>{
    let userID = document.getElementById("userId").value
    let Password = document.getElementById("userPassword").value

    if(userID === "" ||Password === "" ){
        let warningModal = new bootstrap.Modal(document.getElementById('loginModal'))
        warningModal.show();
    } else {
        window.location.href = "main.html"
    }
}