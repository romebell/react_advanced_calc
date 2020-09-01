import React, { useState } from 'react'
import './App.css'


const Calculator = (props) => {
    // Declare state variables
    
    let [result, setResult] = useState('0') 
    let [num2, setNum2] = useState('') 
    let [error, setError] = useState('') 
    let [num1, setNum1] = useState('') 
    let [operator, setOperator] = useState('') 

    // Handle setting the current value
    const btnPress = (e) => {
        if (e.target.value !== '0' || num2 !== '') {
        setNum2(num2 + e.target.value)
        }
    }

    // Handle decimal point
    const dot = () => {
        if (!num2) {
        setNum2('0.')
        }
        else if (num2.indexOf('.') === -1) {
        setNum2(num2 + '.')
        }
    }

    // Plus/Minus button
    const plusMinus = () => {
        console.log('plus/minus')
        setNum2(num2 * -1)
    }

    // Handle operator
    const operatorBtn = (e) => {
        if (operator) {
        setError('Operator has already been set. Press clear to reset.')
        }
        else if (!num2 && e.target.value === '-') {
        setError('')
        setNum2(e.target.value)
        }
        else if (!num2) {
        setError('A numerical value must be set first')
        }
        else {
        setNum1(num2)
        setOperator(e.target.value)
        setError('')
        setNum2('')
        }
    }

    const calculate = (e) => {
        e.preventDefault()

        if(!num1 || !operator) {
        setError('ERR')
        console.log('ERR')
        }
        else if(!num2) {
        setError('ERR')
        }
        else {
        //Ideal case
        var result = ''

        if(operator === '+') {
            result = (Number(num1) + Number(num2)).toString()
        }
        else if(operator === '-') {
            result = (Number(num1) - Number(num2)).toString()
        }
        else if(operator === '*') {
            result = (Number(num1) * Number(num2)).toString()
        }
        else if(operator === '/') {
            result = (Number(num1) / Number(num2)).toString()
        }
        else if(operator === '%') {
            result = (Number(num1) % Number(num2)).toString()
        }

        //Set the result to display
        let newResult = result.slice(0, 8)

        // Update state
        setResult(newResult)
        setError('')
        }
    }


        const AC = () => {
            setResult('0')
            setNum2('')
            setError('')
            setNum1('')
            setOperator('')
        }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{num1 || num2} {operator} {operator ? num2 : ''}</p>
                <div className="result-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={AC}>AC</button>
                    <button className="calc-button calc-button-top" onClick={plusMinus} value="pm">+/-</button>
                    <button className="calc-button calc-button-top" onClick={operatorBtn} value='%'>%</button>
                    <button className="calc-button calc-button-op"  onClick={operatorBtn} value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"  onClick={btnPress} value="7">7</button>
                    <button className="calc-button" onClick={btnPress} value="8">8</button>
                    <button className="calc-button"  onClick={btnPress} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtn} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={btnPress} value="4">4</button>
                    <button className="calc-button" onClick={btnPress} value="5">5</button>
                    <button className="calc-button" onClick={btnPress} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtn} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={btnPress} value="1">1</button>
                    <button className="calc-button" onClick={btnPress} value="2">2</button>
                    <button className="calc-button" onClick={btnPress} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtn} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"  onClick={btnPress} value="0">0</button>
                    <button className="calc-button" onClick={dot}>.</button>
                    <button className="calc-button calc-button-op" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator