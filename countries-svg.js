// JavaScript to handle country highlighting and information
const divmap = document.getElementById("europe-map");

divmap.onclick = (evt) => {
    console.log(evt.target.id);
    fetchAndDisplayCountryInfo(evt.target.id);
};

divmap.onmouseover = (evt) => {
    evt.target.style.fill = "blue";
};

divmap.onmouseout = (evt) => {
    evt.target.style.fill = "#dcdcdc";
}

// Function to display country information
async function fetchAndDisplayCountryInfo(countryId) {
    try {
        const response = await fetch(`https://countries.plaul.dk/api/countries/${countryId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const currencies = data.currencies;
        const currencyList = [];
        for (const prop in currencies) {
            currencyList.push(`${prop}, name: ${currencies[prop].name}, symbol: ${currencies[prop].symbol}`);
        }
        document.getElementById("imgflag").src = data.flag;
        document.getElementById("divcountryname").innerText = `Country: ${data.name.common}`;
        document.getElementById("divun").innerText = `Member of UN: ${data.unMember}`;
        document.getElementById("divcurrencies").innerText = currencyList.join(" - ");
        document.getElementById("divcapital").innerText = `Capital: ${data.capital}`;
        document.getElementById("divborders").innerText = `Borders: ${data.borders}`;
        document.getElementById("fetch-info").innerText = "Country information:";
        document.getElementById("info-box").style.display = "block";
    } catch (error) {
        console.error("Error fetching country information:", error);
        document.getElementById("info-box").style.display = "none";
        document.getElementById("fetch-info").innerText = "Country information not available.";
    }
}