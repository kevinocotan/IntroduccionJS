// Fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
