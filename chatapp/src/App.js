import io from 'socket.io-client';
import {useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const socket = io('http://localhost:8000/');
  
  useEffect(() => {
  const socket = io('http://localhost:8000/');
    socket.on('chat message', ( msg) => {
      console.log( msg)
      setChat(prev => [...prev,  msg]);
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        YouChat!
      </header>
      <form onSubmit={sendMessage}>
        <input 
        value={message}
        placeholder='Enter message'
        onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
      <ul>
        {chat && chat.map((msg, key) => (
          <li key={key}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
