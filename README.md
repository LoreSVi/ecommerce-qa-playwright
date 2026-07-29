# Ecommerce QA Playwright

![Playwright E2E](https://github.com/LoreSVi/ecommerce-qa-playwright/actions/workflows/playwright.yml/badge.svg)

Un proyecto de ejemplo para demostrar habilidades de QA automation en una aplicación e-commerce desarrollada con React y Vite.

## ✅ Qué incluye

- App de e-commerce en React con navegación, productos, carrito y checkout
- Pruebas E2E con Playwright
- Smoke test de flujo completo de compra
- Estructura de proyecto preparada para pruebas y mejoras continuas

## 📁 Estructura del proyecto

- `src/` → aplicación React
- `public/` → recursos estáticos
- `tests/e2e/` → pruebas Playwright
- `test-results/` → resultados de ejecución (ignorado en Git)
- `playwright.config.js` → configuración de Playwright
- `README.md` → documentación del proyecto

## 🚀 Instalación

```bash
npm install
```

## ▶️ Ejecutar la app

```bash
npm run dev
```

Luego abre `http://localhost:5173` en tu navegador.

## 🧪 Ejecutar pruebas E2E

```bash
npm run test:e2e
```

Ejecutar con navegador visible:

```bash
npm run test:e2e:headed
```

## 🧩 Tecnologías usadas

- React
- Vite
- Material UI
- React Router
- Firebase
- Formik + Yup
- Playwright
- SweetAlert2

## 🎯 Enfoque QA

Este repo está pensado para mostrar:

- pruebas de flujo de usuario
- validaciones de carrito y checkout
- automatización E2E reproducible
- mejoras continuas en la suite de pruebas

## 📝 Buenas prácticas para el repositorio

- agrega nuevos tests en `tests/e2e/`
- no subas `node_modules/` ni `test-results/`
- documenta los escenarios importantes en el `README`
