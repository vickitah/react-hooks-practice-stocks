import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data));
  }, []);

  function handleBuyStock(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSellStock(stock) {
    setPortfolio(portfolio.filter(s => s.id !== stock.id));
  }

  function handleSort(type) {
    setSortType(type);
  }

  function handleFilter(type) {
    setFilterType(type);
  }

  let displayedStocks = [...stocks];

  if (sortType === "Alphabetically") {
    displayedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sortType === "Price") {
    displayedStocks.sort((a, b) => a.price - b.price);
  }

  if (filterType !== "All") {
    displayedStocks = displayedStocks.filter(stock => stock.type === filterType);
  }

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStocks} onBuyStock={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default App;
