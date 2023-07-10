import React, { useEffect, useState } from "react";
import Message from "./Message";
import Button from "@mui/material/Button"; //from material ui
//Addition
import SendIcon from "@mui/icons-material/Send";

import { FormControl, InputLabel, Input } from "@mui/material";
import "./App.css";
import db from "./firebase";
import firebase from "firebase/compat";
import "firebase/compat/firestore";
// import firebase from "firebase/compat";
//this was not working so we have used the the upper two commandsd
import FlipMove from "react-flip-move";
// import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function App() {
  // we are defining state
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  // { username: "sonny", message: "hey guys" },
  // { username: "qazi", message: "Wahats up" },
  //we have convertd this to an object
  //we have deleted that messeges as we have already have forebase db and message is over there

  const [username, setUsername] = useState("");

  //usestate = variable in react
  //useeffect = run code on a condition
  //if the [] is blank then the code will runs once when the app component loads

  useEffect(() => {
    setUsername(prompt("Enter Your Name"));
  }, []);
  //condition

  //down here we are usinge useeffect again to link lwith firebase db so that the message got store and get mapped and result as an object
  //where it will catch the screen shot of the data and save it in firebase dadtabase and display
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          //data
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  console.log(input);
  console.log(messages);
  //creating a function called sendmessage
  const sendMessage = (event) => {
    //all the logic to send message goes here
    //we need to create some constatnt or state to store the message
    //so create  const [messages, setMessages] = useState([]);
    setMessages([...messages, { username: username, text: input }]); //will keep the previous message
    setInput("");
    event.preventDefault(); //as we are putting input inside the form it will start refreshing the page so we need to stop that
    //will stop refreshing the pagee

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="App">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsD4baYOYMUeG8EGSwblW_kD2CCqkG8NR1DzG37GLVg&s"
        alt="Facebook"
      />
      <h1>
        <i>Facebook Messenger</i>
      </h1>
      <h2>Welcome {username}</h2>

      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            className="app_input"
            placeholder="Enter a Message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          {/* here we are connection sendmessage function to button on click */}

          <IconButton
            className="app_iconButton"
            disabled={!input} //it wont allow you to enter empt message
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          /* it will keep the previous message like hello,hi and whatsup act like a loop */

          <Message key={id} username={username} message={message} />
          //all previous messages will be shown
        ))}
      </FlipMove>
      {/* messeges themselves */}
    </div>
  );
}

export default App;
