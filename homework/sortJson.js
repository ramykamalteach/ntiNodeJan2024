const sortJsonArrayByField = (jsonArray, fieldName, ascending) => {
    return jsonArray.sort((a, b) => {
      const fieldA = a[fieldName];
      const fieldB = b[fieldName];
  
      if (ascending) {
        return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
      } else {
        return fieldB < fieldA ? -1 : fieldB > fieldA ? 1 : 0;
      }
    });
  }

module.exports = {
    sortJsonArrayByField
}