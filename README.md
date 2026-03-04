# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span>
## <i align="center" style="font-size:2rem">🐾 ADOPTA VET</i>

✒️ **APLICACIÓN WEB FULLSTACK PARA ADOPCIÓN DE ANIMALES**

<p align="center">
<img width="600px" heigth="600px" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzNvY3N4NWlwdmFqZDgzZXpqYndkNnFiYzJzZHBxNnR0Znd2b3lpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q343jgPdGDu251pGvI/giphy.gif" alt="Perrito Emocionado">
</p>

En este proyecto se utilizaron tecnologías como **TypeScript, React, TailwindCSS y React Query** para el frontend.  
Para el backend se utilizó **Node.js con Express**, junto con **Mongoose como ORM** para la base de datos en **MongoDB**.

Se implementó autenticación con **JWT** y encriptación de contraseñas con **bcrypt**.

Este proyecto fue construido con el propósito de practicar una arquitectura fullstack completa, autenticación segura, manejo de estados asincrónicos y conexión real entre frontend y backend desplegado en la nube.

🔗 Deploy Frontend: https://adopta-vet.netlify.app/  
🔧 Backend deployado en Render  

---

## 📌 ¿Qué permite hacer la aplicación?

- 🐶 Ver animales publicados en adopción sin necesidad de iniciar sesión.
- ➕ Publicar un animal en adopción (requiere autenticación).
- ❤️ Agregar y quitar animales de favoritos.
- 📱 Contactar al publicador mediante:
  - WhatsApp
  - Correo electrónico
- 🔐 Sistema de login y registro con autenticación JWT.
- 🗄 Persistencia de datos en MongoDB Atlas.

---

## 💡 Cómo se pensó este proyecto y cómo funciona

### 🎯 Idea Principal

Desarrollar una aplicación realista de adopción de mascotas aplicando una arquitectura moderna desacoplada (frontend + backend), simulando un entorno productivo.

La aplicación permite que cualquier usuario pueda visualizar animales en adopción, pero solo los usuarios registrados pueden publicar y gestionar favoritos.

---

## 🖥️ Frontend

Desarrollado con:

- TypeScript  
- React  
- TailwindCSS  
- React Query  

Se utilizó **React Query** para:

- Manejo de peticiones asincrónicas
- Cacheo automático
- Invalidación de queries
- Manejo de estados de carga y error

La interfaz fue diseñada con TailwindCSS, priorizando:

- Diseño moderno y minimalista
- Componentes reutilizables
- Responsividad completa (mobile-first)

---

## 🔐 Backend

Desarrollado con:

- Node.js  
- Express  
- Mongoose  
- MongoDB  
- JWT  
- bcrypt  

Se implementó:

- Registro e inicio de sesión
- Encriptación de contraseñas con bcrypt
- Generación y validación de tokens JWT
- Middleware de autenticación
- Protección de rutas privadas
- Relación entre usuarios y animales publicados
- Sistema de favoritos asociado al usuario

El backend está desplegado en Render y la base de datos en MongoDB en la nube.

---

## 🧠 Lógica de funcionamiento

- Los animales pueden visualizarse sin autenticación.
- Para publicar un animal es obligatorio iniciar sesión.
- Cada animal publicado queda asociado al usuario creador.
- Los usuarios pueden agregar o quitar animales de favoritos.
- Los datos de contacto permiten comunicarse directamente con el publicador.
- El frontend maneja automáticamente el estado del usuario autenticado mediante JWT.
- Las contraseñas nunca se almacenan en texto plano.

---

## 📱 Responsividad

La aplicación es completamente responsiva y se adapta a:

- 📱 Dispositivos móviles  
- 💻 Escritorio  
- 📲 Tablets  

---

## 🚀 Objetivo del proyecto

Este proyecto fue realizado con el objetivo de:

- Profundizar en TypeScript aplicado a un entorno real.
- Implementar autenticación segura con JWT.
- Trabajar en una arquitectura desacoplada frontend/backend.
- Aplicar React Query para manejo profesional de datos.
- Practicar modelado de datos con Mongoose.
- Implementar relaciones entre entidades (usuarios ↔ animales).
- Desplegar un proyecto fullstack en la nube.

----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span style="font-size:3rem">ENGLISH:</span>

## <i align="center" style="font-size:2rem">🐾 ADOPTA VET</i>

✒️ **FULLSTACK WEB APPLICATION FOR PET ADOPTION**

<p align="center">
<img width="600px" heigth="600px" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjN3YjJtMWsyYTdlNjdhY3hpcDd0anE4d2hhNDd2NWhvejVxaWlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wvYNSqBAMDVx8CEYkt/giphy.gif"alt="Gatiti Enamorado">
</p>


This project was built using **TypeScript, React, TailwindCSS, and React Query** on the frontend.  
The backend was developed with **Node.js and Express**, using **Mongoose as the ORM** for a **MongoDB** database.

Authentication is handled using **JWT**, and passwords are securely encrypted with **bcrypt**.

This project was created to practice building a complete fullstack architecture, secure authentication flows, asynchronous state management, and real-world frontend–backend integration deployed in the cloud.

🔗 Frontend Deploy: https://adopta-vet.netlify.app/  
🔧 Backend deployed on Render  

---

## 📌 What does the application allow you to do?

- 🐶 View pets available for adoption without logging in.
- ➕ Publish a pet for adoption (authentication required).
- ❤️ Add and remove pets from favorites.
- 📱 Contact the pet owner via:
  - WhatsApp
  - Email
- 🔐 Secure authentication system using JWT.
- 🗄 Persistent data storage in MongoDB Atlas.

---

## 💡 How the project was designed and how it works

### 🎯 Main Idea

To build a realistic pet adoption platform using a modern decoupled architecture (frontend + backend), simulating a production-level environment.

The application allows any user to browse available pets, while only registered users can publish pets and manage favorites.

---

## 🖥️ Frontend

Built with:

- TypeScript  
- React  
- TailwindCSS  
- React Query  

**React Query** was used for:

- Handling asynchronous requests
- Automatic caching
- Query invalidation
- Managing loading and error states

The UI was designed using TailwindCSS with a focus on:

- Clean and modern design
- Reusable components
- Full responsiveness (mobile-first approach)

---

## 🔐 Backend

Built with:

- Node.js  
- Express  
- Mongoose  
- MongoDB  
- JWT  
- bcrypt  

Features implemented:

- User registration and login
- Password hashing with bcrypt
- JWT token generation and validation
- Authentication middleware
- Protected private routes
- Relationship between users and published pets
- Favorite system linked to users

The backend is deployed on Render and the database is hosted in MongoDB Atlas.

---

## 🧠 Application Logic

- Pets can be viewed without authentication.
- Publishing a pet requires login.
- Each pet is associated with its creator (user).
- Users can add or remove pets from their favorites list.
- Contact information allows direct communication with the publisher.
- The frontend manages authentication state using JWT.
- Passwords are never stored in plain text.

---

## 📱 Responsiveness

The application is fully responsive and works on:

- 📱 Mobile devices  
- 💻 Desktop  
- 📲 Tablets  

---

## 🚀 Project Goals

This project was developed to:

- Strengthen TypeScript skills in a real-world environment.
- Implement secure authentication with JWT.
- Work with a decoupled frontend/backend architecture.
- Use React Query for professional async state management.
- Practice database modeling with Mongoose.
- Implement relationships between entities (users ↔ pets).
- Deploy a complete fullstack application to the cloud.
