import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    const [input, setInput] = useState('')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('')
    const [input2, setInput2] = useState('')

    function setNumber(e) {  
        e.preventDefault()
        if(String(input).charAt(0)=== '0') {
            setInput(e.target.value)
        } else {
            !operator ? setInput(input + e.target.value) : setInput2(input2 + e.target.value)
        }
    }

    function whichOp(e) {
        setOperator(e.target.value)
        console.log(e.target.value)
    }

    function calculate() {
        let num1 = Number(input)
        let num2 = Number(input2)

        if(operator === '+') {
            let sum = num1 + num2;
            setResult(sum)
            setInput(sum)
            setOperator('')
            setInput2('')
        } else if (operator === '-') {
            let sub = num1 - num2;
            setResult(sub)
            setInput(sub)
            setOperator('')
            setInput2('')
        } else if (operator === '*') {
            let product = num1 * num2;
            setResult(product)
            setInput(product)
            setOperator('')
            setInput2('')
        } else if (operator === '/') {
            let difference = num1/num2;
            setResult(difference)
            setInput(difference)
            setOperator('')
            setInput2('')    
        } else if (operator === '%') {
            let percent = num1 % num2;
            setResult(percent)
            setInput(percent)
            setOperator('')
            setInput2('')
        } 
    }

    function handleZero(e) {
        if(input && operator && input2 === '') {
            setInput2(e.target.value + '.')
        } else if (input !== '' && input2 !== '') {
            setInput2(input2 + e.target.value)
        } else if (input === '') {
            setInput(e.target.value + '.')
        } else if (input !== '') {
            setInput(input + e.target.value)
        } else {
            setInput2(input2 + e.target.value)
        }
    }
    
    function clear() {
        setInput('')
        setInput2('')
        setResult('')
        setOperator('')
    }

    function negative() {
        input === '' ? alert('no') : setInput(Number(input) * (-1))
    }

    function dot(e) {
        if(input === '') {
            setInput('0' + e.target.value)
        } else if(input !== '' && input.includes('.') === false) {
            setInput(input + e.target.value)
        } else if(input && operator && input2 === '') {
            setInput2('0' + e.target.value)
        } else if(input && operator && input2.includes('.') === false) {
            setInput2(input2 + e.target.value)
        } else {
            alert('No more decimals')
        }
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{input}{operator}{input2}</div>
                <div className="calc-row">
                    <button onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={negative} className="calc-button calc-button-top">+/-</button>
                    <button onClick={whichOp} value={'%'} className="calc-button calc-button-top">%</button>
                    <button onClick={whichOp} value={'/'} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={'7'} className="calc-button">7</button>
                    <button onClick={setNumber} value={'8'} className="calc-button">8</button>
                    <button onClick={setNumber} value={'9'} className="calc-button">9</button>
                    <button onClick={whichOp} value={'*'} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={'4'} className="calc-button">4</button>
                    <button onClick={setNumber} value={'5'} className="calc-button">5</button>
                    <button onClick={setNumber} value={'6'} className="calc-button">6</button>
                    <button onClick={whichOp} value={'-'} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={'1'} className="calc-button">1</button>
                    <button onClick={setNumber} value={'2'} className="calc-button">2</button>
                    <button onClick={setNumber} value={'3'} className="calc-button">3</button>
                    <button onClick={whichOp} value={'+'} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleZero} value={'0'} className="calc-button width-2">0</button>
                    <button onClick={dot} value={'.'} className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator