# EJERCICIO INDIVIDUAL ABP - AE1

## Describir las características fundamentales del entoro Node.js y su utilidad para el desarrollo de aplicaciones web

### 1. Responde las siguientes preguntas y suba sus respuestas a la plataforma

---

#### ¿Node debería ser una alternativa a considear si necesitara crear una aplicación que se ejecute en diferentes plataformas?

- **Respuesta esperada:** Gracias a que Node.js es multiplataforma, es una alternativa a considerar para crear una aplicación que se ejecute en diferentes plataformas.

---

#### ¿Node debería ser una alternativa a considerar si necesitara disponibilizar los datos de una base de datos como una API REST?

- **Respuesta esperada:** Sí, ya que Node.js es un entorno de ejecución de JavaScript que permite a los desarrolladores crear aplicaciones web escalables y de alto rendimiento.

---

#### ¿Ocuparía Node para hacer cambios estéticos en mis sitios web?

- **Respueta esperada:** No, ya que Node.js es un entorno que se ejecuta en el servidor y no en el navegador, por lo que sirve para entregar datos, mas que para hacer cambios estéticos, a pesar de estar hecho con JavaScript, su funcion es totalmente distinta.

---

### 2. Desarrollar una aplicación en Node que cree un archivo llamado "Saludo.txt" y tenga como contenido el mensaje "Hola Mundo!". Justo luego de ser creado este archivo con el método WriteFile, imprime el contenido de este mismo dentro de su callback con el método readFile

Solución esperada:

```javascript
const fs = require('fs');

fs.writeFile('Saludo.txt', 'Hola Mundo!', (err) => {
 if (err) throw err;

 console.log('El archivo ha sido creado');

 fs.readFile('Saludo.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
 });
});
```

---
