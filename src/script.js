const card = document.querySelector('[card]')


function getApiGithUB(nameU){
    fetch(`https://api.github.com/users/${nameU}`).then(
        async res => {
            if( !res.ok){
                throw new Error(res.status)
            }

            let data = await res.json()
            let user = document.createElement('div')

            user.innerHTML = `<article class="flex flex-wrap justify-center text-center">
                    <img pfp class="rounded-full absolute -mt-24 border-8 border-white" width="150" src="${data.avatar_url}" alt="profile picture">
                    <div class="py-14 h-16">
                        <p name class="text-2xl">${data.name}</p>
                        <span login class="text-slate-600" class="login">@${data.login}</span>
                    </div>
                </article>
            </header>

            <nav repos class="py-10">
                <p repositorios><strong>REPOSITÓRIOS</strong></p>
            </nav>`

                card.appendChild(user)
            card.style = "display: block;"
            getRepos(nameU)
        })
}

function getRepos(user){
    fetch(`https://api.github.com/users/${user}/repos`).then(
        async res => {
            if( !res.ok){
                throw new Error(res.status)
            }

            const repos = document.querySelector('[repos]')

            let data = await res.json()
            for (let i = 0; i<data.length; i++){
                let project = document.createElement('div')

                project.innerHTML += `<section class="px-5 my-4 h-24 rounded">
                    <strong nameR class="nameR">${(data[i].name)}</strong>
                    <p description class="description">${data[i].description}</p>
                    <span language class="bg-zinc-400 rounded px-4"><strong>#${data[i].language}</strong></span>
                </section>`
                repos.appendChild(project)
            }

            console.log(data)

        })
}

const inpt = document.querySelector("[inpt]")
const btn = document.querySelector("[btn]")

btn.addEventListener("click", function(){
    getApiGithUB(inpt.value)
})