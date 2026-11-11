import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type ExperienciaProps = {
    puesto: string;
    empresa: string;
    periodo: string;
    descripcion: string;
};

const TarjetaExperiencia = ({ puesto, empresa, periodo, descripcion }: ExperienciaProps) => {
    return (
        <View style={estilos.tarjeta}>
            <Text style={estilos.puesto}>{puesto}</Text>
            <Text style={estilos.empresa}>{empresa}</Text>
            <Text style={estilos.periodo}>{periodo}</Text>
            <Text style={estilos.descripcion}>{descripcion}</Text>
        </View>
    );
};

const experiencia = () => {
    return (
        <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
            <View style={estilos.cabecera}>
                <Text style={estilos.tituloPantalla}>Proyectos y Experiencia</Text>
            </View>

            <TarjetaExperiencia 
                puesto="Desarrollador Full-Stack (Proyecto Académico)"
                empresa="Aplicación Web ONUFAST"
                periodo="2026"
                descripcion="Diseño y desarrollo del backend en Python FastAPI con una base de datos PostgreSQL relacional (onufast_db) y frontend integrado en React asistido por Vite."
            />

            <TarjetaExperiencia 
                puesto="Especialista en Modelado Relacional y Calidad"
                empresa="Feria de Conocimiento CGMLTI"
                periodo="Septiembre 2026"
                descripcion="Exposición de competencias en la normalización de bases de datos hasta la Tercera Forma Normal (3FN), modelado gráfico estructural en draw.io y optimización de datasets complejos."
            />
        </ScrollView>
    );
};

export default experiencia;

const estilos = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: "#f8fafc" },
    contenido: { padding: 20 },
    cabecera: { marginBottom: 12 },
    tituloPantalla: { fontSize: 22, fontWeight: "bold", color: "#0f172a" },
    tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1, backgroundColor: "#ffffff", borderColor: "#ccc" },
    puesto: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
    empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600", marginVertical: 2 },
    periodo: { fontSize: 12, color: "#888", marginBottom: 6 },
    descripcion: { fontSize: 14, color: "#555", lineHeight: 18 },
});
