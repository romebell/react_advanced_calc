import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [operators, setOperators] =  useState('')
    let [num, setNum] = useState('')
    let [num2, setNum2] = useState('')

    const firstNum = (e) => {
        if (e.target.value !== '0' || e.target.value !== '') {
            setNum(num + e.target.value)
        }
    }



    const minus = () => {
        if (num) {
            setNum(num * -1)
        } 
    }

   const ac = () => {
       setNum('')
       setNum2('')
       setOperators('')
   }

   const percent = () => {
    if (num) {
        setNum(parseInt(num) / 100)
    }
   }

   const operator = (e) => {
    if (!num) {
        console.log('😎')
    } else if (operators) {
        console.log('Operator already used','😫')
    } else {
        setOperators(e.target.value) 
        setNum2(num)
        setNum('')
    }
   }

   const result = () => {
    if (!num && !operators) {
        console.log('No arguments')
    } else {
        let results = ''
        if (operators === '+') {
            results = parseInt(num) + parseInt(num2)
        } else if (operators === '-') {
                results = parseInt(num2) - parseInt(num)
            } else if (operators === '*') {
                    results = parseInt(num) * parseInt(num2)
                } else if (operators === '/') {
                    results = parseInt(num2) / parseInt(num)
                } else {
                    console.log("there was an error")
                }
                setNum(results.toString())
                setNum2('')
                setOperators('')
    }
}


    // const decimal = () => {
    //     if(num[num.length - 1] === '.') {
    //         setNum('0.')
    //     } else {
    //         setNum(parseFloat(num + '.'))
    //     }
    // }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={ac} >AC</button>
                    <button className="calc-button calc-button-top" onClick={minus}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={percent}>%</button>
                    <button className="calc-button calc-button-op" onClick={operator} value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={firstNum} value='7'>7</button>
                    <button className="calc-button" onClick={firstNum} value='8'>8</button>
                    <button className="calc-button" onClick={firstNum} value='9'>9</button>
                    <button className="calc-button calc-button-op" onClick={operator} value='*'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={firstNum} value='4'>4</button>
                    <button className="calc-button" onClick={firstNum} value='5'>5</button>
                    <button className="calc-button" onClick={firstNum} value='6'>6</button>
                    <button className="calc-button calc-button-op" onClick={operator} value='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={firstNum} value='1'>1</button>
                    <button className="calc-button" onClick={firstNum} value='2'>2</button>
                    <button className="calc-button" onClick={firstNum} value='3'>3</button>
                    <button className="calc-button calc-button-op" onClick={operator} value='+'>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={firstNum} value='0'>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={result} >=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator