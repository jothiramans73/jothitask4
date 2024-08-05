let palindrome = (String) => {
    let array = String.split(" ");
    let newArray = [];
    for(let value of array){
        let newString = "";
        for(let i in value){
            newString = newString + value[(value.length-1)-i];
        }

    if(value === newString){
            newArray.push(value);
        }
    }
    return newArray;

}
let palArray = palindrome("time pop dad mom");
console.log(palArray); // [ 'pop', 'dad', 'mom' ]