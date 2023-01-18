# nestjs
Framework de node.js con abstracciones 
ofrece patrones
Solid
typescript 
oriendo a objetos 
programcion funcional
# Instalar nest
npm i -g @nestjs/cli

# Crear proyecto en nest
nest new platzi-store

ingresar a la carpeta credada en este caso platzi-store y correr el comando 
npm run start

abre el navegador en el puerto 3000 y aparece un helow word.

# correr el proyecto y q al hacer algun cambio lo tome automaticamente 
npm run start:dev

# crear controllers
nest g controller products

# crear servicios
nest g s services/product --flat

# crear pipes
nest g pipe common/parse-int

# intalar las validaciones 
npm i class-validator class-transformer

# para reutilizar codigo 
npm i @nestjs/mapped-types

# validacion de campos q no se tienen en la validacion de los dtos
para validar q no envien datos q no esten dentro del dto se ingresan estas propiedades en el archivo main
app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
whitelist= sirve para no tener encuenta los campos q no estan validados 
forbidNonWhitelisted = sirve para no dejar pasar la peticion y emitir un mensaje de error 