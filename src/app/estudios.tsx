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

      {/* Tarjeta 1: El SENA (Con enCurso en true para que cambie a color azul/morado #eef2ff) */}
      <TarjetaEstudio 
        titulo="Tecnólogo en Análisis y Desarrollo de Software (ADSO)"
        institucion="SENA - Servicio Nacional de Aprendizaje"
        anio={2026}
        enCurso={true}
      />

      {/* Tarjeta 2: Estudio ya terminado */}
      <TarjetaEstudio 
        titulo="Bachiller Técnico en Sistemas"
        institucion="Institución Educativa Técnica"
        anio={2023}
        enCurso={false}
      />

      {/* Tarjeta 3: Otro estudio terminado */}
      <TarjetaEstudio 
        titulo="Curso Profesional de React Native y Expo"
        institucion="Platzi / Coursera"
        anio={2024}
        enCurso={false}
      />
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  contenido: {
    padding: 20,
  },
  cabecera: {
    marginBottom: 12,
  },
  tituloPantalla: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
});

export default estudios;
