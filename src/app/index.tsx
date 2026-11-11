import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

const inicio = () => {
  return (
    <ScrollView
      style={estilos.contenedor}
      contentContainerStyle={estilos.contenido}
    >
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Pepito Pérez Gómez</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles
          y web. Con habilidades en React Native, JavaScript, HTML5, Python y
          gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>
        
        {/* Botón 1: Enviar Correo */}
        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#2563eb"
          onPress={() => 
            Alert.alert("Contacto", "Correo: juan.perez@misena.edu.co")
          }
        />

        {/* Botón 2: Llamar */}
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#10b981"
          onPress={() => 
            Alert.alert("Contacto", "Teléfono: +57 300 123 4567")
          }
        />

        {/* Botón 3: LinkedIn */}
        <MiBoton
          textoBoton="LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0077b5"
          onPress={() => 
            Alert.alert("Contacto", "Abriendo perfil de LinkedIn...")
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
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});

export default inicio;
