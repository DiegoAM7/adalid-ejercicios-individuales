# EJERCICIO INDIVIDUAL ABP - AE2

## Aplica procedimientos de Instalación y configuración de Node Express básico para el desarrollo de una aplicación web

### 1. Crear una aplicación que devuelva la fecha actual sumando 10 días y e el siguiente formato "dddd"

- **Respuesta esperada:**

```javascript
const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
 res.send(moment().add(10, 'days').format('dddd'));
});

app.listen(3000, () => {
 console.log('Servidor iniciado en el puerto 3000');
});
```

---

### 2. Construir una aplicación que use el paquete Yargs para la definición de una interfaz de línea de comandos

#### El objetivo será definir un comando "saludo" que reciba como argumento tu nombre y respuesda con un mensaje en consola saludadndo y deseando un excelente día, sigue los siguientes pasos

- **Paso 1:** Importar en una constante el paquete Yargs.

- **Paso 2:** Inicializar el método "command" para el paso de parámetros.

- **Paso 3:** Definir del comando con el primer parámetro el cual será "saludo".

- **Paso 4:** Definir la descripción del comando "saludo" como segundo parámetro del método "command".

- **Paso 5:** Definir el objeto para la configuración del constructor del comando.

- **Paso 6:** Declarar que se esperará recibir un argumento llamado "nombre".

- **Paso 7:** Definir la descripción de este argumento.

- **Paso 8:** Declarar que este argumento es requerido con un true en la propiedad “demand”.

- **Paso 9:** Declarar el alias del argumento nombre, el cual será “n”. Esto sirve para simplificar la delación de un argumento recortando su mención a solo 1 letra o siglas.

- **Paso 10:** Crear la función callback la cual recibe como parámetro el objeto args que contendrá los argumentos como propiedades. A su vez la función mandará un mensaje por consola saludando con el nombre recibido como argumento.

- **Paso 11:** Concatenar el método command con el método “help” y la propiedad argv.

Revisa que el desarrollo sea correcto ejecutando en la consola el siguiente comando:

``` bash
node index.js saludo --nombre=Jose
```notas

- **Respuesta esperada:**

```javascript
const yargs = require('yargs');

yargs
 .command(
 'saludo',
 'Saluda a la persona que le pases como argumento',
 {
  nombre: {
  describe: 'Nombre de la persona a saludar',
  demand: true,
  alias: 'n',
  },
 },
 (args) => {
  console.log(`Hola ${args.nombre}, que tengas un excelente día`);
 }
 )
 .help();

yargs.argv;
```
