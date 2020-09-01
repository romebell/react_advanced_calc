import React from 'react'

export default function Input (props) {
    // let input = (props.input) ? props.input : 0
    let input
    if (props.input) {input=props.input}
    else if (props.previousNum) {input=props.previousNum}
    else {input=0}
    return <div className="answer-box">{input}</div>
}