scores = document.querySelector('#scores')
clicks = document.querySelector('#clicks')
time1 = document.querySelector('#time')
usernames - document.querySelector('#usernames')
const users = 'http://localhost:3000/users'

function getscores(){
    fetch(users)
    .then(resp => resp.json())
    .then(json => showscores(json))
}


function showscores(json){
    json.forEach(user => {
        const username = document.createElement('tr')
        username.textContent = user.username
        usernames.appendChild(username)

        const click = document.createElement('tr')
        click.textContent = user.clicks
        clicks.appendChild(click)

        const time = document.createElement('tr')
        time.textContent = user.time
        time1.appendChild(time)  
    });
}

getscores()
