# React + Vite
# Pizzería Mamma Mia

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Hito 1 - Version: 0.0.0
Se agrega los siguientes componentes:
- CardPizza: Card de productos
- Footer: Información de empresa
- Header: Contenedor de Navbar
- Home: Contenedor Header y CardPizza
- Navbar: Botones de accesos y total de precio 

## Hito 2 - Version: 0.0.1
Se agrega los siguientes componentes:
- Login: Pagina de acceso
- Register Pagina de registro

## Hito 3 - Version: 0.0.2
Se comentan lo siguientes componentes:
- Login: Pagina de acceso
- Register Pagina de registro

Se adiciona lo siguiente:
- Se integra react-bootstrap
- Se agrega función a botón "ver más" (Utilizando modal de bootstrap)
- Se cambia etiquetas de ingredientes span por li
- Se actualiza CardPizza.jsx
- Se agrega Cart.jsx
- Se realiza llamado de arreglos desde pizza.js
- Se agrega función sumar o quitar cantidad de producto

## Hito 4 - Version: 0.0.3
Se comentan los siguiente componentes:
- Cart: pagina resumen de pago

Se adiciona lo siguiente:
- Componente Home se descomenta
- Se agrega llamado de API con uso de effect
- Se agrega componente Pizza
- Se agrega llamado de API a url fija de pizza id p001
- Componente Pizza se agrega diseño y se visualizan atributos solicitados.

## Hito 5 - Version: 0.0.4
Se agrega:
- Liberia "react-router-dom"
- Carpeta pages y traslado de componentes a la misma
- Rutas solicitadas
- Componente Profile y NotFound
- Rdirección a pagina notFound con url /404
- Botón de redireción a home desde pagina 404