import React, { useState } from 'react'

export const Chat = () => {
    const [messages, setMessages] = useState([
        { sender: 'User', text: 'Hi, I need help with my prescription.' },
        { sender: 'Pharmacist', text: 'Sure, how can I assist you?' }
      ]);

      const [input,setInput]=useState('');
      const handleSend=()=>{
        if(input.trim()){
            setMessages([...messages,{sender:'User',text:input}]);
            setInput('');
        }
      };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <div className="chat-input d-flex">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className="btn btn-primary ms-2" onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
