const {writeFileSync, mkdirSync } = require('fs');
const fs = require('fs');

const list = [
    'concept-es5' , 
    'concept-es6' , 
    'concept-async' , 
    'concept-modules' ,
    'concept-ts' 
];

createDir = (name) => {

    if(!fs.existsSync(name)) {
        mkdirSync(name);
    }
    return name;
}

createFile = (name) => {
    writeFileSync(`${name}/index.js`,'');
    return name;
}

console.log(list.map(createDir).map(createFile));