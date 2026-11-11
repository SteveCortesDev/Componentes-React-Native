import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Componente local de Tarjeta de Hobbies
type HobbyProps = {
    actividad: string;
    descripcion: string;
};

const TarjetaHobby = ({ actividad, descripcion }: HobbyProps) => {
    return (
        <View style={estilos.tarjeta}>
            <Text style={estilos.actividad}>{actividad}</Text>
            <Text style={estilos.descripcion}>{descripcion}</Text>
        </View>
    );
};

// Pantalla principal que renderiza tus pasatiempos
const hobbies = () => {
    return (
        <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
            <View style={estilos.cabecera}>
                <Text style={estilos.tituloPantalla}>Mis Pasatiempos</Text>
            </View>

            {/* Tarjeta de Hobby 1 */}
            <TarjetaHobby 
                actividad="Programación y Proyectos Personales"
                descripcion="Me apasiona dedicar tiempo libre a resolver retos de lógica algorítmica y maquetar interfaces de aplicaciones para practicar nuevas tecnologías."
            />

            {/* Tarjeta de Hobby 2 */}
            <TarjetaHobby 
                actividad="Videojuegos de Estrategia"
                descripcion="Disfruto jugar partidas que requieran análisis crítico, toma de decisiones rápidas y coordinación en equipo con mis amigos."
            />

            {/* Tarjeta de Hobby 3 */}
            <TarjetaHobby 
                actividad="Lectura y Aprendizaje Autónomo"
                descripcion="Frecuentemente leo artículos técnicos, documentación oficial de frameworks y tutoriales sobre las últimas tendencias de desarrollo de software."
            />
        </ScrollView>
    );
};

export default hobbies;

const estilos = StyleSheet.create({
    contenedor: { flex: 1, backgroundColor: "#f8fafc" },
    contenido: { padding: 20 },
    cabecera: { marginBottom: 12 },
    tituloPantalla: { fontSize: 22, fontWeight: "bold", color: "#0f172a" },
    // Estilos de la tarjeta alineados al diseño de la guía
    tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1, backgroundColor: "#ffffff", borderColor: "#ccc" },
    actividad: { fontSize: 16, fontWeight: "bold", color: "#0f172a", marginBottom: 6 },
    descripcion: { fontSize: 14, color: "#555", lineHeight: 18 },
});
