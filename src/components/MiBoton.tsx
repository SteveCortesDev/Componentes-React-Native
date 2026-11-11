import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Definición de propiedades estrictas de acuerdo a la página 6 de la guía
type Props = {
    textoBoton: string;
    nombreIcono: any; // Acepta cualquier nombre válido de Ionicons
    colorBoton: string;
    onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
    return (
        <TouchableOpacity 
            style={[estilos.boton, { backgroundColor: colorBoton }]} 
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Ionicons name={nombreIcono} size={18} color="#fff" style={estilos.icono} />
            <Text style={estilos.texto}>{textoBoton}</Text>
        </TouchableOpacity>
    );
};

export default MiBoton;

const estilos = StyleSheet.create({
    boton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 6,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    icono: { 
        marginRight: 8 
    },
    texto: { 
        color: "#fff", 
        fontSize: 14, 
        fontWeight: "bold" 
    },
});
