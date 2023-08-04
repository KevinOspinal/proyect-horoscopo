import React from 'react'

export default function FormInput({OneLabel,TwoLabel}) {
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="correo" className="form-label">{OneLabel}</label>
            <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="users@gmail.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="clave" className="form-label">{TwoLabel}</label>
            <input type="password" className="form-control" id="clave" placeholder="*********"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
          </div>
          <div className="mb-3 ">
            <p>¿Aun no tienes cuenta?</p>
            <a href="#">
              <i className="bi bi-person-plus "></i> Registrame
            </a>
          </div>
    </div>
  )
}
