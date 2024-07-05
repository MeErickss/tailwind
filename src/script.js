const imgs = [
    "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719792000&semt=ais_user", "https://img.freepik.com/fotos-gratis/pico-da-montanha-nevada-sob-a-majestade-generativa-da-galaxia-estrelada-ai_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719964800&semt=ais_user",
    "https://i.pinimg.com/736x/60/63/da/6063da107454d50c1d7786cc2c2bac75.jpg",
    "https://i.pinimg.com/564x/be/8c/c9/be8cc91ca24dea985ec394dfd8e5ff74.jpg",
    "https://i.pinimg.com/736x/42/91/ef/4291ef9d28ddbb65e1d8ac2a2a632642.jpg",
    "https://i.pinimg.com/564x/33/40/f5/3340f59c8b98a834b01b66f927599131.jpg",
    "https://i.pinimg.com/564x/81/2c/20/812c206e207d0e671075183f3683e7ef.jpg",
    "https://i.pinimg.com/564x/eb/e7/a9/ebe7a9c46af8fa3b0531c30f7b953e1a.jpg",
    "https://i.pinimg.com/564x/6a/94/3f/6a943fcdf9944bfca4da1f5a38aaa60b.jpg",
    "https://i.pinimg.com/564x/3c/a0/18/3ca01809f2dee927870f01e2659f4f50.jpg"
]


function getApiGithUB(nameU){
    fetch(`https://api.github.com/users/${nameU}`).then(
        async res => {
            if( !res.ok){
                throw new Error(res.status)
            }

            let data = await res.json()

            cartoes.innerHTML += `<main ${nameU} id="${nameU}" class="w-1/4 h-3/5 py-10 px-10 border-b-2 border-slate-400 rounded">
                <header>
                    <div class="head">
                        <img class="rounded h-64 w-full" src="${imgs[Math.floor(Math.random() * (imgs.length))]}" alt="background">
                    </div>
                </header><article class="flex flex-wrap justify-center text-center">
                        <img pfp class="rounded-full absolute -mt-24 border-8 border-white" width="150" src="${data.avatar_url}" alt="profile picture">
                        <div class="py-14 h-16">
                            <p name class="text-2xl">${data.name}</p>
                            <span login class="text-slate-600" class="login">@${data.login}</span>
                        </div>
                    </article>
                </header>
    
                <nav repos class="py-10">
                    <p repositorios><strong>REPOSITÓRIOS</strong></p>
                </nav>
                <div perfil></div>
            </main>`

            let card = document.querySelector(`[${nameU}]`)

            fetch(`https://api.github.com/users/${nameU}/repos`).then(
                async res => {
                    if( !res.ok){
                        throw new Error(res.status)
                    }
        
                    const repos = document.querySelector('[repos]')
        
                    let data = await res.json()
                    for (let i = 0; i<data.length; i++){
                        let project = document.createElement('div')
        
                        project.innerHTML = `<section class="px-5 my-4 h-24 rounded">
                            <strong nameR class="nameR">${(data[i].name)}</strong>
                            <p description class="description">${data[i].description}</p>
                            <span language class="bg-zinc-400 rounded px-4"><strong>#${data[i].language}</strong></span>
                        </section>`
                        card.appendChild(project)
                    }
        
                    console.log(data)
            })
        })
}


const inpt = document.querySelector("[inpt]")
const btn = document.querySelector("[btn]")
const cartoes = document.querySelector("[cartoes]")

btn.addEventListener("click", function(){
    if(document.getElementById(`${inpt.value}`) == null){
        getApiGithUB(inpt.value)
    } else{alert("Usuário já inserido")}
})