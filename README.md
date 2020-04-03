# EXAMEN-HACKATON

---
## INSTRUCCIONES

RECONSTRUIR MODULOS DE NODE
```
npm intall  
```

LEVANTAR SERVIDOR CON CUALQUIERA DE ESTOS DOS COMANDOS
```
nodemon dist/
node dist/
```
---
### **NOTAS**


- Importante no alcance hacer documentacion asi que las rutas de la aplicación son las siguietes:

    -   http://localhost:4000/api/equipos (GET) - Retorna los equipos en la base de datos junto con sus integrantes.

    - http://localhost:4000/api/equipos (POST) - Retorna el equipo guardado en la base de datos **Esta ruta require de todos los datos del equipo eniador por un formulario enviados en un x-www-form-urlencoded**.

    - http://localhost:4000/api/equipo/:id (GET) - Retorna el equipo asignado con la id enviada.

    - http://localhost:4000/api/equipo/:id (PUT) - Retorna el equipo actualizado en la base de datos **Esta ruta require de todos los datos del equipo enviados por un formulario enviados en un x-www-form-urlencoded**.

    - http://localhost:4000/api/equipo/:id (DELETE) - Retorna el equipo eliminado en la base de datos **Esta ruta require de todos los datos del equipo enviados por un formulario enviados en un x-www-form-urlencoded**.

    - http://localhost:4000/api/integrante/equipo/:equipoId (POST) - Retorna el integrante agregado al equipo en la base de datos **Esta ruta require de todos los datos del integrante enviados por un formulario enviados en un x-www-form-urlencoded**.
