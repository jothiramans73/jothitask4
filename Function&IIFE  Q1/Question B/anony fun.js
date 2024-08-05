let titleCaps = function(string){

    let array = string.split("");
    let newSring="";
        for(let i=0;i<array.length;i++){
    let firstLetter = array[i].slice(o,1);
    let remaingLetters = array[i].slice(1);
    let firstLetterCaps = firstLetter.toUpperCase();
    let titleCapsString = firstLetterCaps+remaingLetters;
    newString = newString + " " + titleCapsString;
        }

    console.log(newString);   
}

titleCaps("i am human");