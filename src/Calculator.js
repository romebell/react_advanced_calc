import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    // let [eq, setEq] = useState() 
    let [numA, setNumA] = useState("")  
    let [numB, setNumB] = useState("")
    let [result, setResult] = useState("")
    let [ops, setOps] = useState("")
    let [message, setMessage] = useState('')
    
   

    let changeOps = (e) => {
        let currentOps = e.target.innerText;
        ops == '' ? setOps(currentOps)
        : setMessage('no no no');
    }

        
        let solution = () => {
            setNumA("")
            setNumB("")
            setOps("")
            if (ops === '+') setResult(parseInt(numA)  + parseInt(numB))
            else if (ops === '-') setResult(parseInt(numA) - parseInt(numB))
            else if (ops === 'x') setResult(parseInt(numA) * parseInt(numB))
            else if (ops === '/') setResult(parseInt(numA)  / parseInt(numB))
        }

    //failed attempt/ half working handle positive/negative
        let plusMin = () => {
            if (numA) {
                setNumA(numA*-1)
            }
    
        }
    let clearCalc = () => {
        // setEq()
        setNumA("")
        setNumB("")
        setResult("")
        setOps("")
        console.log("clear this calculator")
    }
    
    
    // let operation = (e) => {
    //     if (!numA) {
    //         console.log('we need a number please')
    //     } else if (ops) {
    //         console.log('ops clicked')
    //     } else {
    //         setOps(e.target.value)
    //         setNumB("0")
            
    //         console.log(numB)
    //         setNumA('')
    //     }
    // }

    let updateCalc =(number)=>{
        if (!ops){
            if(numA.length === 0){
                setNumA(number) 
                setResult("")
                console.log(numA)
            }else{
                setNumA(numA.concat(number))
            }
        // } else if(!numA){
        //     console.log("no numA")
        // }
        }else{
            if(numB.length === 0){
                setNumB(number)
                
            }else{
                setNumB(numB.concat(number))
            }
        
    }
}

let operation = (e) =>{
    let op = e.target.innerText
    console.log(op)
    setOps(op)
}

    const dec = () => {
        if (!numA) {
            setNumA('0.')
        } else {
            setNumA(numA+'.')
        }
    }
    return (
        <div className="container">
            <h1>React-ulator 2.0</h1>
            <div className="calc-container">
                <p>LET'S MATH </p>
                <div className="answer-box">{numA + ops + numB  + result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearCalc}>AC</button>
                    <button className="calc-button calc-button-top"onClick={plusMin}>+/-</button>
                    <button className="calc-button calc-button-top" value=" % " onClick={operation}>%</button>
                    <button className="calc-button calc-button-op" value=" / " onClick={operation}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {updateCalc("7")}} value="7">7</button>
                    <button className="calc-button" onClick={() => {updateCalc("8")}} value="8">8</button>
                    <button className="calc-button" onClick={() => {updateCalc("9")}} value="9">9</button>
                    <button className="calc-button calc-button-op" value=" * " onClick={operation}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {updateCalc("4")}} value="4">4</button>
                    <button className="calc-button" onClick={() => {updateCalc("5")}} value="5">5</button>
                    <button className="calc-button" onClick={() => {updateCalc("6")}} value="6">6</button>
                    <button className="calc-button calc-button-op" value=" - " onClick={operation}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {updateCalc("1")}} value="1">1</button>
                    <button className="calc-button" onClick={() => {updateCalc("2")}} value="2">2</button>
                    <button className="calc-button" onClick={() => {updateCalc("3")}} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={(e) => changeOps(e)}  >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button" onClick={dec}>.</button>
                  <button className="calc-button calc-button-op" onClick={solution}>=</button>
                </div>
            </div>
        </div>
    )
    }
    

export default Calculator