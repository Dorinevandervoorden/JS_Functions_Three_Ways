console.log("Hallo Winc Academy Studenten");

//Three ways to write a function

/* Opdracht
2 cijfers
2 cijfers in het kwadraat (met zichzelf vermenigvuldigen)
kwadraten bij elkaar optellen
deze som weer in het kwadraat
result is returned
*/

// Function declaration
function fDec(numberA, numberB) {
    const squareA = numberA * numberA;
    const squareB = numberB * numberB;
    const sumDec = squareA + squareB;
    const resultDec = sumDec * sumDec;
    return resultDec;
}

console.log(fDec(2, 3));

//Function expression
const fExp = function (numberC, numberD) {
    const squareC = numberC * numberC;
    const squareD = numberD * numberD;
    const sumExp = squareC + squareD;
    const resultExp = sumExp * sumExp;
    return resultExp;
}

console.log(fExp(2, 3));

//Arrow function
const fArr = (numberE, numberF) => {
    const squareE = numberE * numberE;
    const squareF = numberF * numberF;
    const sumArr = squareE + squareF;
    const resultArr = sumArr * sumArr;
    return resultArr;
}

console.log(fArr(2, 3));