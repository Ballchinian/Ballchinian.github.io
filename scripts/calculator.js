function equivalentCheck() { //allows last value to remain in view
    if (parseInt(document.getElementById("equivalent").value)) {

        document.getElementById("equivalent").value=0;
        document.getElementById("result").value=0;
    }
}

function input(x) {

    equivalentCheck() 

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0) {
        x += y * 10; //multiply the text input by 10 and add the value of x

        document.getElementById('result').value=x; //Returns x to the text output
    }

    else { //If decimal is true

        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if (decimalCount==1) {
            
            x*= 1/10; //We are using Math to place decimal point
            y += x;
            document.getElementById("result").value = y;
        }

        else {
            document.getElementById("result").value += x;
        }

        decimalCount++;

        document.getElementById("decimalVar").value = decimalCount;
    }
}

function decimalPoint() {
    if (document.getElementById("decimalVar").value == 0) { //This prevents multiple decimal points
        document.getElementById("decimalVar").value = 1;
    }

    if(parseInt(document.getElementById("operation").value)) { //If this is empty, will return false
        document.getElementById("result").value = 0;
    }
}



function equals() {
    operators(parseInt(document.getElementById("operation").value))
    document.getElementById("result").value=document.getElementById("operand").value;
    document.getElementById("operand").value="";

    document.getElementById("equivalent").value=1;
}

function allClear() {
    document.getElementById("result").value=0;
    document.getElementById("operation").value=0;
    document.getElementById("operand").value="";

    document.getElementById("equivalent").value=0;
}

function percent() {
    let x = parseFloat(document.getElementById("result").value)
    x*=0.01;
    document.getElementById("result").value=x;
}

function plusminus() {
    let x = parseFloat(document.getElementById('result').value)
    x*=-1;
    document.getElementById("result").value=x;
}

function square() {
    let x = parseFloat(document.getElementById('result').value)
    x*=x;
    document.getElementById("result").value=x;
}

function operandCheck() {
    if(document.getElementById("operand").value=="") {
        document.getElementById("operand").value = document.getElementById("result").value;


        document.getElementById("equivalent").value=1;
    }
    else {
        operatorCheck();
    }
}

function operatorCheck() {

    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById("result").value);

    switch(parseInt(document.getElementById("operation").value)) {
        //add
        case 1: 
            a+=b;
            break;
        //minus
        case 2:
            a-=b;
            break;
        //multiply
        case 3:
            a*=b;
            break;
        //divide
        case 4:
            a/=b;
            break;
        default:
    }

    document.getElementById("operand").value=a;
    document.getElementById("result").value=a;

    document.getElementById("equivalent").value=1;
}

function operators(x) {
    switch (x) {
        //add
        case 1: 
            document.getElementById("operation").value=1;
            break;
        //minus
        case 2:
            document.getElementById("operation").value=2;
            break;
        //multiply
        case 3:
            document.getElementById("operation").value=3;
            break;
        //divide
        case 4:
            document.getElementById("operation").value=4;
            break;
        default:
    }
    operandCheck();
}

