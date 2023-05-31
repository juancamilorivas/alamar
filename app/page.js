import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="row align-items-center ">


      <div className="col p-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              No compartas tu informacion personal con nadie
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Acepto
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>



      <div className="col">
        <div>
          <Image
            src={`/banner-test.png`}
            alt="something"
            height={690}
            width={900}
          />
        </div>
      </div>



    </div>
  );
}

export default page;
