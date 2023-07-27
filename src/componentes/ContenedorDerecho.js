import { useState } from "react";

function ContenedorDerecho({ generoOptions, signos,actualizarResultado }) {
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
          <select
            className="form-select mb-5 list"
            id="lista1"
            value={selectedGenero}
            onChange={handleGeneroChange}
          >
            <option value="" disabled>
              Género
            </option>
            {generoOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            className="form-select list "
            id="lista2"
            value={selectedSigno}
            onChange={handleSignoChange}
          >
            <option value="" disabled>
              SIGNO
            </option>
            {signos.map((option) => (
              <option key={option.nombre} value={option.nombre}>
                {option.nombre}
              </option>
            ))}
          </select>

          <button
            className="btn btn-primary button"
            style={{ backgroundColor: "#f5f7ff", color: "black" }}
            onClick={handleConsultar}
          >
            {"<"} Consultar
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContenedorDerecho;
