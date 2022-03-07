## API WISH LIST
Esta es una API que consulta una base de datos postgresql por medio de sequelize. Tiene la opción de listar productos, agregar a una lista de desos que luego podrá ser ser consultada, modificada y eliminada

## Instalacion
Ejecute los siguientes comandos 

```
$ git clone https://github.com/JnGzn/wish-list-service.git
$ npm i
```

## Despliegue
Ejecute el siguiente comando. 
```
$ npm run dev
```

*Se ejecuta el servidor en ```http://localhost:3001/ ``` en el ambiente de desarrollo y queda auditando los cambios para que se vuelva a levantar automaticamente

## Pruebas unitarias

Ejecute el siguiente comando para iniciar las prubas con [Jest](https://jestjs.io/)
```
$ npm run test
```

## Variables de entorno
En [.env](.env) puede modificar los siguiente datos
```
ERVER_PORT (puerto en que se va a ejecutar el servidor)
BASEDATOS_HOST (host donde se encuentra la Bd)
BASEDATOS_PORT (puerto donde se encuentra la Bd)
NOMBRE_BD (nombre la Bd)
BASEDATOS_USER  (usuario de conexion para la Bd)
BASEDATOS_PASSW (contraseña de conexion para la Bd)
```


