import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const estudios = () => {
  return (
    <ScrollView 
      style={estilos.contenedor} 
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.cabecera}>
        <Text style={estilos.tituloPantalla}>Formación Académica</Text>
      </View>

      {/* Tarjeta 1: El SENA (En curso) */}
      <TarjetaEstudio 
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Centro de Gestión de Mercados, Logística y TIC"
        anio={2027}
        enCurso={true}
      />

      {/* Tarjeta 2: Programa Habilidades Digitales */}
      <TarjetaEstudio 
        titulo="Formación en Habilidades Digitales (CONECTA+ DIGITAL)"
        institucion="UNICAFAM y GOYN Bogotá"
        anio={2026}
        enCurso={false}
      />

      {/* Tarjeta 3: Postulación / Estudios Complementarios */}
      <TarjetaEstudio 
        titulo="Normas Internacionales de Calidad de Software (ISO/IEC 25000)"
        institucion="Estudio Autónomo de Estándares ISO/IEC 25010"
        anio={2026}
        enCurso={false}
      />
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  cabecera: { marginBottom: 12 },
  tituloPantalla: { fontSize: 22, fontWeight: "bold", color: "#0f172a" },
});

export default estudios;
