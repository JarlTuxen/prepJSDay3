fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "User1"
    })
})
    .then(res => {
        return res.json()
        // if (res.ok) {
        //     console.log("SUCCES")
        // } else {
        //     console.log("Not Successful")
        // }
        //res.json()
    })
    .then(data => console.log(data))