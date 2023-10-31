let displayValue ='';

function displayResult(value){
    displayValue += value
    document.getElementById('display').value = displayValue;
    console.log(`The Number is: ${displayValue}`)
}

function displayClear(){
    displayValue = '';
    document.getElementById('display').value = '';
}

function displayCalculator(){
    try {
        displayValue  = eval(displayValue)
        document.getElementById('display').value = displayValue ;
    } catch (error) {
        document.getElementById('display').value =  error;
        
    }
}
