import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [orders, setOrder] = useState('');
  useEffect(() => {
    const data = axios({
      method: 'get',
      url: 'http://localhost:3002/api/count/orders',
      responseType: 'stream',
    })
      .then((data) => {
        console.log('PROMISE: ', data.data);
        return data.data;
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
    setOrder(data);
  }, []);
  console.log('orders', orders);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Em 3 deploy again</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
