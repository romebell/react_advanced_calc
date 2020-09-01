import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  let [currentNum, setCurrentNum] = useState("");
  let [num1, setNum1] = useState("");
  let [operator, setOperator] = useState("");
  let [result, setResult] = useState("");

  let clearCalc = (e) => {
    setCurrentNum("");
    setNum1('')
    setResult('');
    setOperator("");
  };

  let setMath = (e) => {
    e.preventDefault();
    if (!isNaN(e.target.value)) {
      if (currentNum === "0") {
        setCurrentNum(e.target.value);
      } else {
        setCurrentNum(currentNum + e.target.value);
      }
    } else if (isNaN(e.target.value)) {
      handleOperator(e);
    }
  };

  let checkPm = (e) => {
      if(e.target.value === '+/-') {
          let newNum = Number(currentNum) * -1
          setCurrentNum(newNum.toString())
      }
  }

  let handleOperator = (e) => {
    if (operator && !currentNum) {
      setOperator(e.target.value);
    } else {
      setNum1(currentNum);
      setOperator(e.target.value);
      setCurrentNum("");
      console.log(operator);
    }
  };
  let doMath = (e) => {
    e.preventDefault();
    if (!num1 || !operator) {
      alert("That's not how math works");
    } else if (currentNum && num1 && operator === "+") {
      let newResult = Number(num1) + Number(currentNum);
      setResult(newResult);
      setCurrentNum("");
      setNum1(newResult);
      console.log(result);
    } else if (currentNum && num1 && operator === "-") {
      let newResult = Number(num1) - Number(currentNum);
      setResult(newResult);
      setCurrentNum("");
      setNum1(newResult)
      console.log(result);
    } else if (currentNum && num1 && operator === "*") {
      let newResult = Number(num1) * Number(currentNum);
      setResult(newResult);
      setCurrentNum("");
      setNum1(newResult)
      console.log(result);
    } else if (currentNum && num1 && operator === "/") {
      let newResult = Number(num1) / Number(currentNum);
      setResult(newResult);
      setCurrentNum("");
      setNum1(newResult)
      console.log(result);
    } else if (currentNum && num1 && operator === "%") {
      let newResult = Number(num1) % Number(currentNum);
      setResult(newResult);
      setCurrentNum("");
      setNum1(newResult)
      console.log(result);
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>{currentNum}</p>
        <div className="answer-box">{result}</div>
        <div className="calc-row">
          <button className="calc-button calc-button-top" onClick={clearCalc}>
            AC
          </button>
          <button value={'+/-'} className="calc-button calc-button-top" onClick={checkPm}>
            +/-
          </button>
          <button
            value={"%"}
            className="calc-button calc-button-top"
            onClick={setMath}
          >
            %
          </button>
          <button
            value={"/"}
            className="calc-button calc-button-op"
            onClick={setMath}
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button value={"7"} className="calc-button" onClick={setMath}>
            7
          </button>
          <button value={"8"} className="calc-button" onClick={setMath}>
            8
          </button>
          <button value={"9"} className="calc-button" onClick={setMath}>
            9
          </button>
          <button
            value={"*"}
            className="calc-button calc-button-op"
            onClick={setMath}
          >
            *
          </button>
        </div>
        <div className="calc-row">
          <button value={"4"} className="calc-button" onClick={setMath}>
            4
          </button>
          <button value={"5"} className="calc-button" onClick={setMath}>
            5
          </button>
          <button value={"6"} className="calc-button" onClick={setMath}>
            6
          </button>
          <button
            value={"-"}
            className="calc-button calc-button-op"
            onClick={setMath}
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button value={"1"} className="calc-button" onClick={setMath}>
            1
          </button>
          <button value={"2"} className="calc-button" onClick={setMath}>
            2
          </button>
          <button value={"3"} className="calc-button" onClick={setMath}>
            3
          </button>
          <button
            value={"+"}
            className="calc-button calc-button-op"
            onClick={setMath}
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button value={"0"} className="calc-button width-2" onClick={setMath}>
            0
          </button>
          <button value={"."} className="calc-button" onClick={setMath}>
            .
          </button>
          <button className="calc-button calc-button-op" onClick={doMath}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
