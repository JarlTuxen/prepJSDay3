fetch('https://jsonplaceholder.typicode.com/users/1')
    .then( res => {
        if (!res.ok) {
            const err = new Error(`Error ${res.status} ${res.statusText}`)
            throw err;
        }
        return res.json()
    }
    )
    .then( data => console.log(data))
    .catch(err => {
        console.error(err.message)
    })

async function asyncAwaitDemo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2')
        if (!response.ok){
            const error = new Error(`Error ${response.status} ${response.statusText}`)
            throw error;
        }
        const data = await response.json()
        console.log(data)
    }
    catch(err){
        console.log(err.message)
    }
}

asyncAwaitDemo()