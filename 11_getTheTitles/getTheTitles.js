const getTheTitles = function(arr) {
    let a = [];
    arr.forEach(obj => {
       a.push(obj.title); 
    });
    return a;
};

// Do not edit below this line
module.exports = getTheTitles;
// npm test getTheTitles.spec.js
