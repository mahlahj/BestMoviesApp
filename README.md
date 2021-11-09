# Movies App con React.

Tutorial para usar:

    -   Crea una carpeta con el nombre que quieras en el sitio de tu elección, preferentemente el escritorio.
    -   En terminal o línea de comandos, dirígete a la carpeta que creaste. ( _cd_ usualmente)
    -   Si no has utilizado React antes, ejecuta el siguiente comando: _npm install -g create-react-app_. (CRA)
    -   Si ya lo habías utilizado utiliza este: _create-react-app movies_ //movies es el nombre de la aplicación.
    -   Ahora escribe cd movies en tu terminal _npm start_ (Si no funciona intenta _yarn start_ ).
    -   Con la app creada debes copiar el contenido los documentos en este repositorio, que se encuentran en la carpeta src.
    -   En la carpeta src crea una subcarpeta llamada `components` y copia el contenido de _movie.js_.
    
 Y listo tienes la mejor aplicación de películas.
 ---
 Esta app tiene las siguientes funcionalidades:
    
    -   Llamadas o queries a la API de tmdb.
    -   Búsqueda de películas por nombre, personaje o actor.
    -   Sinopsis (en inglés) y datos de la película en general.

## Cosas de la API.

Destacadas: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1" \
Imágenes: "https://image.tmdb.org/t/p/w1280" \
Búsqueda: "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=" \
