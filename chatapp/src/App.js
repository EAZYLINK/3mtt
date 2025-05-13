import io from 'socket.io-client';
import {useState, useEffect} from 'react';
import ListComponent from './ListComponent';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const socket = io('http://localhost:8000/');
  
  useEffect(() => {
    socket.on('chat message', ( msg) => {
      setChat(prev => [...prev,  msg]);
      return () => socket.disconnect();
    })
  }, [socket])

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
       <ListComponent chat = {chat} />
      <form onSubmit={sendMessage}
      className='input'
      >
        <input 
        value={message}
        placeholder='Enter message'
        onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;
