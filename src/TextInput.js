import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import firebase from 'firebase'

function TextInput({promptText, field, user}) {
  const [text, setText] = useState("no text set");
  function getUserInput() {
    const promptResponse = prompt(promptText)
    console.log(promptResponse);
    setText(promptResponse);

    // This user was made when we logged in with our login button, and the google auth provider also returns a uid
    // with each user.
    if (user && user.uid) {
      console.log(user, user.uid)
      // Here we're getting the users collection and writing to a document which was named with the uid 
      firebase.firestore().collection("users").doc(user.uid)
      // set the field to be the prompt response the user made, and merge the documents
      .set({[field]: promptResponse}, { merge: true })
      .then(() => { // if that was successful, log accordingly
        console.log("Document written!");
      }).catch((error) => {
        // if it failed, log accordingly
        console.error("Error adding document: ", error);
      });
    }

    }
  return (
    <div>
      <Button style={{color: "black", backgroundColor: "white"}} onClick={() => getUserInput()}>{promptText}</Button>
      {text}
    </div>
  )
}

export default TextInput;
