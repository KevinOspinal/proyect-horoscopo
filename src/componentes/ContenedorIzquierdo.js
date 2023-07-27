export default function ContenedorIzquierdo({ signos, resultado }) {
  return (
    <div className="bg-black">
      <div className="container py-4" style={{ position: "relative" }}>
        {signos.map((signo) => (
          <img
            key={signo.nombre}
            src={signo.imagen}
            alt={signo.nombre}
            style={{
              position: "relative", // Cambiar la posición a "relative"
              top: "0", // Ajustar el valor "top" según lo desees
              left: "0", // Ajustar el valor "left" según lo desees
              width: "100px", // Ajusta el tamaño de las imágenes
              height: "auto",
            }}
          />
        ))}
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
