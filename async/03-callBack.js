const products = require("./data/products.json");

const getProductByName = (name, cb) => {
    setTimeout(()=> {
        const product = products.find(product => product.name === name);
        if(product) {
            cb(product, undefined);
        }
        else {
            cb(null, {"message": "product with this name not Found !!!"});
        }        
    }, 200);
}

getProductByName("abc", (product, error) => {
    if(product){
        console.log(product)
    }
    else {
        console.log(error.message);
    }
});
