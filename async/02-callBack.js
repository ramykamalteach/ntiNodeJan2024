const products = require("./data/products.json");

const getProductByName = (name, cb) => {
    setTimeout(()=> {
        const product = products.find(product => product.name === name);
        cb(product);
    }, 200);
}

getProductByName("a02", (product) => {
    console.log(product);
});

/* const product = getProductByName("a02");
console.log(product); */