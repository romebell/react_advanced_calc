import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [value1, setValue1] = useState('')
    // const [value2, setValue2] = useState('')
    const [op, setOp] = useState('')
    // const [equals, setEquals] = useState(false)

    function displayNum(num) {
        // console.log('𝟏', value1, '𝟐', value2)
        // if (!operation) {
            setValue1(value1 + num)
        // } else if (operation) {
            // setValue2(value2 + num)
        // }
    }

    function operation(symbol) {
        setOp(symbol)
    }

    function clearVal(e) {
        setValue1('')
        setOp('')
        // setValue2('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{value1}{op}</p>
                {/* {value2}{equals} */}
                <div className="answer-box">{value1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"
                        onClick={(e) => {clearVal(e)}}
                    >AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op"
                        onClick={() => {operation(' / ')}}
                    >/</button>
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
                    <button className="calc-button calc-button-op"
                        onClick={() => {operation(' X ')}}
                    >x</button>
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
                    <button className="calc-button calc-button-op"
                        onClick={() => {operation(' - ')}}
                    >-</button>
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
                    <button className="calc-button calc-button-op"
                        onClick={() => {operation(' + ')}}
                    >+</button>
                </div>
                <div className="calc-row">
                    <button
                        className="calc-button width-2"
                        onClick={() => {displayNum(0)}}
                    >0</button>
                    <button className="calc-button"
                        onClick={() => {displayNum('.')}}
                    >.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator