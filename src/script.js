const repositors = document.querySelector('[corpo]')

function getApiGithUB(user){
    fetch(`https://api.github.com/users/${user}/repos`).then(
        async res => {
            if( !res.ok){
                throw new Error(res.status)
            }
            let data = await res.json()
            data.map(item => {
                let project = document.createElement('div')
                
                project.innerHTML = `${item.name}`

                repositors.appendChild(project)
            })
            console.log(data)
        })
}


const inpt = document.querySelector("[inpt]")
const card = document.querySelector("[card]")
const btn = document.querySelector("[btn]")
const pfp = document.querySelector("[pfp]")
const nameU = document.querySelector("[name]")
const login = document.querySelector("[login]")
const nameR = document.querySelector("[nameR]")
const description = document.querySelector("[description]")
const language = document.querySelector("[language]")

btn.addEventListener("click", function(){
    card.style = "display: block;"
    getApiGithUB(inpt.value)
})