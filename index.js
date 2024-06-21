const array1 = ['apple', 'appricot', 'appstore','apply'];
const array2 = ['apple', 'banana', 'apricot', 'cherry', 'avocado'];
const convertLowercase=(data)=>{
    return data.map((element)=>element.toLowerCase())
}

const commonPrefix=(strs)=> {
    let item = convertLowercase(strs);
    if (!item.length||item.length>200) return "";
    let prefix = item[0];
    for (const str of item) {
        if(str.length>200) return "";
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
}

const result1 = commonPrefix(array1);
const result2 = commonPrefix(array2);

console.log('Output 1:',result1);
console.log('Output 2:',result2);
