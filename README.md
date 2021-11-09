# Movies App con React.

## Tutorial para usar:

Crea una carpeta con el nombre que quieras en el sitio de tu elección, preferentemente el escritorio.

En terminal o línea de comandos, dirígete a la carpeta que creaste. ( `cd` usualmente)

Si no has utilizado React antes, ejecuta el siguiente comando: `npm install -g create-react-app`. (CRA)

Si ya lo habías utilizado utiliza este: `create-react-app movies` // _movies es el nombre de la aplicación_.

Ahora escribe `cd movies` en tu terminal y `npm start` (Si no funciona intenta `yarn start` ).

Con la app creada debes copiar el contenido los documentos en este repositorio, que se encuentran en la carpeta _src_.

En la carpeta src crea una subcarpeta llamada `components` y copia el contenido de `movie.js`.

Y listo tienes la mejor aplicación de películas.

---
# Para desplegar/deploy:

Contar con cuenta en heroku o netlify.

Iniciar sesión en la cuenta y acudir al _panel de control_.

Asegurarte estas en el directorio creado por react o habrá problemas para conectar.

Seleccionar `connect to github` y luego seleccionar el nombre/url del repositorio.

Hacer click en el botón `connect`, y esperar construya todo la plataforma.


---
Esta app, aparte de los hooks propios de React que se pueden leer en el código, tiene las siguientes funcionalidades:
    
    -   Llamadas o queries a la API de TMDB.
    -   Búsqueda de películas por nombre, personaje o actor.
    -   Sinopsis (en inglés) y datos de la película en general.

---
## Cosas de la API.

Créditos a [The MovieDB](https://www.themoviedb.org/) por la creación de todo. No olvides obtener una llave personal directamente de TMDB.

Destacadas: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

Imágenes: "https://image.tmdb.org/t/p/w1280"

Búsqueda: "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
