import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const hobbies = () => {
    return (
        <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
            <View style={estilos.cabecera}>
                <Text style={estilos.tituloPantalla}>Mis Pasatiempos</Text>
            </View>

            <TarjetaHobby 
                actividad="Videojuegos y Entretenimiento"
                descripcion="Análisis de géneros de anime y gaming enfocado en títulos de estrategia y rol adaptados a PC y móvil."
                onPress={() => 
                    Alert.alert(
                        "Detalles del Pasatiempo", 
                        "Disfruto jugar Genshin Impact en laptop, Blood Strike y administrar mi aldea en Clash of Clans. Adicionalmente, consumo y analizo series de anime de romance, comedia y drama."
                    )
                }
            />

            <TarjetaHobby 
                actividad="Running y Estilo de Vida"
                descripcion="Entrenamientos deportivos al aire libre e investigación de rutinas de cuidado personal."
                onPress={() => 
                    Alert.alert(
                        "Detalles del Pasatiempo", 
                        "Practico atletismo regular recorriendo rutas locales en la ciudad de Bogotá, con una meta fija de completar 10 kilómetros continuos los días viernes."
                    )
                }
            />

            <TarjetaHobby 
                actividad="Investigación en Domótica y Automatización"
                descripcion="Estudio técnico de ecosistemas integrados y sensores inteligentes para el hogar."
                onPress={() => 
                    Alert.alert(
                        "Detalles del Pasatiempo", 
                        "Diseño planos lógicos para setups de automatización residencial integrando protocolos ZigBee, iluminación inteligente, persianas motorizadas y modos de seguridad digital."
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
