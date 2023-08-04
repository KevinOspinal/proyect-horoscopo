import { useState } from "react";
import ListaDesplegable from "./ListaDesplegable";
import Buttons from "./Buttons";

function ContenedorDerecho({ generoOptions, signos, actualizarResultado }) {


  const [selectedGenero, setSelectedGenero] = useState(""); // Estado para almacenar el género seleccionado
  const [selectedSigno, setSelectedSigno] = useState(""); // Estado para almacenar el signo zodiacal seleccionado


  const handleGeneroChange = (e) => {
    setSelectedGenero(e.target.value);
  };

  const handleSignoChange = (e) => {
    setSelectedSigno(e.target.value);
  };

  const handleConsultar = () => {
    if (selectedSigno && selectedGenero) {
      const resultado = `Tu signo zodiacal es: ${selectedSigno}`;
      actualizarResultado(resultado); // Pasar el resultado al componente padre Container
      
    } else {
      const mensaje = "Complete la selección.";
      actualizarResultado(mensaje); // Pasar el mensaje al componente padre Container
    }
  };

  return (
    <div className="container rounded p-4 margen-abajo">
      <h2 className="mb-5 text-center">HORÓSCOPOS</h2>
      <div className="row justify-content-center text-center">
        <div className="col-md-6">

          <ListaDesplegable
            selectedGenero={selectedGenero}
            handleChange={handleGeneroChange}
            generoOptions={generoOptions}
            tittle="Géneros"
          />

          <ListaDesplegable
            selectedGenero={selectedSigno}
            handleChange={handleSignoChange}
            generoOptions={signos}
            tittle="Signos"
          />

          <Buttons handleConsultar={handleConsultar} tittle="Consultar" />
        </div>
      </div>
    </div>
  );
}

export default ContenedorDerecho;