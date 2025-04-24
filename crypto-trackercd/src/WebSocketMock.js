import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoData } from './cryptoSlice';

function WebSocketMock() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const mockData = generateMockCryptoData(); // Write a function to generate data
      dispatch(updateCryptoData(mockData));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
}

function generateMockCryptoData() {
  return [
    {
      id: 1,
      logo: '/path/to/logo.png',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: `$${28000 + Math.floor(Math.random() * 1000 - 500)}`,
      change1h: (Math.random() * 2 - 1).toFixed(2),
      change24h: (Math.random() * 2 - 1).toFixed(2),
      change7d: (Math.random() * 2 - 1).toFixed(2),
      marketCap: '$500B',
      volume24h: '$20B',
      circulatingSupply: '19M',
      maxSupply: '21M',
      chart7d: '/path/to/chart.png',
    },
    // Add more sample data here
  ];
}

export default WebSocketMock;
