document.addEventListener('DOMContentLoaded',()=>{
    let counter = document.querySelector('#counter')
    let userInput = document.querySelector('#user-input')
    const plus = document.querySelector('#plus')
    const minus = document.querySelector('#minus')

    counter.innerText = 0
    let countNum = parseInt(counter.innerText)
    let userNum = parseInt(userInput.value)

    userInput.addEventListener('keyup',()=>{
        userNum = parseInt(userInput.value)
    })
    
    plus.addEventListener('click',()=>{
        countNum = countNum + userNum
        counter.innerText = countNum
        if (countNum >= 0) counter.style.color = 'whitesmoke'
    })
})
