const products = require("./data/products.json");

const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const product = products.find(product => product.name === name);
            if(product) {
                resolve(product);
            }
            else {
                reject({"message": "product with this name not Found !!!"});
            }        
        }, 200);
    });


    /* setTimeout(()=> {
        const product = products.find(product => product.name === name);
        if(product) {
            cb(product, undefined);
        }
        else {
            cb(null, {"message": "product with this name not Found !!!"});
        }        
    }, 200); */
}

getProductByName("a02")
    .then(product => {
        console.log(product);
    })
    .catch(error => {
        console.log(error.message);
    });
