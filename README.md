This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# JEG Dev Studios Web

## 1. Introduction

This project involves the development of a portfolio website for a graphic designer. The site is designed to showcase the designer's work, provide information about their services, and allow users to contact them through a form. The page is optimized for mobile devices and uses modern technologies both in the frontend and backend.
The page is optimized for mobile devices and uses modern technologies in the frontend.

### Tecnologías Utilizadas

#### Frontend

- **Next.js** (React Framework para SSR/SSG y optimización)
- **Bootstrap** (CSS styles)

#### Herramientas de Desarrollo

- GitHub (gestión de código y documentación)

#### Entorno de Desarrollo

- Visual Studio Code

## 2. Requisitos

#### Dependencias y Librerías Frontend

- **Next.js**: Framework basado en React para aplicaciones web modernas, con soporte para renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y optimización automática.
- **Bootstrap CSS**: Librería de estilos para diseño responsivo y componentes UI.

## 3. Configuración del Entorno

### Frontend

#### Instalación

##### Prerrequisitos

1. **Cuenta de GitHub**
2. **Acceso al repositorio original**
3. **Cuenta en Hostinger** (opcional, para dominio personalizado)

##### Pasos de Instalación

1. **Clona el repositorio**

   - Sigue los pasos habituales de GitHub para clonar el repositorio.
   - Navega al directorio del proyecto.

2. **Instala dependencias**

   ```bash
   npm install
   ```

3. **Estructura del Proyecto**

   ```
   frontend/
      ├── app/                     # Directorio principal para las rutas y lógica de la aplicación (App Router de Next.js)
      │   └── [name-page]/         # Directorio para una ruta específica (ej. 'about', 'contact'). El nombre entre corchetes indica una ruta dinámica o un grupo de rutas.
      │       ├── styles-file.css  # Archivo CSS específico para los componentes o páginas dentro de 'name-page'.
      │       ├── pageClient.jsx   # Componente de React del lado del cliente (si se usa 'use client'). Contiene la lógica interactiva de la página.
      │       └── page.js          # Archivo principal para definir la UI de la ruta '/name-page'. Puede ser un Server Component por defecto.
      ├── components/              # Directorio para componentes reutilizables de React (ej. botones, menús, layouts).
      ├── public/                  # Directorio para archivos estáticos que se sirven directamente.
      │   └── assets/              # Subdirectorio para organizar los recursos estáticos.
      │       ├── icons/           # Almacena los archivos de iconos (SVG, PNG, etc.).
      │       ├── img/             # Almacena imágenes generales del sitio.
      │       │   ├── index/       # Imágenes específicas para la página de inicio.
      │       │   │   ├── fondos/  # Imágenes de fondo para la página de inicio.
      │       │   │   └── img-services/ # Imágenes relacionadas con los servicios mostrados en la página de inicio.
      │       │   └── services/    # Imágenes específicas para la sección o página de servicios.
      │       └── logo/            # Almacena los logotipos del sitio o de la marca.
      ├── package.json             # Archivo que define las dependencias del proyecto, scripts (npm run dev, npm run build, etc.) y otra metainformación.
      ├── README.md                # Archivo con la documentación del proyecto (este mismo archivo).
      └── next.config.js           # Archivo de configuración para Next.js, donde puedes personalizar su comportamiento (ej. redirecciones, variables de entorno, optimización de imágenes).
   ```

4. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   Accede a [http://localhost:3000](http://localhost:3000).

### Backend

#### Instalación

**1. Instaled Nodemailer**:

- Insert command in console:
  `npm init -y`
- insert command in console:
  `npm i nodemailer`

**2. Instaled Express**:

- insert command in console:
  `npm i express`

#### Estructura del Proyecto:

    backend/
    	node_modules/
    	package-lok.json
    	package.json
    	server.js

## 4. Proyect Usage

### Frontend:

#### Main Functions:

- **JavaScript**
  **Contact Form**. - A script handles data capture from the form and submission via a REST API (fetch) to the backend for processing. - Basic validation of fields before submission. - Success or error messages are displayed after form submission.
  **Validation and error handling**. - Frontend Validation: Contact form field validation before sending data to the server. - Error Handling: An error message is displayed to the user in case of form submission errors. - User Interaction: Explains how users are expected to interact with the page (forms, buttons, etc.).

### Backend

The backend of this project is built using Node.js and Express, focusing on creating an endpoint that allows sending emails from the contact form. Below is the implementation and usage of the available endpoints:

#### Endpoints

**1. Send Email**

- **URL**: `/send-email`
- **HTTP Method**: `POST`
- **Description**: This endpoint receives the data from the contact form (name, email, and message) and sends it to a specified email address using Nodemailer.

- **Parameters**:

  - **Body**:
    - `name` (string): The sender's name.
    - `email` (string): The sender's email address.
    - `message` (string): The message they want to send.

- **Response**:

  - **Success**:
    - **HTTP Code**: `200 OK`
    - **Body**: `{ "message": "Email sent successfully" }`
  - **Error**:
    - **HTTP Code**: `500 Internal Server Error`
    - **Body**: `{ "error": "Error sending the email" }`

- **Request Example**:
  ```bash
  curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{
        "name": "John Doe",
        "email": "johndoe@example.com",
        "message": "Hello, I am interested in your services."
      }'
  ```
- **Response Example (Success)**:
  `{
  "message": "Email sent successfully"
}`
- **Response Example (Error)**:
  `{
  "error": "Error sending the email"
}`

## 5. Testing

### Frontend Testing

To ensure the functionality of the frontend, you can follow these steps:

1. **Manual Testing**:

   - **Browser Compatibility**: Open the website in different browsers (e.g., Chrome, Firefox, Safari, Edge) to check for cross-browser compatibility.
   - **Responsiveness**: Test the website on various devices (mobile, tablet, desktop) to verify that the design is responsive and adjusts correctly to different screen sizes.
   - **Form Validation**: Test the contact form by entering valid and invalid data to ensure that the form validates input correctly before submission.
   - **Interactive Elements**: Verify that all interactive elements such as buttons, links, and navigation menus work as expected.

2. **Developer Tools**:

   - **Inspect Element**: Use the browser’s developer tools (F12) to inspect the elements and debug any issues with CSS or JavaScript.
   - **Console Logs**: Check the console for any errors or warnings during interaction with the webpage.
   - **Network Tab**: Use the network tab to monitor HTTP requests made by the frontend, particularly when submitting the contact form.

3. **Automated Testing** (Optional):
   - **Lighthouse**: Run Google Lighthouse in Chrome DevTools to get insights into the page's performance, accessibility, SEO, and best practices.
   - **Google PageSpeed Insights**: Use [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to analyze the page’s loading speed and performance metrics. This tool provides suggestions on how to improve the page's speed and overall user experience.
   - **End-to-End Testing**: Implement tools like Cypress or Selenium for automated end-to-end testing to simulate user interactions and verify the entire flow.

### Backend Testing

To ensure the functionality and reliability of the backend, you can follow these steps:

1. **Unit Testing**:

   - **Jest/Mocha**: Write unit tests for individual functions or components of your backend using testing frameworks like Jest or Mocha. For example, you could write tests to ensure the correct handling of email data in the `/send-email` endpoint.
   - **Mocking**: Use tools like `sinon.js` or Jest mocks to simulate external dependencies (e.g., Nodemailer) and test the logic independently.

2. **Integration Testing**:

   - **Supertest**: Use Supertest in combination with Mocha or Jest to test your Express routes. This ensures that the integration between different parts of your application (e.g., routes, middleware, and external services) works as expected.
   - **Database Testing** (if applicable): If your project includes database interaction, use an in-memory database like SQLite or MongoDB Memory Server to test database-related functionality.

3. **API Testing with Postman**:

   - **Postman**: Use [Postman](https://www.postman.com/) to manually test the API endpoints. Create a collection in Postman to send different payloads to the `/send-email` endpoint, and verify the response.
   - **Error Handling**: Test the API's error handling by sending invalid data or simulating failure scenarios (e.g., incorrect email credentials) to ensure the API responds with appropriate status codes and messages.

4. **End-to-End Testing** (Optional):

   - **Full Workflow**: Set up end-to-end tests that cover the entire workflow, from submitting the form on the frontend to receiving the email via the backend, to ensure the complete integration is functioning correctly.
   - **CI/CD Pipeline**: Integrate automated tests into your CI/CD pipeline to automatically run tests on every code change, ensuring continuous validation of your application’s functionality.

5. **Debugging**:
   - **Logging**: Implement logging in your Node.js application (using tools like `winston` or the native `console.log`) to track and debug any issues that arise during testing or production.
   - **Error Monitoring**: Use error monitoring services like Sentry to catch and report runtime errors in the backend, which can then be addressed in subsequent tests.

## 6. Additional Resources

Links: - [Extra documentation for Backend tests.](https://github.com/frank-gp/doc/blob/main/backend/nodejs/nodemailer/nodemailer.md "Documentation for test") - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 7. Maintenance

Maintenance: - Maintain optimized images in webp format - Keep contact information and links up to date - Debugging the server - Adjust meta tags if necessary

## 8. Licence

Proyect licence: Propietary licence (read file "LICENSE" from the repository)
