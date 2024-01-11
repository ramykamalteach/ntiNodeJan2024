const getCountryDetails = (countryName, cb) => {
    /* const result = fetch("https://restcountries.com/v3.1/name/" + countryName);
    if(result.status == 200){
        cb(result.json());
    } */
    fetch("https://restcountries.com/v3.1/name/" + countryName)
        .then( result => {
            cb(result);
        })
    
}

getCountryDetails("egypt", function(result){
    console.log(result);
    /* const curr = result[0].currencies;
    console.log(curr); */
})