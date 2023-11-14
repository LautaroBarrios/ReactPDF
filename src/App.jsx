import { useState, useEffect } from "react";
import "./App.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import VistaWeb from "./views/VistaWeb";
import DocPDF from "./views/DocPDF";

function App() {
  const [poema, setPoema] = useState("");
  const [verWeb, setVerWeb] = useState(false);
  const [verPDF, setVerPDF] = useState(false);
  function fetchPoema() {
    fetch("https://poetrydb.org/random")
      .then((response) => response.json())
      .then((data) => {
        setPoema(data[0]);
        console.log(data[0]);
      });
  }

  useEffect(() => {
    fetchPoema();
  }, []);

  const Menú = () => (
    <nav className="flex space-x-2 pb-6">
      {/* Botón de VistaWeb */}
      <button
        className="p-3 border rounded shadow-md active:scale-95"
        onClick={() => {
          setVerWeb(!verWeb);
          setVerPDF(false);
        }}
      >
        {verWeb ? "Ocultar Web" : "Ver Web"}
      </button>

      {/* Botón VerPDF */}
      <button
        className="p-3 border rounded shadow-md active:scale-95"
        onClick={() => {
          setVerPDF(!verPDF);
          setVerWeb(false);
        }}
      >
        {verPDF ? "Ocultar PDF" : "Ver PDF"}
      </button>

      {/* Botón de DescargarPDF */}
      <PDFDownloadLink
        document={<DocPDF poema={poema} />}
        fileName={`${poema.title}.pdf`}
      >
        <button className="p-3 border rounded shadow-md active:scale-95">
          Descargar PDF
        </button>
      </PDFDownloadLink>
    </nav>
  );

  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="flex flex-col items-center justify-start"
      >
        <Menú />
        {poema ? (
          <>
            {verWeb ? <VistaWeb poema={poema} /> : null}
            {verPDF ? (
              <PDFViewer style={{ width: "100%", height: "90vh" }}>
                <DocPDF poema={poema} />
              </PDFViewer>
            ) : null}
          </>
        ) : (
          <p className="text-2xl pt-40">Cargando Datos...</p>
        )}
      </div>
    </>
  );
}

export default App;
