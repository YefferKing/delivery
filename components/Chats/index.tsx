import React, { useState } from "react";
import Styles from "./styles.module.css";

export const Chats = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "¡Hola! ¿Cómo estás?" },
    { id: 2, sender: "brand", text: "Hola, ¡bienvenido a Stop Jeans!" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className={Styles.chatContainer}>
      <div className={Styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.sender === "user"
                ? Styles.userMessage
                : Styles.brandMessage
            }
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={Styles.inputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe un mensaje..."
          className={Styles.input}
        />
        <button onClick={sendMessage} className={Styles.sendButton}>
          Enviar
        </button>
      </div>
    </div>
  );
};
