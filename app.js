const express = require('express');
const dotenv = require('dotenv');
const cowsay = require('cowsay');
const path = require('path');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Configuración de vistas
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware para parsear datos de formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Llamada a la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const pagesRoutes = require('./routes/pages.routes');

// Rutas paginas
app.use('/', pagesRoutes);

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Example app listening on port http://localhost:${port}`,
      f: "tux", // Use the tux ASCII art // tux
    })
  );
});