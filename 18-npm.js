//npm init(step by step ,press enter to skip)
//npm init -y(everything default)

const lodash = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = lodash.flattenDeep(items);

console.log(newItems);//this will retur a simplified array of items
