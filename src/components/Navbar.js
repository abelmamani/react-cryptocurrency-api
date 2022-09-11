export function Navbar({ inputHandler }) {
  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-light bg-dark mt-4"}>
        <div class="container-fluid">
          <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
            <li key={0} className="nav-item">
            
              <a
                key={12}
                className={"nav-link active text-light text-muted "}
                aria-current="page"
                href="#"
              >
                CoinMarketCap
              </a>
            </li>
            <li key={1} className="nav-item">
              <a className={"nav-link text-light text-muted "} href={"#"}>
                Exchanges
              </a>
            </li>
            <li key={2} className={"nav-item"}>
              <a className={"nav-link text-light text-muted "} href={"#"}>
                Support
              </a>
            </li>
            <li key={3} className={"nav-item"}>
              <a className={"nav-link text-light text-muted "} href={"#"}>
                NFT
              </a>
            </li>
            <li key={4} className={"nav-item"}>
              <a className={"nav-link text-light text-muted "} href={"#"}>
                Portafolio
              </a>
            </li>
            <li key={5} className={"nav-item"}>
              <a
                className={" btn btn-dark text-light text-muted  "}
                href={"#"}
                tabindex="-1"
                aria-disabled="true"
              >
                sing in
              </a>
            </li>
          </ul>
          <form className={"d-flex"}>
            <input
              type="text"
              placeholder="search a coin"
              className="form-control bg-light text-dark text-muted border-0 mt-2 me-5 text-center"
              onChange={(e) => inputHandler(e.target.value)}
            ></input>
          </form>
        </div>
      </nav>
    </>
  );
}
