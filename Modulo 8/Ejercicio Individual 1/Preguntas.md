# EJERCICIO INDIVIDUAL ABP - AE1

## Describir las características principales de una arquitectura REST distinguiendo buenas prácticas para el diseño de una API REST para la interoperación de sistemas

### 1. Responde las siguientes preguntas con lo aprendido

---

#### ¿Podremos con Express hacer todo lo que hemos hecho con NodeJS en los módulos anteriores?

- **Respuesta esperada:** Si, ya que Express es un framework de Node.js que nos permite crear aplicaciones web en Node de una manera mucho más sencilla y limpia.

---

#### ¿Te parece que el desarrollo de un servidor con Express tiene un código más limpio y cómodo de escribir que con Node puro con el módulo http?

- **Respuesta esperada:** Si, porque Express es un framework escrito sobre el módulo http de Node.js, lo que genera que el código sea mas comodo de escribir, ya que las funciones del framework estan destinadas a generar una aplicación.

---

### 2.- Desarrollar un servidor con Express que disponibilice una ruta GET /QuienSoy que al ser consultada devuelva un string con tu nombre

- **Respuesta esperada:**

```javascript
const express = require('express');

// Configs
const PORT = 3000;

// App
const app = express();

// Routes
app.get('/QuienSoy', (req, res) => {
 res.send('Mi nombre es: Diego Ignacio Arancibia Maluenda');
});

// Server
app.listen(PORT, () => {
 console.log(`Example app listening at http://localhost:${PORT}`);
});
```
