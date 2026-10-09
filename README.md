# CableMax - Portal de TV Cable

Proyecto de Fullstack 2 hecho con React, Vite y React Router.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173` en el navegador.

## Páginas

- **Inicio**: bienvenida y canales destacados
- **Canales**: grilla con buscador y filtro por categoría
- **Detalle del canal**: información de cada canal (`/canales/:id`)
- **Planes**: planes disponibles y opción de contratar
- **Contacto**: formulario con validación
- **404**: página para rutas que no existen

## Estructura

```
src/
├── components/   Navbar, Footer, CanalCard, PlanCard
├── pages/        Inicio, Canales, DetalleCanal, Planes, Contacto, NoEncontrado
├── data/         canales.js y planes.js
├── App.jsx       rutas
├── App.css       estilos
└── main.jsx      BrowserRouter
```

## Conceptos usados

- Componentes y props
- Hooks: useState, useEffect, useParams, useNavigate
- Renderizado condicional
- React Router
