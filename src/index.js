import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  {
    id: 1,
    message: "My first post",
    likesCount: 15,
  },

  {
    id: 2,
    message: "My second post",
    likesCount: 12,
  },
  {
    id: 3,
    message: "My third post",
    likesCount: 17,
  },
  {
    id: 4,
    message: "My fourth post",
    likesCount: 14,
  },
];

let dialogs = [
  {
    id: 1,
    name: "Maria",
  },

  {
    id: 2,
    name: "Anna",
  },

  {
    id: 3,
    name: "Ani",
  },

  {
    id: 4,
    name: "Armen",
  },
  {
    id: 5,
    name: "Artak",
  },
  {
    id: 6,
    name: "Argam",
  },
];

let messages = [
  {
    id: 1,
    message: "Hi",
  },

  {
    id: 2,
    message: "How are you",
  },

  {
    id: 3,
    message: "Lalala",
  },

  {
    id: 4,
    message: "Dididi",
  },
  {
    id: 5,
    message: "Dododo",
  },
  {
    id: 6,
    message: "Pararam",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
