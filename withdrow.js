document.getElementById("btn-2").addEventListener('click',function(){
    const inputWithdrow = getInputElement("input-2")
    const previousWithdrow = getTextElement("withdrawValue");
    const totalWithdrow = previousWithdrow + inputWithdrow
    setValue("withdrawValue", totalWithdrow)
    const balance = getTextElement("balanceValue")
    const totalBalance = balance -inputWithdrow ;
    setValue("balanceValue", totalBalance)
})