# 📱 Aplicación Móvil - Hoja de Vida Dinámica

Taller práctico enfocado en el desarrollo de componentes reutilizables, interactividad nativa y navegación por pestañas (Bottom Tabs) utilizando **React Native** y **Expo Router**.

## 📂 Estructura del Proyecto
El código se organiza estrictamente bajo la arquitectura requerida en la guía:

```text
src/
├── app/
│   ├── _layout.tsx      <-- Menú inferior con pestañas e íconos personalizados
│   ├── index.tsx         <-- Pantalla 1: Datos Personales e interacciones de contacto
│   ├── estudios.tsx      <-- Pantalla 2: Formación Académica (SENA, UNICAFAM)
│   ├── experiencia.tsx   <-- Pantalla 3: Proyectos de Desarrollo (ONUFAST, CGMLTI)
│   └── hobbies.tsx       <-- Pantalla 4: Intereses y Pasatiempos personales
└── components/
    ├── MiBoton.tsx       <-- Componente Reutilizable de botones táctiles
    ├── TarjetaEstudio.tsx <-- Tarjeta con lógica condicional para el estado "En Curso"
    └── TarjetaHobby.tsx   <-- Tarjeta con interacción táctil para alertas detalladas
```


