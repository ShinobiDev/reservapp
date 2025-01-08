# API RESERVAPP

Esta es una API RESTful construida con **Node.js v22.12.0** y **NestJS 10.4.9** para la gestión de rutas en una aerolínea. Permite crear, leer, actualizar y eliminar rutas, así como gestionar la información de las ciudades involucradas en las rutas.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Ejemplos de Solicitudes](#ejemplos-de-solicitudes)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- CRUD completo para gestionar rutas de aerolínea.
- Implementación de validaciones a través de DTOs.
- Autenticación y autorización usando JWT.
- Soporte para operaciones de eliminación suave (soft delete).
- Documentación API usando Swagger.

## Tecnologías

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/) o cualquier otra base de datos soportada por TypeORM
- [Swagger](https://swagger.io/) para la documentación de la API

## Instalación

1. Clona el repositorio:

   ```bash
   $ git clone https://github.com/tu-usuario/aerolinea-rutas-api.git# reservapp
Api para la gestión de rutas de una aerolinea

2. Navega a la carpeta del proyecto:
   $ cd reservapp

3. Instala las dependencias:
   $ npm install

4. Inicia la aplicación:
   $ npm run start

## Documentación Swagger 
Al iniciar la aplicación en el navegador se puede revisar la documentación de los endPoint en la siguiente url:

http://localhost:3000/api

5. Al iniciar la aplicación se debe crear primero un usuario y despues hacer uso del login, para obtener un token el cual se configura en el parametro de Authorizacion, mediante un Bearer Token.
   
