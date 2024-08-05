let primeNumArray = (function(array){
    let newArray = [];
    for(let number of array){
        if(primeNum(number)==true){
            newArray.push(number);
        }
    }
    return newArray;
})([1,2,3,,5,6,7,8,9,10,11]);
console.log(primeNumArray);