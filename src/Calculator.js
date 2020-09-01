import React, { useState } from 'react'
import Input from './Input'

const Calculator = props => {
    // Declare state variables
    var [input, setInput] = useState('')
    var [currentNum, setCurrentNum] = useState('')
    var [previousNum, setPreviousNum] = useState('')
    var [operator, setOperator] = useState('')
    var numbers = ['0','1','2','3','4','5','6','7','8','9']

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
        setOperator('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <Input input={input} />
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => setInput(input+7)}>7</button>
                    <button className="calc-button" onClick={() => setInput(input+8)}>8</button>
                    <button className="calc-button" onClick={() => setInput(input+9)}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => setInput(input+4)}>4</button>
                    <button className="calc-button" onClick={() => setInput(input+5)}>5</button>
                    <button className="calc-button" onClick={() => setInput(input+6)}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => setInput(input+1)}>1</button>
                    <button className="calc-button" onClick={() => setInput(input+2)}>2</button>
                    <button className="calc-button" onClick={() => setInput(input+3)}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={addZero}>0</button>
                    <button className="calc-button" onClick={addDecimal}>.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator