import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [display, setDisplay] = useState("");

    function clearDisplay()
    {
        setDisplay("");
    }

    function createOperator(oper)
    {
        if (display.length < 1)
        {
            alert("ERROR: CANNOT START EXPRESSION WITH OPERATOR");
        }
        else if (display[display.length - 2] !== "+" && 
            display[display.length - 2] !== "-" && 
            display[display.length - 2] !== "*" && 
            display[display.length - 2] !== "/")
        {
            let displayWithOper = display + " " + oper + " ";
            setDisplay(displayWithOper);
        }
        else
        {
            alert("ERROR: CANNOT USE TWO OPERATORS SEQUENTIALLY");
        }
    }

    function concatNumber(val)
    {
        let displayVal = display + val;
        setDisplay(displayVal);
    }

    function getResult()
    {
        if (display[display.length - 1] !== " ")
        {
            let displayArray = display.split(" ");
            console.log(displayArray);
        }
        else
        {
            alert("ERROR: CANNOT END EXPRESSION WITH OPERATOR");
        }
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{display}</p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearDisplay}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={() => createOperator("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => concatNumber("7")}>7</button>
                    <button className="calc-button" onClick={() => concatNumber("8")}>8</button>
                    <button className="calc-button" onClick={() => concatNumber("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => createOperator("*")}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => concatNumber("4")}>4</button>
                    <button className="calc-button" onClick={() => concatNumber("5")}>5</button>
                    <button className="calc-button" onClick={() => concatNumber("6")}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => createOperator("-")}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => concatNumber("1")}>1</button>
                    <button className="calc-button" onClick={() => concatNumber("2")}>2</button>
                    <button className="calc-button" onClick={() => concatNumber("3")}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => createOperator("+")}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={() => getResult()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator