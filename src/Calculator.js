import React, { useState } from 'react'
import Input from './Input'

const Calculator = props => {
    // Declare state variables
    var [input, setInput] = useState('')
    var [previousNum, setPreviousNum] = useState('')
    var [operator, setOperator] = useState('')

    // DECIMAL . BUTTON
    function addDecimal() {
        // add only if input doesn't have a decimal
        if (input.indexOf('.') === -1) {
            setInput(input+'.')
        }
        if (input === ''){
            setInput(input+'0.')
        }
    }

    // ZERO 0 BUTTON
    function addZero() {
        if (input !== '') {
            setInput(input+'0')
        }
    }

    // AC CLEAR BUTTON
    function clear() {
        setInput('')
        setPreviousNum('')
        setOperator('')
    }

    // ADD + BUTTON
    function add() {
        if (operator) {
            alert('Sorry, only one operator allowed')
        }
        setPreviousNum(input)
        setOperator('+')
        setInput('')
    }

    // SUBTRACT - BUTTON
    function subtract() {
        if (operator) {
            alert('Sorry, only one operator allowed')
        }
        setPreviousNum(input)
        setOperator('-')
        setInput('')
    }

    // MULTIPLY X BUTTON
    function multiply() {
        if (operator) {
            alert('Sorry, only one operator allowed')
        }
        setPreviousNum(input)
        setOperator('*')
        setInput('')
    }

    // DIVIDE / BUTTON
    function divide() {
        if (operator) {
            alert('Sorry, only one operator allowed')
        }
        setPreviousNum(input)
        setOperator('/')
        setInput('')
    }

    // EQUARE = BUTTON
    function equare() {
        if (operator === '+') {
            setInput (
                Number(previousNum)+Number(input)
            )
        } else if (operator === '-') {
            setInput (
                Number(previousNum)-Number(input)
            )
        } else if (operator === '*') {
            setInput (
                Number(previousNum)*Number(input)
            )
        } else if (operator === '/'){
            setInput (
                Number(previousNum)/Number(input)
            )
        }
        // Reuse the result
        setOperator('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <Input input={input} previousNum={previousNum} />
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button> 
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={divide}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => setInput(input+7)}>7</button>
                    <button className="calc-button" onClick={() => setInput(input+8)}>8</button>
                    <button className="calc-button" onClick={() => setInput(input+9)}>9</button>
                    <button className="calc-button calc-button-op" onClick={multiply}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => setInput(input+4)}>4</button>
                    <button className="calc-button" onClick={() => setInput(input+5)}>5</button>
                    <button className="calc-button" onClick={() => setInput(input+6)}>6</button>
                    <button className="calc-button calc-button-op" onClick={subtract}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => setInput(input+1)}>1</button>
                    <button className="calc-button" onClick={() => setInput(input+2)}>2</button>
                    <button className="calc-button" onClick={() => setInput(input+3)}>3</button>
                    <button className="calc-button calc-button-op" onClick={add}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={addZero}>0</button>
                    <button className="calc-button" onClick={addDecimal}>.</button>
                    <button className="calc-button calc-button-op" onClick={equare}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator