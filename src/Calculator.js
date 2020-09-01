import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [result, setResult] = useState('0')
    const [operator, setOperator] = useState('')
    const [input, setInput] = useState('0')
    const [doingMath, setDoingMath] = useState(false)

    function enterNumber(e) {
        let lastDig = input[input.length]
        if(e.target.value == lastDig && lastDig == '.') {
            
        } else {
            if(doingMath) {
                setDoingMath(false)
                setResult(input)
                let newInput = `${e.target.value}`
                setInput(newInput)
            } else {
                if (input === '0') {
                    let newInput = `${e.target.value}`
                    setInput(newInput)
                } else {
                    let newInput = `${input}${e.target.value}`
                    setInput(newInput)
                }
            }
        }
        
    }

    function operation(e){
        setDoingMath(true)
        let newOperator = e.target.value
        setOperator(newOperator)
    }

    function clearAll(){
        setInput(0)
        setOperator('')
        setResult(0)
    }

    function doMath(){
        setDoingMath(true)
        let num1 = Number(result)
        let num2 = Number(input)
        let op = operator
        
        if (op === '+') {
            let newResult = num1 + num2
            setResult(newResult)
            setInput(newResult)
          } else if (op === '-') {
            let newResult = num1 - num2
            setResult(newResult)
            setInput(newResult)
          } else if (op === '*') {
            let newResult = num1 * num2
            setResult(newResult)
            setInput(newResult)
          } else if (op === '/') {
            let newResult = num1 / num2
            setResult(newResult)
            setInput(newResult)
          } else if (op === '%') {
            let newResult = num1 % num2
            setResult(newResult)
            setInput(newResult)
          }
    }

    function switchIt(){
        let neg = -input
        setInput(neg)
    }

    

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                {input}
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button onClick={clearAll} className="calc-button calc-button-top">AC</button>
                    <button onClick={switchIt} className="calc-button calc-button-top">+/-</button>
                    <button onClick={operation} className="calc-button calc-button-top" value="%">%</button>
                    <button onClick={operation} className="calc-button calc-button-op" value="/">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={enterNumber} className="calc-button" value={7}>7</button>
                    <button onClick={enterNumber} className="calc-button" value={8}>8</button>
                    <button onClick={enterNumber} className="calc-button" value={9}>9</button>
                    <button onClick={operation} className="calc-button calc-button-op" value="*">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={enterNumber} className="calc-button" value={4}>4</button>
                    <button onClick={enterNumber} className="calc-button" value={5}>5</button>
                    <button onClick={enterNumber} className="calc-button" value={6}>6</button>
                    <button onClick={operation} className="calc-button calc-button-op" value="-">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={enterNumber} className="calc-button" value={1}>1</button>
                    <button onClick={enterNumber} className="calc-button" value={2}>2</button>
                    <button onClick={enterNumber} className="calc-button" value={3}>3</button>
                    <button onClick={operation} className="calc-button calc-button-op" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={enterNumber} className="calc-button width-2">0</button>
                    <button onClick={enterNumber} className="calc-button" value='.'>.</button>
                    <button onClick={doMath}className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator