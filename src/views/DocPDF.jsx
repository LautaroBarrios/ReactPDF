import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#3388af",
    fontSize: "42px",
    padding: "20px",
  },
  poet: {
    fontStyle: "italic",
    fontSize: "10px",
    color: "gray",
  },
  image: {
    maxWidth: "300px",
    maxHeight: "200px",
  },
  content: {
    maxWidth: "50ch",
  },
  tableContainer: {
    marginTop: "20px",
    border: "1px solid black",
    width: "90%",
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
};

const DocPDF = ({ poema }) => {
  return (
    <Document>
      <Page size={"A4"}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {poema ? poema.title : "Soy el título"}
          </Text>
          <Text style={styles.poet}>
            Por {poema ? poema.author : "No se encontro el autor"}
          </Text>
          <Image
            src="https://picsum.photos/600/400"
            alt="random image"
            style={styles.image}
          />

          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Columna 1</Text>
              <Text style={styles.tableCell}>Columna 2</Text>
              <Text style={styles.tableCell}>Columna 3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Fila 1, Celda 1</Text>
              <Text style={styles.tableCell}>Fila 1, Celda 2</Text>
              <Text style={styles.tableCell}>Fila 1, Celda 3</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Fila 2, Celda 1</Text>
              <Text style={styles.tableCell}>Fila 2, Celda 2</Text>
              <Text style={styles.tableCell}>Fila 2, Celda 3</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocPDF;
