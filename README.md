# Oel Estrada - Portafolio

Este proyecto es una aplicación de React desarrollada con TypeScript y Vite, configurada siguiendo las mejores prácticas de la industria.

## 🚀 Tecnologías

- **React 19**
- **TypeScript**
- **Vite**
- **ESLint** (con plugins para React, Hooks y Accesibilidad)
- **Prettier** (formateo de código consistente)

## 📁 Estructura del Proyecto

```text
src/
├── assets/          # Recursos estáticos (imágenes, SVGs, etc.)
├── components/      # Componentes de React reutilizables
├── styles/          # Estilos globales y compartidos
├── App.tsx          # Componente principal
└── main.tsx         # Punto de entrada de la aplicación
```

## 🛠️ Configuración Especial

### Alias de Rutas
Se ha configurado el alias `@/` que apunta a la carpeta `src/`. Esto facilita las importaciones:
`import Component from '@/components/Component'`

### Estilo de Código
- Se utiliza **Prettier** para mantener un estilo de código consistente.
- **ESLint** está configurado para detectar errores comunes y asegurar buenas prácticas en React y accesibilidad (JSX-A11y).

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Compila el proyecto para producción.
- `pnpm lint`: Ejecuta el linter para encontrar problemas en el código.
- `pnpm format`: Formatea automáticamente el código usando Prettier.
- `pnpm preview`: Previsualiza la compilación de producción localmente.

---
Desarrollado por Oel Estrada
