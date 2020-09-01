import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    const [input, setInput] = useState('0')
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('0')

    function setNumber(e) { 
        setInput(e.target.value)
        console.log(input)
        setResult(input)
    }

    function whichOp(e) {

    }

    function calculate() {

    }
    
    function clear() {
        setInput('0')
        setResult('0')
        setOperator('')
    }

    function negative() {

    }



    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={negative} className="calc-button calc-button-top">+/-</button>
                    <button onClick={whichOp} value={'%'} className="calc-button calc-button-top">%</button>
                    <button onClick={whichOp} value={'/'} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={7} className="calc-button">7</button>
                    <button onClick={setNumber} value={8} className="calc-button">8</button>
                    <button onClick={setNumber} value={9} className="calc-button">9</button>
                    <button onClick={whichOp} value={'*'} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={4} className="calc-button">4</button>
                    <button onClick={setNumber} value={5} className="calc-button">5</button>
                    <button onClick={setNumber} value={6} className="calc-button">6</button>
                    <button onClick={whichOp} value={'-'} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={1} className="calc-button">1</button>
                    <button onClick={setNumber} value={2} className="calc-button">2</button>
                    <button onClick={setNumber} value={3} className="calc-button">3</button>
                    <button onClick={whichOp} value={'+'} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={setNumber} value={0} className="calc-button width-2">0</button>
                    <button onClick={setNumber} value={'.'} className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator