
export default function Img({signos}) {
  return (
    <>
        {signos.map((signo) => (
          <img
            key={signo.nombre}
            src={signo.imagen}
            alt={signo.nombre}
            style={{
              position: "relative", // Cambiar la posición a "relative"
              top: "", // Ajustar el valor "top" según lo desees
              left: "0", // Ajustar el valor "left" según lo desees
              width: "100px", // Ajusta el tamaño de las imágenes
              height: "auto",
            }}
          />
        ))}
    </>
  )
}
