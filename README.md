# Plantilla Angular

Esta es una plantilla base para proyectos Angular, configurada con tecnologías modernas y una estructura escalable.

## 🛠 Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías clave:

- **[Angular](https://angular.dev/)** (v21.0.4): Framework principal para la construcción de la aplicación.
- **[PrimeNG](https://primeng.org/)** (v21.0.2): Biblioteca de componentes UI para un diseño rico y funcional.
- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.18): Framework de utilidades CSS para un diseño rápido y personalizado.
- **[Express](https://expressjs.com/)** (v5.1.0): Servidor web utilizado para SSR (Server-Side Rendering) y optimización.
- **[Crypto-js](https://cryptojs.gitbook.io/)**: Biblioteca para encriptación y manejo seguro de datos.

## 📂 Estructura del Proyecto

El código fuente principal se encuentra en `projects/web-app/src/app` y sigue una arquitectura modular:

- **`core/`**: Módulos y servicios singleton (ej. guardias, interceptores, servicios globales).
- **`features/`**: Módulos funcionales de la aplicación (vistas, componentes específicos).
- **`auth/`**: Módulos relacionados con la autenticación y seguridad.
- **`shared/`**: Módulos relacionados con la reutilización de componentes y servicios.
- **`ui/`**: Módulos relacionados con la reutilización de componentes UI.

## 🚀 Cómo Levantar el Proyecto

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (recomendado v20+).

### 1. Instalar Dependencias
Ejecuta el siguiente comando en la raíz del proyecto para descargar todas las librerías necesarias:

```bash
npm install
```

### 2. Ejecutar Servidor de Desarrollo
Para iniciar la aplicación en modo desarrollo, usa:

```bash
ng serve
```
O también:
```bash
npm start
```
Luego, abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios.

### 3. Construir para Producción
Para generar los archivos optimizados para despliegue:

```bash
ng build
```
Los archivos se generarán en la carpeta `dist/`.

### 4. Ejecutar Tests
Para correr las pruebas unitarias:
```bash
ng test
```
