let oddNum = (function(array){
    for(let i in array){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
   }
})([1,2,3,4,5])