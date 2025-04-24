import React from 'react';

function CryptoTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>24h Volume</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
          <th>7D Chart</th>
        </tr>
      </thead>
      <tbody>
        {data.map((crypto, index) => (
          <tr key={crypto.id}>
            <td>{index + 1}</td>
            <td><img src={crypto.logo} alt={`${crypto.name} logo`} /></td>
            <td>{crypto.name}</td>
            <td>{crypto.symbol}</td>
            <td>{crypto.price}</td>
            <td className={crypto.change1h > 0 ? "positive" : "negative"}>
              {crypto.change1h}%
            </td>
            {/* Repeat for other columns */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable;
