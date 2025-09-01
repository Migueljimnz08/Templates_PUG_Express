# 🎬 Movie Genie

Movie Genie es una aplicación web sencilla que permite **buscar películas** utilizando la [OMDb API](http://www.omdbapi.com/).
Está desarrollada con **Node.js, Express y Pug** como motor de plantillas y CSS **mobile-first**.

---

## 📌 Funcionalidades

* Buscar películas por **título**.
* Mostrar **título, año, director, póster y sinopsis**.
* Diseño **responsive** (mobile-first).
* Vistas con **Pug**.
* Backend **Express** que consume la API externa.

---

## 🛠️ Tecnologías

* **Node.js** + **Express**
* **Pug** (templating)
* **CSS3** (mobile-first)
* **OMDb API**
* **dotenv** (variables de entorno)
* **cowsay** 🐧 (mensaje divertido en consola)

---

## ✅ Requisitos

* **Node.js 18+** (recomendado, incluye `fetch` nativo).
  Si usas Node < 18, instala `node-fetch`.

---

## ⚙️ Instalación y uso

```bash
git clone https://github.com/Migueljimnz08/Templates_PUG_Express.git
cd movie-genie
npm install
```

Crea un archivo **`.env`** en la raíz:

```env
API_KEY=tu_api_key_de_omdb
PORT=3000
```

Inicia el servidor:

```bash
npm start
```

Abre en el navegador:
`http://localhost:3000`

---

## 📂 Estructura del proyecto

```
├── public/           # Archivos estáticos (CSS, JS, imágenes)
│   └── css/
├── routes/           # Rutas de Express
│   └── pages.routes.js
├── utils/            # Lógica de servicios (fetch a OMDb)
│   └── fetchFilm.js
├── views/            # Vistas Pug
│   ├── layout.pug
│   ├── home.pug
│   └── film.pug
├── app.js            # Config principal de Express
├── .env              # Variables de entorno (no subir a git)
├── package.json
└── README.md
```

---

## 🧭 Rutas principales

* `GET /` → Página de búsqueda.
* `POST /film` → Recibe el título del formulario y redirige a `/film/:title`.
* `GET /film/:title` → Llama a OMDb y renderiza la vista con los datos.

---

## 🔌 Variables de entorno

* `API_KEY`: tu API key de OMDb.
* `PORT` (opcional): puerto del servidor (por defecto 3000).

---

## 🌟 Futuras mejoras

* Guardar **favoritas** en base de datos.
* **Autenticación** de usuarios.
* Búsqueda por **actor/director**.
* **Dark mode** y pequeñas animaciones.

---

## ✨ Autor

Creado por **Miguel Ángel Jiménez Morante** como proyecto de práctica de bootcamp (Full Stack Developer). 🚀
