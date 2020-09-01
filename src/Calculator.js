import React, { useState } from 'react'

const Calculator = props => {
    let [problem, setProblem] = useState()
    // Declare state variables
    let [result, setResult] = useState(0)
    let clearCalc = (e) => {
        
    }

    let doMath = (e) => {
        e.preventDefault()
        setResult(0)

    }
    
    let setMath = (e) => {
        e.preventDefault()
        
        setProblem(Number(e.target.value))
        console.log(problem)

    }

    let handleOperator = (e) => {
        e.preventDefault()
        if (e.target.value == '+') {
            
        }
    }

    


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
    <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearCalc}>AC</button>
                    <button className="calc-button calc-button-top" onClick={setMath}>+/-</button>
                    <button value={'%'} className="calc-button calc-button-top" onClick={setMath}>%</button>
                    <button value={'/'} className="calc-button calc-button-op" onClick={setMath}>/</button>
                </div>
                <div className="calc-row">
                    <button value={'7'} className="calc-button" onClick={setMath}>7</button>
                    <button value={'8'} className="calc-button" onClick={setMath}>8</button>
                    <button value={'9'} className="calc-button" onClick={setMath}>9</button>
                    <button value={'*'} className="calc-button calc-button-op" onClick={setMath}>*</button>
                </div>
                <div className="calc-row">
                    <button value={'4'} className="calc-button" onClick={setMath}>4</button>
                    <button value={'5'} className="calc-button" onClick={setMath}>5</button>
                    <button value={'6'} className="calc-button" onClick={setMath}>6</button>
                    <button value={'-'} className="calc-button calc-button-op" onClick={setMath}>-</button>
                </div>
                <div className="calc-row">
                    <button value={'1'} className="calc-button" onClick={setMath}>1</button>
                    <button value={'2'} className="calc-button" onClick={setMath}>2</button>
                    <button value={'3'} className="calc-button" onClick={setMath}>3</button>
                    <button value={'+'} className="calc-button calc-button-op" onClick={setMath}>+</button>
                </div>
                <div className="calc-row">
                    <button value={'0'} className="calc-button width-2" onClick={setMath}>0</button>
                    <button value={'.'} className="calc-button" onClick={setMath}>.</button>
                    <button className="calc-button calc-button-op" onClick={doMath}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator