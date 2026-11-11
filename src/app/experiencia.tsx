import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Componente local de Tarjeta de Experiencia siguiendo la estructura del profesor
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

// Pantalla principal que renderiza las tarjetas con datos de prueba
const experiencia = () => {
    return (
        <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
            <View style={estilos.cabecera}>
                <Text style={estilos.tituloPantalla}>Experiencia Laboral</Text>
            </View>

            {/* Tarjeta de Experiencia 1 */}
            <TarjetaExperiencia 
                puesto="Desarrollador Frontend Trainee"
                empresa="Tech Solutions Bogotá"
                periodo="2024 - Presente"
                descripcion="Apoyo en el desarrollo de módulos web utilizando React, JavaScript y maquetación adaptativa con CSS. Colaboración directa en el mantenimiento de interfaces."
            />

            {/* Tarjeta de Experiencia 2 */}
            <TarjetaExperiencia 
                puesto="Pasante de Sistemas / Soporte"
                empresa="Sistemas de Occidente"
                periodo="2023 (6 meses)"
                descripcion="Mantenimiento preventivo de equipos de cómputo, configuración de redes locales y asistencia técnica básica a los usuarios de la organización."
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
    // Estilos de la tarjeta alineados al diseño de la guía
    tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1, backgroundColor: "#ffffff", borderColor: "#ccc" },
    puesto: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
    empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600", marginVertical: 2 },
    periodo: { fontSize: 12, color: "#888", marginBottom: 6 },
    descripcion: { fontSize: 14, color: "#555", lineHeight: 18 },
});
