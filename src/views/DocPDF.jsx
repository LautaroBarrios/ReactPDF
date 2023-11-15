import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const styles = {
  // Contenedor principal
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    fontSize: "12px",
  },

  // Imagen de veterinaria
  image: {
    maxWidth: "80px",
    maxHeight: "80px",
  },

  // Linea separadora
  line: {
    borderBottom: "1px solid black",
    width: "100%",
    paddingVertical: "5px",
  },

  // Titulo
  title: {
    color: "#000000",
    fontSize: "14px",
    fontWeight: "600",
    paddingVertical: "10px",
    textDecoration: "underline",
  },

  // Contenedor de Datos de Paciente,Propietario y Veterinaria
  containerData: {
    width: "100%",
  },
  containerDataRow: {
    flexDirection: "row",
  },
  containerDataCell: {
    flex: 1,
    padding: "5px",
    textAlign: "start",
  },

  // Tablas
  content: {
    maxWidth: "50ch",
  },
  tableContainer: {
    marginTop: "20px",
    border: "1px solid black",
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid black",
  },
  tableCell: {
    flex: 1,
    padding: "5px",
    textAlign: "center",
    borderRight: "1px solid black",
  },
  tableCellTextStart: {
    flex: 1,
    padding: "5px",
    textAlign: "start",
    borderRight: "1px solid black",
  },
  tableCellNoBorder: {
    flex: 1,
    padding: "5px",
    textAlign: "center",
  },
  tableCellNoBorderTitle: {
    flex: 1,
    padding: "5px",
    textAlign: "center",
    borderTop: "1px solid black",
    color: "#060C35",
  },
  tableCellTextStart1W: {
    flex: 1,
    padding: "5px",
    textAlign: "start",
    borderRight: "1px solid black",
    maxWidth: "25%",
  },
};

const DocPDF = ({ poema }) => {
  return (
    <Document>
      <Page size={"A4"}>
        <View style={styles.container}>
          {/* Imagen Veterinaria */}
          <Image
            src="https://picsum.photos/600/400"
            alt="random image"
            style={styles.image}
          />

          {/* Linea separadora */}
          <View style={styles.line} />

          {/* Titulo */}
          <Text style={styles.title}>RESULTADOS DE LABORATORIO</Text>

          {/* Contenedor de Datos de Paciente,Propietario y Veterinaria */}
          <View style={styles.containerData}>
            <View style={styles.containerDataRow}>
              <Text style={styles.containerDataCell}>Fecha: 2023-10-10</Text>
              <Text style={styles.containerDataCell}>
                N° de historia clínica:
              </Text>
            </View>
            <View style={styles.containerDataRow}>
              <Text style={styles.containerDataCell}>Paciente: Rogelio</Text>
              <Text style={styles.containerDataCell}>Propietario: Andres</Text>
            </View>
          </View>
          <View style={styles.containerData}>
            <View style={styles.containerDataRow}>
              <Text style={styles.containerDataCell}>
                Especie/Raza: Canino - Golder Retriever
              </Text>
              <Text style={styles.containerDataCell}>Edad: 3 Años</Text>
            </View>
            <View style={styles.containerDataRow}>
              <Text style={styles.containerDataCell}>Sexo: Macho</Text>
              <Text style={styles.containerDataCell}>Doctor: Bolivar</Text>
            </View>
          </View>

          {/* Contenedor de la tabla TIPO 1 */}
          <View style={styles.tableContainer}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellNoBorder}></Text>
              <Text style={styles.tableCellNoBorder}>Resultado</Text>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.tableCellNoBorder}>
                Valores de referencia
              </Text>
            </View>
            {/* Contenido de la tabla */}
            {/* Fila 1 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart}>Mielocitos</Text>
              <Text style={styles.tableCellTextStart}>34</Text>
              <Text style={styles.tableCellTextStart}>Fila 1, Celda 3</Text>
              <Text style={styles.tableCellNoBorder}>Fila 1, Celda 4</Text>
            </View>
            {/* Fila 2 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart}>Fila 2, Celda 1</Text>
              <Text style={styles.tableCellTextStart}>Fila 2, Celda 2</Text>
              <Text style={styles.tableCellTextStart}>Fila 2, Celda 3</Text>
              <Text style={styles.tableCellNoBorder}>Fila 2, Celda 4</Text>
            </View>
          </View>

          {/* Contenedor de la tabla TIPO 2 */}
          <View style={styles.tableContainer}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellNoBorderTitle}>Hemograma</Text>
            </View>
            {/* Subencabezado de la tabla */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellNoBorder}></Text>
              <Text style={styles.tableCellNoBorder}>Resultado</Text>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.tableCellNoBorder}>
                Valores de referencia
              </Text>
            </View>
            {/* Contenido de la tabla */}
            {/* Fila 1 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart}>Material</Text>
              <Text style={styles.tableCellTextStart}>Caca</Text>
              <Text style={styles.tableCellTextStart}>Fila 1, Celda 3</Text>
              <Text style={styles.tableCellNoBorder}>50-60</Text>
            </View>
            {/* Fila 2 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart}>
                Hemoglobina corpuscular medio
              </Text>
              <Text style={styles.tableCellTextStart}>800000000</Text>
              <Text style={styles.tableCellTextStart}>%</Text>
              <Text style={styles.tableCellNoBorder}>60-7000</Text>
            </View>
          </View>

          {/* OBSERVACIONES - Contenedor de la tabla */}
          <View style={styles.tableContainer}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellNoBorderTitle}>Observaciones</Text>
            </View>

            {/* Contenido de la tabla */}
            {/* Fila 1 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart1W}>Hematología</Text>
              <Text style={styles.containerDataCell}>
                Neutrófilos hipersegmentados. Anisoplaquetosis. Recuento
                plaquetario controlado en frotis sanguíneo
              </Text>
            </View>
            {/* Fila 2 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart1W}>Química Sanguínea</Text>
              <Text style={styles.containerDataCell}>
                valor 1 valores entre : mas o menos 15
              </Text>
            </View>
          </View>

          {/* SERVICIOS ADICIONALES - Contenedor de la tabla */}
          <View style={styles.tableContainer}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellNoBorderTitle}>
                Servicios Adicionales
              </Text>
            </View>

            {/* Contenido de la tabla */}
            {/* Fila 1 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart1W}>2023-11-03</Text>
              <Text style={styles.containerDataCell}>Limpieza Profunda</Text>
            </View>
            {/* Fila 2 */}
            <View style={styles.tableRow}>
              <Text style={styles.tableCellTextStart1W}>2023-11-06</Text>
              <Text style={styles.containerDataCell}>Peluca</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocPDF;
