import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [currentNum, setCurrentNum] = useState("")
    let [lastNum, setLastNum] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState("")

    let clearCalc = (e) => {
        setCurrentNum("0")
        setLastNum("")
        setResult("")
        setOperator("")
    };

    let changeNegPos = (e) => {
        if (e.target.value === "+/-") {
            let newNum = Number(currentNum) * -1;
            setCurrentNum(newNum.toString())
        }
    }

    let handleOperator = (e) => {
        if (operator && !currentNum) {
            setOperator(e.target.value)
        } else {
            setLastNum(currentNum);
            setOperator(e.target.value)
            setCurrentNum("")
        }
    }

    let evalMath = (e) => {
        e.preventDefault()
        if(currentNum && lastNum){
            let newResult
            switch(operator) {
                case "+":
                    newResult = Number(lastNum) + Number(currentNum)
                    setResult(newResult)
                    setCurrentNum("")
                    setLastNum(newResult)
                    break
                case "-":
                    newResult = Number(lastNum) - Number(currentNum)
                    setResult(newResult)
                    setCurrentNum("0")
                    setLastNum(newResult)
                    break
                case "*":
                    newResult = Number(lastNum) * Number(currentNum)
                    setResult(newResult)
                    setCurrentNum("")
                    setLastNum(newResult)
                    break
                case "/":
                    newResult = Number(lastNum) / Number(currentNum)
                    setResult(newResult)
                    setCurrentNum("")
                    setLastNum(newResult)
                    break
                case "%":
                    newResult = Number(lastNum) % Number(currentNum)
                    setResult(newResult)
                    setCurrentNum("")
                    setLastNum(newResult)
                    break
                default:
                    break
            }
        }
    }

    let setValue = (e) => {
        e.preventDefault();
        if (!isNaN(e.target.value) || e.target.value === '.') {
            if (currentNum === "0") {
                setCurrentNum(e.target.value)
            } else {
                if (currentNum.includes('.') && e.target.value === '.') { return }
                setCurrentNum(currentNum + e.target.value)
            }
        } else if (isNaN(e.target.value)) {
            handleOperator(e)
        }
    };

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p className="input">{currentNum}</p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearCalc}>
                        AC
                    </button>
                    <button
                        value={"+/-"}
                        className="calc-button calc-button-top"
                        onClick={changeNegPos}
                    >
                        +/-
                    </button>
                    <button
                        value={"%"}
                        className="calc-button calc-button-top"
                        onClick={setValue}
                    >
                        %
                    </button>
                    <button
                        value={"/"}
                        className="calc-button calc-button-op"
                        onClick={setValue}
                    >
                        /
                    </button>
                </div>
                <div className="calc-row">
                    <button value={"7"} className="calc-button" onClick={setValue}>
                        7
                    </button>
                    <button value={"8"} className="calc-button" onClick={setValue}>
                        8
                    </button>
                    <button value={"9"} className="calc-button" onClick={setValue}>
                        9
                    </button>
                    <button
                        value={"*"}
                        className="calc-button calc-button-op"
                        onClick={setValue}
                    >
                        *
                    </button>
                </div>
                <div className="calc-row">
                    <button value={"4"} className="calc-button" onClick={setValue}>
                        4
                    </button>
                    <button value={"5"} className="calc-button" onClick={setValue}>
                        5
                    </button>
                    <button value={"6"} className="calc-button" onClick={setValue}>
                        6
                    </button>
                    <button
                        value={"-"}
                        className="calc-button calc-button-op"
                        onClick={setValue}
                    >
                        -
                    </button>
                </div>
                <div className="calc-row">
                    <button value={"1"} className="calc-button" onClick={setValue}>
                        1
                    </button>
                    <button value={"2"} className="calc-button" onClick={setValue}>
                        2
                    </button>
                    <button value={"3"} className="calc-button" onClick={setValue}>
                        3
                    </button>
                    <button
                        value={"+"}
                        className="calc-button calc-button-op"
                        onClick={setValue}
                    >
                        +
                    </button>
                </div>
                <div className="calc-row">
                    <button value={"0"} className="calc-button width-2" onClick={setValue}>
                        0
                    </button>
                    <button value={"."} className="calc-button" onClick={setValue}>
                        .
                    </button>
                    <button className="calc-button calc-button-op" onClick={evalMath}>
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator