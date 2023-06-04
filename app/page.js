"use client";

import { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

function Page() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // Manejar comportamiento del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Function Firebase Firestore para guardar la información en Firestore
    try {
      const userRef = doc(collection(db, "users"));
      await setDoc(userRef, {
        email,
        firstName,
        secondName,
      });

      if (selectedImage && email) {
        try {
          const storageRef = ref(storage, email);
          await uploadBytes(storageRef, selectedImage);
          console.log("Imagen cargada correctamente");
        } catch (error) {
          console.error("Error al cargar la imagen:", error);
        }
      }
      
      // Restablecer los valores a una cadena vacía
      setEmail("");
      setFirstName("");
      setSecondName("");
      setSelectedImage(null);
      alert("Información guardada en correctamente");
    } catch (error) {
      console.error("Error al guardar la información en Firestore:", error);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-around"
      style={{ minHeight: "608px" }}
    >
      <div className="p-5" style={{ minWidth: "525px", maxWidth: "625px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputSecondName" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSecondName"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div id="emailHelp" className="form-text">
              No compartiremos tu información personal
            </div>
          </div>


          <div className="mb-3">
            <input
              type="file"
              name="factura"
              id=""
              placeholder="Seleccionar imagen"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Acepto terminos y condiciones
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
        style={{
          maxHeight: "590px",
          maxWidth: "900px",
          minWidth: "525px",
        }}
      />
    </div>
  );
}

export default Page;
