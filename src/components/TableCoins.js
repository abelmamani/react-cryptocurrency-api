import React from "react";
import { CoinRow } from "./CoinRow";

const titles = ["#", "Coin", "Price", "Price (24hs)", "Volume (24hs)", "Market cap", "Circulating Supply"];

export function TableCoins({ coins, search}) {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) |  coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  //console.log(coins);
  return (
    <table className="table table-dark text-light text-capitalize mt-4  table-hover ">
      <thead className="thead">
        <tr>
          {titles.map((title, i) => (
            <td key = {i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index} />
        ))}
      </tbody>
    </table>
  );
}
