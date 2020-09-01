import React, { useState } from 'react';
import Button from './Button';
import result from './result'

const Calculator = props => {
    // Declare state variables
    const [value, setValue]= useState("0");
    const [memory, setMemory]= useState(null);
    const [operator,setOperator]= useState(null);
    

    const handleButtonPress = content => () => {
        const num = parseFloat(value);

        if (content === "AC"){
            setValue("0");
            setMemory(null);
            setOperator(null);
            return
        }

        if (content === "+/-"){
            setValue((num * -1).toString());
            return
        }

        if (content === "%"){
            setValue((num/100).toString());
            setMemory(null);
            setOperator(null);
        }

        if (content === "."){
            if(value.includes("."))
            return
            setValue(value + ".")
            return
        }

        if (content === "+") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("+");
            return;
        }

        if (content === "−") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("−");
            return;
        }

        if (content === "×") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("×");
            return;
        }

        if (content === "÷") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("÷");
            return;
        }

        if (content === "=") {
            if (!operator) return;
      
            if (operator === "+") {
              setValue((memory + parseFloat(value)).toString());
            } else if (operator === "−") {
              setValue((memory - parseFloat(value)).toString());
            } else if (operator === "×") {
              setValue((memory * parseFloat(value)).toString());
            } else if (operator === "÷") {
              setValue((memory / parseFloat(value)).toString());
            }
            setMemory(null);
            setOperator(null);
            return;
        }

        if (value[value.length - 1] === ".") {
            setValue(value + content);
          } else {
            setValue(parseFloat(num + content).toString());
            }

    };


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{result(value)}</p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <Button className="calc-button calc-button-top" content="AC" onButtonClick={handleButtonPress} type="function">AC</Button>
                    <Button className="calc-button calc-button-top" content="+/-" onButtonClick={handleButtonPress} type="function">+/-</Button>
                    <Button className="calc-button calc-button-top" content="%" onButtonClick={handleButtonPress} type="function">%</Button>
                    <Button className="calc-button calc-button-op" content="/" onButtonClick={handleButtonPress} type="operator">/</Button>
                </div>
                <div className="calc-row">
                    <Button className="calc-button" content="7">7</Button>
                    <Button className="calc-button" content="8">8</Button>
                    <Button className="calc-button" content="9">9</Button>
                    <Button className="calc-button calc-button-op" content="x" onButtonClick={handleButtonPress} type="operator">x</Button>
                </div>
                <div className="calc-row">
                    <Button className="calc-button" content="4">4</Button>
                    <Button className="calc-button" content="5">5</Button>
                    <Button className="calc-button" content="6">6</Button>
                    <Button className="calc-button calc-button-op" content="-" onButtonClick={handleButtonPress} type="operator">-</Button>
                </div>
                <div className="calc-row">
                    <Button className="calc-button" content="1">1</Button>
                    <Button className="calc-button" content="2">2</Button>
                    <Button className="calc-button" content="3">3</Button>
                    <Button className="calc-button calc-button-op" content="+" onButtonClick={handleButtonPress} type="operator">+</Button>
                </div>
                <div className="calc-row">
                    <Button className="calc-button width-2" content="0">0</Button>
                    <Button className="calc-button" content=".">.</Button>
                    <Button className="calc-button calc-button-op" content="=" onButtonClick={handleButtonPress} type="operator">=</Button>
                </div>
            </div>
        </div>
    )
}

export default Calculator