const fibonacci = function(num) {
    let n1 = 0; //reps the number in the sequence
    let n2 = 1; //reps the final number after iterations
    let final = 0;
    if (num < 0){
        return "OOPS"
    }
    else {
        for (let i=1; i<=num; i++){
            final = n1+n2;
            n1=n2;
            n2=final;
        }
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;

// npm test fibonacci.spec.js