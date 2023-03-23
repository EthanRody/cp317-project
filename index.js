// declare constants for document elements
const inputEl = document.getElementById("input-el")
const zeroBut = document.getElementById("0-but")
const oneBut = document.getElementById("1-but")
const twoBut = document.getElementById("2-but")
const threeBut = document.getElementById("3-but")
const fourBut = document.getElementById("4-but")
const fiveBut = document.getElementById("5-but")
const sixBut = document.getElementById("6-but")
const sevenBut = document.getElementById("7-but")
const eightBut = document.getElementById("8-but")
const nineBut = document.getElementById("9-but")
const decBut = document.getElementById("dec-but")
const divBut = document.getElementById("div-but")
const mulBut = document.getElementById("mul-but")
const subBut = document.getElementById("sub-but")
const addBut = document.getElementById("add-but")
const eqlBut = document.getElementById("eql-but")

// declare variable
let equation = ""

// calculate result of equation on button press
eqlBut.addEventListener("click", function(){
    let equationArray = Array.from(equation)

    for (let i = 0; i < equationArray.length; i++){
        if (equationArray[i] === 'x') equationArray[i] = '*'
    }
    let result = equationArray.join("")
    try {
        result = math.evaluate(result)
    }
    catch(err) {
        result = "Invalid Input"
    }
    equation = ""
    inputEl.value = result
})

// modify equation on button press
zeroBut.addEventListener("click", function(){
    equation += 0
    inputEl.value = equation
})

oneBut.addEventListener("click", function(){
    equation += 1
    inputEl.value = equation
})

twoBut.addEventListener("click", function(){
    equation += 2
    inputEl.value = equation
})

threeBut.addEventListener("click", function(){
    equation += 3
    inputEl.value = equation
})

fourBut.addEventListener("click", function(){
    equation += 4
    inputEl.value = equation
})

fiveBut.addEventListener("click", function(){
    equation += 5
    inputEl.value = equation
})

sixBut.addEventListener("click", function(){
    equation += 6
    inputEl.value = equation
})

sevenBut.addEventListener("click", function(){
    equation += 7
    inputEl.value = equation
})

eightBut.addEventListener("click", function(){
    equation += 8
    inputEl.value = equation
})

nineBut.addEventListener("click", function(){
    equation += 9
    inputEl.value = equation
})

decBut.addEventListener("click", function(){
    equation += '.'
    inputEl.value = equation
})

divBut.addEventListener("click", function(){
    equation += '/'
    inputEl.value = equation
})

mulBut.addEventListener("click", function(){
    equation += 'x'
    inputEl.value = equation
})

subBut.addEventListener("click", function(){
    equation += '-'
    inputEl.value = equation
})

addBut.addEventListener("click", function(){
    equation += '+'
    inputEl.value = equation
})