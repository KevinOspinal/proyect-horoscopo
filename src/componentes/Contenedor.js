import Piscis from "../img/pisis.jpg";
import Cancer from "../img/cancer.jpg";
import Capricornio from "../img/capricornio.jpg";
import Leo from "../img/leo.jpg";
import Tauro from "../img/tauro.jpg";
import Virgo from "../img/virgo.jpg";
import Geminis from "../img/geminis.jpg";
import Libra from "../img/libra.jpg";
import Escorpion from "../img/escorpion.jpg";
import { useState } from "react";
import ContenedorDerecho from "./ContenedorDerecho";
import ContenedorIzquierdo from "./ContenedorIzquierdo";

const Container = () => {
   // Estado para almacenar el resultado
   const [resultado, setResultado] = useState("");

   // Función para actualizar el resultado
   const actualizarResultado = (nuevoResultado) => {
     setResultado(nuevoResultado);
   };
  // Opciones de género y signo
  const generoOptions = [
    { label: "Anónimo", value: "opcion1" },
    { label: "Niño", value: "opcion2" },
    { label: "Mujer", value: "opcion3" },
    { label: "Hombre", value: "opcion4" },
  ];
  const signos = [
    { nombre: "Piscis", imagen: Piscis, top: "200pt", left: "350pt" },
    { nombre: "Cancer", imagen: Cancer, top: "200pt", left: "150pt" },
    { nombre: "Capricornio", imagen: Capricornio, top: "100pt", left: "400pt" },
    { nombre: "Leo", imagen: Leo, top: "120pt", left: "230pt" },
    { nombre: "Tauro", imagen: Tauro, top: "10px", left: "300pt" },
    { nombre: "Virgo", imagen: Virgo, top: "10px", left: "140pt" },
    { nombre: "Geminis", imagen: Geminis, top: "1pt", left: "5px" },
    { nombre: "Libra", imagen: Libra, top: "300px", left: "5px" },
    { nombre: "Escorpion", imagen: Escorpion, top: "110pt", left: "70pt" },
  ];

  return (
    <>
      <div className="container-full-height">
        <div className="bg-black">
          {/* Pasa el resultado al componente ContenedorIzquierdo */}
          <ContenedorIzquierdo signos={signos} resultado={resultado} />
        </div>
        <div className="bg-blue">
          {/* Pasa la función para actualizar el resultado al componente ContenedorDerecho */}
          <ContenedorDerecho
            generoOptions={generoOptions}
            signos={signos}
            actualizarResultado={actualizarResultado}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
