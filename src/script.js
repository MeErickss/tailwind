const inpt = document.querySelector("[inpt]")
const btn = document.querySelector("[btn]")
const pfp = document.querySelector("[pfp]")
const nameU = document.querySelector("[name]")
const login = document.querySelector("[login]")
const nameR = document.querySelector("[nameR]")
const description = document.querySelector("[description]")
const language = document.querySelector("[language]")

btn.addEventListener("click", function(){
    login.innerText = "@" + inpt.value 
})