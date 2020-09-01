import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [value, setValue] = useState('');

    function displayNum(num) {
        setValue(value + num)
    }

    function clearVal(e) {
        setValue('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{value}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"
                        onClick={(e) => {clearVal(e)}}
                    >AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(7)}}
                    >7</button>
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(8)}}
                    >8</button>
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(9)}}
                    >9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(4)}}
                    >4</button>
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(5)}}
                    >5</button>
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(6)}}
                    >6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(1)}}
                    >1</button>
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(2)}}
                    >2</button>
                    <button
                        className="calc-button"
                        onClick={() => {displayNum(3)}}
                    >3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button
                        className="calc-button width-2"
                        onClick={() => {displayNum(0)}}
                    >0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator