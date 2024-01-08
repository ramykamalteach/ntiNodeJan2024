const getCountryByName = async (countryName) => {
    const countryDetails = await fetch("https://restcountries.com/v3.1/name/" + countryName);
    if(countryDetails.status == 200){
        return countryDetails.json();
    }
    else {
        throw new Error("Country not found");
    }
}


getCountryByName("abc")
    .then(country => {
        console.log(country[0].name.official);
        /* console.log(country[0].population);
        console.log(country); */
    })
    .catch(error => {
        console.log(error.message);
    })
;
