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
        let displayArray = display.split(" ")
        let recentValues = displayArray[displayArray.length - 1];
        if (val === ".")
        {
            if (display[display.length - 1] === " " || display.length < 1)
            {
                let displayVal = display + "0" + val;
                setDisplay(displayVal);
            }
            else
            {
                let invalidDecimal = false;
                for (let i = 0; i < recentValues.length; i++)
                {
                    if (recentValues[i] === ".")
                    {
                        invalidDecimal = true;
                    }
                }
                if (invalidDecimal === false)
                {
                    let displayVal = display + val;
                    setDisplay(displayVal);
                }
                else
                {
                    alert("ERROR: CANNOT HAVE TWO DECIMALS IN ONE NUMERICAL VALUE")
                }
            }
        }
        else if (val === "0")
        {
            if (display.length < 1 || display[display.length - 1] === " ")
            {
                alert("ERROR: VALUE CANNOT START WITH 0 (FOR USING THE VALUE 0, TYPE IN \".\")")
            }
            else
            {
                let displayVal = display + val;
                setDisplay(displayVal);
            }
        }
        else
        {
            let displayVal = display + val;
            setDisplay(displayVal);
        }
    }

    function getResult()
    {
        if (display[display.length - 1] !== " ")
        {
            let displayArray = display.split(" ");
            console.log(displayArray);

            for (let i = 0; i < displayArray.length; i++)
            {
                if (displayArray[i] === "*")
                {
                    let valFrontIndex = i - 1;
                    let valBehindIndex = i + 1;
                    while (displayArray[valFrontIndex] === undefined)
                    {
                        valFrontIndex--;
                    }
                    while (displayArray[valBehindIndex] === undefined)
                    {
                        valBehindIndex++;
                    }
                    let tempResult = parseFloat(displayArray[valFrontIndex]) * parseFloat(displayArray[valBehindIndex]);
                    displayArray[valFrontIndex] = undefined;
                    displayArray[valBehindIndex] = undefined;
                    displayArray[i] = tempResult;
                }
                if (displayArray[i] === "/")
                {
                    let valFrontIndex = i - 1;
                    let valBehindIndex = i + 1;
                    while (displayArray[valFrontIndex] === undefined)
                    {
                        valFrontIndex--;
                    }
                    while (displayArray[valBehindIndex] === undefined)
                    {
                        valBehindIndex++;
                    }
                    let tempResult = parseFloat(displayArray[valFrontIndex]) / parseFloat(displayArray[valBehindIndex]);
                    displayArray[valFrontIndex] = undefined;
                    displayArray[valBehindIndex] = undefined;
                    displayArray[i] = tempResult;
                }
            }

            for (let i = 0; i < displayArray.length; i++)
            {
                if (displayArray[i] === "+")
                {
                    let valFrontIndex = i - 1;
                    let valBehindIndex = i + 1;
                    while (displayArray[valFrontIndex] === undefined)
                    {
                        valFrontIndex--;
                    }
                    while (displayArray[valBehindIndex] === undefined)
                    {
                        valBehindIndex++;
                    }
                    let tempResult = parseFloat(displayArray[valFrontIndex]) + parseFloat(displayArray[valBehindIndex]);
                    displayArray[valFrontIndex] = undefined;
                    displayArray[valBehindIndex] = undefined;
                    displayArray[i] = tempResult;
                }
                if (displayArray[i] === "-")
                {
                    let valFrontIndex = i - 1;
                    let valBehindIndex = i + 1;
                    while (displayArray[valFrontIndex] === undefined)
                    {
                        valFrontIndex--;
                    }
                    while (displayArray[valBehindIndex] === undefined)
                    {
                        valBehindIndex++;
                    }
                    let tempResult = parseFloat(displayArray[valFrontIndex]) - parseFloat(displayArray[valBehindIndex]);
                    displayArray[valFrontIndex] = undefined;
                    displayArray[valBehindIndex] = undefined;
                    displayArray[i] = tempResult;
                }
            }
            console.log(displayArray);
            for (let i = 0; i < displayArray.length; i++)
            {
                if (displayArray[i] !== undefined)
                {
                    setDisplay(`${displayArray[i]}`);
                }
            }
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
                <div className="answer-box">{display}</div>
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
                    <button className="calc-button width-2" onClick={() => concatNumber("0")}>0</button>
                    <button className="calc-button" onClick={() => concatNumber(".")}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => getResult()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator