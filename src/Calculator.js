import React, { useState } from 'react'
import Input from './Input'

const Calculator = props => {
    // Declare state variables
    const [input, setInput] = useState(0)
    const [operator, setOperator] = useState('')
    const numbers = ['0','1','2','3','4','5','6','7','8','9']

    // Handle Click
    const handleClick = (e) => {
        console.log(e);
        // if (numbers.includes(e)) {
        //     setInput = e
        // }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <Input input={input} />
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick}>7</button>
                    <button className="calc-button" onClick={handleClick}>8</button>
                    <button className="calc-button" onClick={handleClick}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick}>4</button>
                    <button className="calc-button" onClick={handleClick}>5</button>
                    <button className="calc-button" onClick={handleClick}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick}>1</button>
                    <button className="calc-button" onClick={handleClick}>2</button>
                    <button className="calc-button" onClick={handleClick}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleClick}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator