import React, {useState} from 'react';
import {Button} from '@material-ui/core';

function TextInput({promptText}) {
  const [text, setText] = useState("no text set");
  function getUserInput() {
    const promptResponse = prompt(promptText)
    console.log(promptResponse);
    setText(promptResponse);
  }
  return (
    <div>
      <Button style={{color: "white", backgroundColor: "orange"}} onClick={() => getUserInput()}>{promptText}</Button>
      {text}
    </div>
  )
}

export default TextInput;
