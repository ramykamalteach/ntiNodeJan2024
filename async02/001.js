const getCountryDetails = async (countryName) => {
    const result = await fetch("https://restcountries.com/v3.1/name/" + countryName);
    if(result.status == 200) {
        return result.json();
    }
    else {
        // error
        throw new Error("Country not found");
    }
}

getCountryDetails("Zimbabwe")
    .then(result =>{
        const curr = result[0].currencies;
        console.log(curr);
        for(let key in curr){
            console.log(curr[key].name);
        }        
    })
    .catch()

/* getCountryDetails("Zimbabwe")
    .then(function(result){
        const curr = result[0].currencies;
        console.log(curr);
        for(let key in curr){
            console.log(curr[key].name);
        }        
    })
    .catch() */
