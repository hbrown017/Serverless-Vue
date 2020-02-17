
let userList = []
var accessToken = '';

//---------------- API GET -------------------

function getUsers(){
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserInfo(userId){
    return getFetch('https://jsonplaceholder.typicode.com/users', {
        userId: userId
    })
}

//Facade Pattern
function getFetch(url, params = {}){
    const queryString = Object.entries(params).map(param =>{
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: {"Content-type": "application/json"}
    }).then(res => res.json())
}

getUsers().then(data => {
    var mainContainer = document.getElementById('data')
    data.forEach(user =>{
        getUserInfo(user.id).then(posts =>{
            //display API user data
            var div = document.createElement("div")
            div.innerHTML = 'Name: ' + user.name + ' (username: ' + user.username + ')'
            mainContainer.appendChild(div)

            //add usernames to list
            userList.push(user.username)
        })
    })
})

//--------------- form validation ---------------------

const name = document.getElementById("userName")
const password = document.getElementById("pw")
const form = document.getElementById("form")
const errors = document.getElementById("error")

form.addEventListener('submit', (e) =>{
    let messages = []
    if(name.value === '' || name.value == null)
        messages.push(' Name is required')
    
    var found = false
    for(x in userList){
        if(name.value == userList[x])
            found = true;
    }
    if(!found)
        messages.push(' Username not found')
    
    if(password.value.length <= 6)
        messages.push(' Password must be longer than 6 characters')
    
    if(password.value.length >= 20)
        messages.push(' Password must be less than 20 characters')

    if(messages.length > 0){
        e.preventDefault() 
        errors.innerText = messages.join(', ')
    }
})