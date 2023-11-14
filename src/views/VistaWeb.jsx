import React from 'react'

const VistaWeb = ({ poema }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#3388af", fontSize: "42px" }}>
        {poema ? poema.title : "Soy el título"}
      </h1>
      <p>Por {poema ? poema.author : "No se encontro el autor"}</p>
      <img
        src="https://picsum.photos/600/400"
        alt="random image"
        style={{ maxWidth: "600px", maxHeight: "400" }}
      />
    </div>
  );
}

export default VistaWeb