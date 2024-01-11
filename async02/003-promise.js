const getCountryDetails =  (countryName) => {
    return new Promise((resolve, reject) => {
        fetch("https://restcountries.com/v3.1/name/" + countryName)
            .then(result => {
                resolve(result.json());
            })
    })
    
}

getCountryDetails("egypt")
    .then(result => {
        const curr = result[0].currencies;
        console.log(curr);
        for(let key in curr){
            console.log(curr[key].name);
        }
    })
    .catch()