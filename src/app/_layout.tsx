import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2563eb" }}>
      {/* Pestaña de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Datos Personales",
          tabBarIcon: ({ color, size }) => {
            const Icon: any = Ionicons;
            return <Icon name="person-outline" size={size} color={color} />;
          },
        }}
      />

      {/* Pestaña de Estudios */}
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Mis Estudios",
          tabBarIcon: ({ color, size }) => {
            const Icon: any = Ionicons;
            return <Icon name="school-outline" size={size} color={color} />;
          },
        }}
      />

      {/* Pestaña de Experiencia */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia Laboral",
          tabBarIcon: ({ color, size }) => {
            const Icon: any = Ionicons;
            return <Icon name="briefcase-outline" size={size} color={color} />;
          },
        }}
      />

      {/* Pestaña de Hobbies */}
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerTitle: "Mis Pasatiempos",
          tabBarIcon: ({ color, size }) => {
            const Icon: any = Ionicons;
            return <Icon name="heart-outline" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
