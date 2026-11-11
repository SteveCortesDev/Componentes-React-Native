import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    actividad: string;
    descripcion: string;
    onPress: () => void; // Recibe la función de la alerta
};

const TarjetaHobby = ({ actividad, descripcion, onPress }: Props) => {
    return (
        <TouchableOpacity 
            style={estilos.tarjeta} 
            onPress={onPress} 
            activeOpacity={0.7}
        >
            <Text style={estilos.actividad}>{actividad}</Text>
            <Text style={estilos.descripcion}>{descripcion}</Text>
        </TouchableOpacity>
    );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
    tarjeta: { 
        padding: 16, 
        borderRadius: 10, 
        marginVertical: 8, 
        borderWidth: 1, 
        backgroundColor: "#ffffff", 
        borderColor: "#ccc" 
    },
    actividad: { fontSize: 16, fontWeight: "bold", color: "#0f172a", marginBottom: 6 },
    descripcion: { fontSize: 14, color: "#555", lineHeight: 18 },
});
