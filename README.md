# 📚 API de Gestión de Usuarios con NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Un framework progresivo para construir aplicaciones del lado del servidor eficientes y escalables con <a href="http://nodejs.org" target="_blank">Node.js</a>.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

## 🚀 **Descripción del proyecto**

Este proyecto es una API RESTful construida con **NestJS**, que permite realizar operaciones CRUD sobre usuarios. Incluye:

- 🔎 **Encontrar todos los usuarios**: Obtiene una lista completa de usuarios.
- 🔍 **Encontrar un usuario específico**: Recupera los detalles de un usuario por su `id`.
- 📝 **Crear un usuario**: Añade un nuevo usuario a la base de datos.
- 🔄 **Modificar un usuario**: Actualiza la información de un usuario existente.
- 🗑 **Remover un usuario (Eliminación física)**: Elimina un usuario de la base de datos de forma permanente.
- ✅ **Configuración de DTO**: Validación de datos recibidos para garantizar integridad y formato.

📌 *Basado en el contenido del canal de YouTube:* [Informática DP](https://www.youtube.com/@informaticadp)

---

## ⚡ **Configuración del proyecto**

### 🔧 **Instalación**

```bash
npm install
```

### 🚀 **Ejecutar el proyecto**

```bash
# desarrollo
npm run start

# modo observación
npm run start:dev

# producción
npm run start:prod
```

### 🧪 **Pruebas**

```bash
# pruebas unitarias
npm run test

# pruebas e2e
npm run test:e2e

# cobertura de pruebas
npm run test:cov
```


### 🛠️ **Colección de postman**

```bash
# El proyecto cuenta con una carpeta con la colección de postman para pruebas
```


### 🌐 **Variables de entorno (.env)**

```dotenv
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=tu_base_de_datos
PORT=3000
```

---

## 🌐 **Rutas de la API**

- `GET /users` → Obtener todos los usuarios.
- `GET /users/:id` → Obtener un usuario específico.
- `POST /users` → Crear un nuevo usuario.
- `PATCH /users/:id` → Actualizar un usuario.
- `DELETE /users/:id` → Eliminar un usuario.

---

## 🌍 **Recursos útiles**

- 📖 [Documentación oficial de NestJS](https://docs.nestjs.com)
- 💬 [Canal de Discord de NestJS](https://discord.gg/G7Qnnhy)
- 🎥 [Cursos oficiales](https://courses.nestjs.com/)

---

## 📝 **Licencia**

Este proyecto está distribuido bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.

💡 **¡Gracias por visitar este proyecto!** 🚀✨

  