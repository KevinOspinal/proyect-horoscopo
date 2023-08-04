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
import ContenedorDerecho from "./componentContenedor/ContenedorDerecho";
import ContenedorIzquierdo from "./componentContenedor/ContenedorIzquierdo";

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
    { label: "Piscis", imagen: Piscis, value: "opcion1" },
    { label: "Cancer", imagen: Cancer, value: "opcion2" },
    { label: "Capricornio", imagen: Capricornio, value: "opcion3" },
    { label: "Leo", imagen: Leo, value: "opcion4"},
    { label: "Tauro", imagen: Tauro, value: "opcion5" },
    { label: "Virgo", imagen: Virgo, value: "opcion6" },
    { label: "Geminis", imagen: Geminis, value: "opcion7" },
    { label: "Libra", imagen: Libra, value:"opcion8" },
    { label: "Escorpion", imagen: Escorpion,value: "opcion9" },
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
