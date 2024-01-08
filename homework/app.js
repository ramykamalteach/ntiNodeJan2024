const sortJson = require("./sortJson");
const jsonArray = require("./data.json");

console.log(sortJson.sortJsonArrayByField(jsonArray, "address", true));