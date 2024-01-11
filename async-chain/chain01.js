// relationship products ---> stores ---> cities

/* ----------- 3 async function to get All product, All Stores, All Cities ------------ */
const getAllProducts = async () => {
    const products = await fetch("https://api.jsonbin.io/v3/b/659c6466266cfc3fde7475d6");
    if(products.status == 200){
        return products.json()
    }
}
const getAllStores = async () => {
    const stores = await fetch("https://api.jsonbin.io/v3/b/659e4decdc746540188f8e6f");
    if(stores.status == 200){
        return stores.json()
    }
}
const getAllCities = async () => {
    const cities = await fetch("https://api.jsonbin.io/v3/b/659ed67f1f5677401f1a5a60");
    if(cities.status == 200){
        return cities.json()
    }
}

/* ----------------- global variables ------------- */

productName = "a02";
storeId = "";
cityId = "";

/* ------------------------------------------------ */

/* ----------------- start code ----------------- */
/* ----- getAllProducts  then  getAllStores   then  getAllCities */
/* ----------------------------------------------- */
getAllProducts()
    .then(products => {
        const searchedProduct = products.record.find( product => product.name === productName);
        storeId = searchedProduct.storeId;
    })
    .then(() => {
        getAllStores()
            .then(stores => {
                const searchedStore = stores.record.find( store => store.id === storeId);
                cityId = searchedStore.cityId;
            })
    })
    .then(() => {
        getAllCities()
            .then(cities => {
                const searchedCity = cities.record.find( city => city.id === cityId);
                cityName = searchedCity.name;
                console.log(searchedCity, cityName);
            })
    })