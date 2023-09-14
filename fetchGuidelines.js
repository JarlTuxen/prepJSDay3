fetch("https://api.punkapi.com/v2/beers/99999999")
    .then(res => {
        if (!res.ok) {
            return res.json()
                .then(body => {
                    const error = new Error(body.message)
                    error.apiError = body
                    throw error
                })
        }
        return res.json()
    })
    .then(data => console.log(data))
    .catch(err => {
        console.error(err.message); ////All errors will have a message
        //If we need the additional properties supplied by the server we can check
        // whether it was an API-error
        if (err.apiError) {
            console.error("Full API error: ", err.apiError)
        }
    })

function handleHttpErrorsV1(res) {
    if (!res.ok) {
        return res.json()
            .then(body => {
                const error = new Error(body.message)
                error.apiError = body
                throw error
            })
    }
    return res.json()
}

fetch("https://api.punkapi.com/v2/beers/99999999").then(handleHttpErrorsV1)
    .then(data => console.log(data))
    .catch(err => {
        console.log(err.message);
        if (err.apiError) { //Check if this was an API-error
            console.error("Full API error: ", err.apiError)
        }
    })
