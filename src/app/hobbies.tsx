import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const hobbies = () => {
    return (
        <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
            <View style={estilos.cabecera}>
                <Text style={estilos.tituloPantalla}>Mis Pasatiempos</Text>
            </View>

            {/* Tarjeta de Hobby 1 con su Alerta */}
            <TarjetaHobby 
                actividad="Programación y Proyectos Personales"
                descripcion="Me apasiona dedicar tiempo libre a resolver retos de lógica algorítmica."
                onPress={() => 
                    Alert.alert(
                        "Detalles del Hobby", 
                        "Dedico unas 5 horas semanales a practicar lógica en HackerRank y a construir módulos experimentales en React Native para agilizar mi aprendizaje."
                    )
                }
            />

            {/* Tarjeta de Hobby 2 con su Alerta */}
            <TarjetaHobby 
                actividad="Videojuegos de Estrategia"
                descripcion="Disfruto jugar partidas que requieran análisis crítico y coordinación rápida."
                onPress={() => 
                    Alert.alert(
                        "Detalles del Hobby", 
                        "Juego principalmente ajedrez rápido y títulos de estrategia en tiempo real. Me ayuda a desarrollar pensamiento lógico bajo presión y toma de decisiones."
                    )
                }
            />

            {/* Tarjeta de Hobby 3 con su Alerta */}
            <TarjetaHobby 
                actividad="Lectura y Aprendizaje Autónomo"
                descripcion="Frecuentemente leo artículos técnicos y documentación oficial de frameworks."
                onPress={() => 
                    Alert.alert(
                        "Detalles del Hobby", 
                        "Sigo de cerca los blogs oficiales de Expo y la documentación de React Navigation para mantenerme al día con los cambios de arquitectura de software."
                    )
                }
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
});
