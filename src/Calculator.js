import React, { useState } from 'react'
import Input from './Input'

const Calculator = props => {
    // Declare state variables
    var [input, setInput] = useState('')
    var [firstNum, setFirstNum] = useState('')
    var [secondNum, setSecondNum] = useState('')
    var [operator, setOperator] = useState('')
    var numbers = ['0','1','2','3','4','5','6','7','8','9']

    // Handle Click
    // handleClick() doesn't work
     function handleClick(e) {
        console.log(e.target.value);
        // if (numbers.includes(e)) {
            // setInput (input + val)
        // }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <Input input={input} />
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => setInput(0)}>AC</button>
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
                    <button className="calc-button width-2" onClick={() => setInput(input+0)}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator