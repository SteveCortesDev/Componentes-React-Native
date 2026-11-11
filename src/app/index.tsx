import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

const inicio = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      {/* Sección del Perfil / Avatar */}
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Daniel Pulido</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      {/* Sección Perfil Profesional */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA en Bogotá, enfocado en el Análisis y Desarrollo de Software (ADSO). 
          Apasionado por los flujos de trabajo full-stack, modelado relacional y la calidad del software.
        </Text>
      </View>

      {/* Sección de Contacto utilizando <MiBoton /> */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>
        
        {/* Enviar Correo */}
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => 
            Alert.alert("Contacto", "Correo Institucional: daniel.pulido@misena.edu.co")
          }
        />

        {/* Llamar */}
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#2563eb"
          onPress={() => 
            Alert.alert("Contacto", "Llamando al Teléfono Celular de Daniel...")
          }
        />

        {/* LinkedIn */}
        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0077b5"
          onPress={() => 
            Alert.alert("Contacto", "Redireccionando al perfil profesional de LinkedIn...")
          }
        />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  subtitulo: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginBottom: 8 },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});

export default inicio;
