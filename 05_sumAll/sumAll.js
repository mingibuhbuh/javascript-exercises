function sumAll(...arr) {
    for(let i = 0; i < arr.length; i ++) {
        if (typeof arr[i] != "number") {
                    return "ERROR"
        }
    }
    
    if (arr[0] > arr[1])
      arr.sort((a, b) => a - b)
  
    const newArr = [] 
    
    for(let i = arr[0]; i <= arr[1]; i += 1)
        if (arr[i] < 0)  {
            return "ERROR"; }
        
        else{ 
        newArr.push(i)}
  
    return newArr.reduce((acc, cur) => acc + cur)
  }




// Do not edit below this line
module.exports = sumAll;
// npm test sumAll.spec.js