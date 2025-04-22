import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock key={stock.id} stock={stock} onClickStock={onBuyStock} />
      ))}
    </div>
  );
}

export default StockContainer;
