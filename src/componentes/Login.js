import Buttons from "./componentContenedor/Buttons"
import FormInput from "./componentLogin/FormInput"
import '../style/Login.css';

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <form className="form border rounded p-4">
            <FormInput OneLabel="Correo Electronico" TwoLabel="Contraseña"/>
          <div className="mb-3 d-flex justify-content-center">
            <Buttons tittle="Iniciar Sesion"/>
          </div>
        </form>
      </div>
    </div>
  )
}
