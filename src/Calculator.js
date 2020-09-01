import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [numb1, setNumb1] = useState('')
    let [numb2, setNumb2] = useState('')
    let [result, setResult] = useState('0')
    let [operator, setOperator] = useState('')
    let [error, setError] = useState('')

    const numbPress = (e) =>{
        if (e.target.value !== '0' || e.target.value !== '') {
            setNumb1(numb1 + e.target.value);
        }
    }

    const operation = (e) => {
        if (!numb1) {
            setError('Click a number first')
        } else if (operator) {
            setError('Operator already used')
        } else {
            setOperator(e.target.value)
            setNumb2(numb1)
            setError('')
            setNumb1('')
        }
    }

    const plusMinus = () => {
        if (numb1) {
            setNumb1(numb1*-1)
        }

    }

    const resetAll = () => {
        setNumb1('')
        setNumb2('')
        setResult('0')
        setOperator('')
        setError('')
    }

    const dot = () => {
        if (!numb1) {
            setNumb1('0.')
        } else {
            setNumb1(numb1+'.')
        }
    }

    const calculate = () => {
        if (!numb1 || !operator) {
            setError('missing arguments')
        } else if (!numb2){
            setError('Missing second Number')
        } else {
            let answer = '';
            if (operator === '+') {
                answer = Number(numb1) + Number(numb2);
            } else if (operator === '-') {
                answer = Number(numb2) - Number(numb1);
            } else if (operator === '*') {
                answer = Number(numb1) * Number(numb2);
            } else if (operator === '/') {
                answer = Number(numb2) / Number(numb);
            } else  {
                setError('Not sure 😜')
            }
            setResult((answer.toString()).slice(0, 10))
            setNumb1((answer.toString()).slice(0, 10))
            setOperator('')
            setNumb2('')
        }
    }

    const percent = () => {
        if(!numb1) {
            setError('Selecet a number first')
        }else {
            setNumb1(Number(numb1)/100)
        }
    }
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{numb1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={resetAll} value="AC">AC</button>
                    <button className="calc-button calc-button-top" onClick={plusMinus}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={percent} >%</button>
                    <button className="calc-button calc-button-op" onClick={operation} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numbPress} value="7">7</button>
                    <button className="calc-button" onClick={numbPress} value="8">8</button>
                    <button className="calc-button" onClick={numbPress} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operation} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numbPress} value="4">4</button>
                    <button className="calc-button" onClick={numbPress} value="5">5</button>
                    <button className="calc-button" onClick={numbPress} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operation} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numbPress} value="1">1</button>
                    <button className="calc-button" onClick={numbPress} value="2">2</button>
                    <button className="calc-button" onClick={numbPress} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operation} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numbPress} value="0">0</button>
                    <button className="calc-button" onClick={dot}>.</button>
                    <button className="calc-button calc-button-op" onClick={calculate}>=</button>
                </div>
            </div>
    <p>{error}</p>
        </div>
    )
}

export default Calculator
