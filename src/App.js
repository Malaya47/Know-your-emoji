import { useState } from "react";
import "./styles.css";

const Emojis = {
  "😀": "Smiling face",
  "😟": "worried face",
  "😊": "smiling face with smiling eyes",
  "😉": "winking face",
  "🤣": "Rolling on the Floor Laughing",
  "😜": "Winking Face with Tongue",
  "🤡": "Clown Face"
};

// Array of keys
var emojis = Object.keys(Emojis);

export default function App() {
  const [emoji, setemoji] = useState("");
  function showEmojiHandler(event) {
    if (Emojis[event.target.value] === undefined) {
      setemoji("Sorry! we dont have this in our database.");
    } else {
      setemoji(Emojis[event.target.value]);
    }
  }

  function emojiClickhandler(emoji) {
    setemoji(Emojis[emoji]);
  }

  return (
    <div className="App">
      <h1>Lets find the meaning of emoji</h1>
      <p>Either give input in search box or click on the emoji </p>
      <input onChange={showEmojiHandler} />
      <div> {emoji}</div>
      <ul>
        {emojis.map(function (emoji) {
          return (
            <li
              key={emoji}
              onClick={() => emojiClickhandler(emoji)}
              style={{
                listStyle: "none",
                display: "inline-block",
                padding: "1rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
