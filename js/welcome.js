const username = document.querySelector('.username-value')
// const input = document.querySelector("#game")
const enterbtn = document.querySelector('.enter-button')
const post = 'http://localhost:3000/users/'

enterbtn.addEventListener('click',function(e){
  
  legitUser()
  setTimeout(() => {
    document.location.href = './index.html'
    
  }, 2000);
  
})

function legitUser(){
  
  if (username.value !== ''){
    debugger
    
    fetch(post, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: {username: username.value}})
    }).then(response => response.json())
    .then(json => { 
      debugger
      console.log(json)}
      )
      

    }
  else { 
    alert('Please put in a value')
  }
  }



