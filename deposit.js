     document.getElementById('btn').addEventListener('click', function(){
        const newDepositAmount = getInputElement('input-1')
        // console.log(newDepositAmount)
        const previousDepositAmount = getTextElement('depositValue')
        // console.log(previousDepositAmount)
        const newDepositTotalAmount = previousDepositAmount + newDepositAmount
        setValue('depositValue',newDepositTotalAmount)
        const previousBalance = getTextElement("balanceValue")
        // console.log(previousBalance)
        const totalBalance = previousBalance + newDepositAmount
        setValue('balanceValue',totalBalance)
    })

