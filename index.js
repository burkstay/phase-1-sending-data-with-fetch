// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        })
    })
    
}

function submitDataResponse(responseObj) {
    fetch('http://localhost:3000/users')
    document.createElement(responseObj)
    .then((resp) => resp.json)
    .then((json) => responseObj(json ))
}