function page() {
  return (
    <div 
    className="d-flex align-items-center justify-content-around" 
    style={{ minHeight: '608px'}}
    >


      <div className="p-5" style={{ minWidth: '525px', maxWidth: '625px' }}>
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



         
      <img
            src="banner-test.svg"
            alt="Banner"
            className="img-fluid "
            style={{ maxHeight: '590px',  maxWidth: '900px', minWidth: '525px', maxWidth: '625px' }}
           />
        
    

      
     

    </div>
  );
}

export default page;
