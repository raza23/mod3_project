const value = document.querySelector('.username-value')
// const input = document.querySelector("#game")
const enterbtn = document.querySelector('.enter-button')
const post = 'http://localhost:3000/users'

enterbtn.addEventListener('click',function(e){
  
  legitUser()
  
})

function legitUser(){
  
  if (value.value !== ''){
    debugger
    fetch(post, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({username: value.value})
    }).then(response => response.json())
      .then(json => { debugger
        console.log(json)}
        )

    }
  else { 
    alert('Please put in a value')
  }
  }



