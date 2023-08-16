// console.log('it f work')
function getInputElement(inputIdName){
    const inputDeposit =  document.getElementById(inputIdName);
    const inputDepositString = inputDeposit.value
    const inputDepositValue = parseFloat(inputDepositString);
    inputDeposit.value ='';
    return inputDepositValue;
}
function getTextElement(textIdName){
    const text = document.getElementById(textIdName)
    const textString = text.innerText;
    const textValue = parseFloat(textString);
    return textValue;
}
function setValue(idName, totalValue){
    const putValue = document.getElementById(idName)
    putValue.innerText = totalValue
}