const registerBtn = document.querySelector(".register-now")

let link = `https://forms.gle/fe8b72abJaeTkJeT6`;

registerBtn.addEventListener("click",()=>{
    window.open(link, "_blank")
})