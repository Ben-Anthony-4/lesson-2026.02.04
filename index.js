// FUNCTION passFail(score)
//     IF score is greater than or equal to 50
//         PRINT "Pass"
//     ELSE
//         PRINT "Fail"
// END FUNCTION

const pass = 'Pass'
const fail = 'Fail'

function passFail(score) {
    let result;

    if(score >= 50)
    {
        result = pass;
    } else if (score == 50){
        result = `${pass}/${fail}`
    }
    else {
        result = fail;
    }

    return result;
}

console.log(passFail(80));
console.log(passFail(50));
console.log(passFail(40));
console.log(passFail(60));
console.log(passFail(40));
console.log(passFail(50));
console.log(passFail(88));
console.log(passFail(100));
