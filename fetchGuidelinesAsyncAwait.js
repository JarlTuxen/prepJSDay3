async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const error = new Error(errorResponse.message)
        error.apiError = errorResponse
        throw error
    }
    return res.json()
}

async function fetchBeerInfo() {
    try {
        const data= await fetch("https://api.punkapi.com/v2/beers/999")
            .then(handleHttpErrors)
        console.log(data)
    } catch (err) {
        if (err.apiError) {
            console.error("Full API error: ", err.apiError)
        } else {
            console.error(err.message)
        }
    }
}

fetchBeerInfo()