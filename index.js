const url = "https://api.chucknorris.io/jokes/random "

async function getText() {
    const responce = await fetch(url)
    const resulte = await responce.json()
    render(resulte)
}

const root = document.getElementById('root')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    getText()
})

const render = (joke) => {

    main.innerHTML = ''

    const text = document.createElement('p')
    const img = document.createElement('img')

    text.innerHTML = joke.value
    img.src = joke.icon_url
    text.style.width = '50%'
    main.style.display = 'flex'


    main.append(text, img)
}
