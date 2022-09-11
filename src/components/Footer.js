export function Footer({ siguiente, anterior }) {
  return (
    <>
      <div className="text-center md-4">
      

        
       <a className="btn btn-dark btn-lg  "  onClick={() => {
            anterior();
          }}>Anterior</a>

        <a className="btn btn-dark  btn-lg  ms-4"  onClick={() => {
            siguiente();
          }}>Siguiente</a>
      </div>
    </>
  );
}
