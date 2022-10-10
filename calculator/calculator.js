let firstNumber;
let secondNumber;

function askNumber1() {
    firstNumber = prompt('Introduce el primer número');
    if (isNaN(firstNumber) === true) {
        alert('Error!! Solo admiten números. Intentalo nuevamente');
        return askNumber1();
    } else if (firstNumber == null) {
        alert('¡¡Hasta pronto!!');
        return undefined;
    } else if (firstNumber === '') {
        return askNumber1();
    } else {
        console.log('Resultado del primer número: ' + firstNumber);
    }
}
function askNumber2() {
    secondNumber = prompt('Introduce el segundo número');
    if (isNaN(secondNumber) === true) {
        alert('Error!! Solo admiten números. Intentalo nuevamente');
        return askNumber2();
    } else if (secondNumber === '') {
        return askNumber2();
    } else {
        console.log('Resultado del segundo número: ' + secondNumber);
    }
}

function onlyNumber() {
    let raizCuadrada = Math.sqrt(parseFloat(firstNumber));
    if (firstNumber && !secondNumber) {
        console.log(
            `El resultado de la raíz cuadrada: ${raizCuadrada.toFixed(3)}`
        );
    } else {
        console.log(
            `El resultado de la suma: ${
                parseFloat(firstNumber) + parseFloat(secondNumber)
            }`
        );
        console.log(
            `El resultado de la resta : ${
                parseFloat(firstNumber) - parseFloat(secondNumber)
            }`
        );
        console.log(
            `El resultado de la multiplicacion : ${parseFloat(
                firstNumber * secondNumber
            ).toFixed(3)}`
        );
        console.log(
            `El resultado de la división : ${parseFloat(
                firstNumber / secondNumber
            ).toFixed(3)}`
        );
    }
}

function calculator() {
    askNumber1();
    console.log(
        '************************************************************************'
    );
    if (firstNumber == null) {
        return undefined;
    } else {
        askNumber2();
        console.log(
            '************************************************************************'
        );
        onlyNumber();
        console.log(
            '************************************************************************'
        );
    }
}
calculator();
