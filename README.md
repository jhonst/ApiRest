# Ejercicio-fullstack-mobile
### Ejercicio #1 - ApiRest

###Descripcion:

Este proyecto consiste en una ApiRest de consulta, donde se podran ver todos los hoteles de una base de datos o bien destallar los datos de uno solo

###Tecnologias usadas:

-Express
-Morgan
-Mongoose
-Path

###Despliegue:

1 - descargue el proyecto y abra una terminal desde esa ubicacion.

2 - Ejecute el comando "npm run dev" o "node src/index.js"

3 - Puede probar que la api esta funcionando ejecutando desde un navegador su navegador la siguiente ruta "http://localhost:3000/api/prueba"


###Modo de uso:

Una vez desplegado el proyecto podra hacer uso de el.
El api cuenta con dos funciones principales a las cuales ambas se acceden mediante GET y devuelven una respuesta tipo JSON


--------------------------------------------------------------------------------------------------------------------------------------------
Listar todos los hoteles:

Ruta:		http://localhost:3000/api/hotelesL/
Descripcion:	Por medio de esta ruta se listaran todos los hoteles registrados en la Base de datos
--------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------
Listar un hotel es especifico:

Ruta:		http://localhost:3000/api/hotelesL/5e10a35b2e545454ccf7540b
Descripcion:	"5e10a35b2e545454ccf7540b" es el id de un hotel en especifico, puede consultar los id listando todos los hoteles con la ruta anterior
---------------------------------------------------------------------------------------------------------------------------------------------


Nota: es posible que tenga que cambiar "localhost" por la IP de su equipo


###Aclaraciones importantes:

- Para mayor facilidad este proyecto se encuentra vinculado a una base de datos alojada en la nube gracias a la plataforma Mlab

- Este mismo proyecto se encuentra desplegado en la plataforma de Heroku, por que no es necesario desplegarlo localmente para que la aplicacion en react-native funcione.


