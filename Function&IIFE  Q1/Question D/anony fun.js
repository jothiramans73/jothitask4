let primeNum = function(num){
    var count = 0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        return true;
    }
    else{
        return false;
    }

}
let primeNumArray = function(array){
    let newArray = [];
    for(let number of array){
        if(primeNum(number)==true){
            newArray.push(number);
        }
    }
    return newArray;
}
let array = [1,2,3,,5,6,7,8,9,10,11];
console.log(primeNumArray(array));