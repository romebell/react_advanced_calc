import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    const [input, setInput] = useState('0')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('')

    function setNumber(e) { 

    }

    function setOperator(e) {

    }

    function calculate() {

    }
    
    function clear() {

    }

    function negative() {

    }



    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={negative} className="calc-button calc-button-top">+/-</button>
                    <button onClick={setOperator} className="calc-button calc-button-top">%</button>
                    <button onClick={setOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} className="calc-button">7</button>
                    <button onClick={setNumber} className="calc-button">8</button>
                    <button onClick={setNumber} className="calc-button">9</button>
                    <button onClick={setOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} className="calc-button">4</button>
                    <button onClick={setNumber} className="calc-button">5</button>
                    <button onClick={setNumber} className="calc-button">6</button>
                    <button onClick={setOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} className="calc-button">1</button>
                    <button onClick={setNumber} className="calc-button">2</button>
                    <button onClick={setNumber} className="calc-button">3</button>
                    <button onClick={setOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} className="calc-button width-2">0</button>
                    <button onClick={setNumber} className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator