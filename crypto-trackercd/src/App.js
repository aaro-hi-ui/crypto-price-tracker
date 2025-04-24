import logo from './logo.svg';
import './App.css';

import CryptoTable from './CryptoTable';
import WebSocketMock from './WebSocketMock';
import { useSelector } from 'react-redux';
function App() {
  const cryptoData = useSelector((state) => state.crypto.data);

  return (
    <div>
      <WebSocketMock />
      <CryptoTable data={cryptoData} />
    </div>
  );
}
const sampleData = [
  {
    id: 1,
    logo: '/path/to/btc-logo.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$28,000',
    change1h: 1.2,
    change24h: -0.5,
    change7d: 3.8,
    marketCap: '$500B',
    volume24h: '$20B',
    circulatingSupply: '19M',
    maxSupply: '21M',
    chart7d: '/path/to/btc-7d-chart.png',
  },
  // Add more sample assets here
];

function App() {
  return (
    <div>
      <CryptoTable data={sampleData} />
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
