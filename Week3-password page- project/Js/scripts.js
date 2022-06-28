// Toggle for the Password imput
const visibilityBtn = document.getElementById('visibilityBtn')
visibilityBtn.addEventListener('click', togglevisibility)

function togglevisibility() {
    const passwordInput = document.getElementById('password')
    const icon = document.getElementById('icon')
    if (passwordInput.type === "password"){
        passwordInput.type ="text"
        icon.innerText = "visibility_off"
    } else{
        passwordInput.type ="password"
        icon.innerText = "visibility"
    }
}


// Toggle for the Confirm Password imput
const visibilityBtn2 = document.getElementById('visibilityBtn2')
visibilityBtn2.addEventListener('click', togglevisibility2)

function togglevisibility2() {
    const passwordInput2 = document.getElementById('comfirmpassword')
    const icon2 = document.getElementById('icon2')
    if (passwordInput2.type === "password"){
        passwordInput2.type ="text"
        icon2.innerText = "visibility_off"
    } else{
        passwordInput2.type ="password"
        icon2.innerText = "visibility"
    }
}