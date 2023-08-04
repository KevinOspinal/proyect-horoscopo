import Img from "./Img";

export default function ContenedorIzquierdo({ signos, resultado }) {
  return (
    <div className="bg-black">
      <div className="container py-4" style={{ position: "relative" }}>
        <Img signos={signos}/>
        <div className="container-white text-black">
          {resultado && (
            <div>
              <h3>Resultado:</h3>
              <p>{resultado}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
