export function CoinRow({ coin, index}) {
  return (
    <tr key={index + 1} >
      <td>{coin.market_cap_rank}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: "5%" }}
          className="img-fluid me-4 "
        ></img>
        <span  >{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>

      <td>$ { coin.current_price.toLocaleString('en-US')}</td>
    
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}
      >
        {Math.abs(coin.price_change_percentage_24h)} %
      </td>
      <td>$ {coin.total_volume.toLocaleString('en-US')}</td>
      <td>$ { coin.market_cap.toLocaleString('en-US')}</td>
      <td className="text-right"> { coin.circulating_supply.toLocaleString('en-US') } {coin.symbol.toUpperCase()}  </td>
    </tr>
  );
}
