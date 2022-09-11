import axios from "axios";
import { useEffect, useState } from "react";
import { TableCoins } from "./components/TableCoins";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const getData = async () => {
    /* fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" +
        page
    )
      .then((response) => response.json())
      .then((data) => setCoins(data))
      .catch((error) => console.error(error)); */
    const res = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" + page);

    console.log(res.data);
    setCoins(res.data);
  };

  useEffect(() => {
   // console.log("buscando");
    getData();
  },[] );

  function siguiente() {
   
    if (page <= 10) {
     // console.log("siguiente.." + page);
      setPage(page + 1);
      getData();
    }
  }

  function anterior() {
    
    if (page >= 2) {
      //console.log("anterior " + page);
      setPage(page - 1);
      getData();
    }
  }

  function inputHandler(valor) {
    setSearch(valor);
  }

  return (
    <div className="me-4 ms-4 mt-2 font-weight-bold ">
     
        <Navbar inputHandler={inputHandler} />

        {/*  <input
          type="text"
          placeholder="search a coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        ></input>  */}
        <TableCoins coins={coins} search={search} />
        <Footer siguiente={siguiente} anterior={anterior} />
     
    </div>
  );
}

export default App;
