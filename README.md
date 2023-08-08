# Proyecto "CineApp"

![CineApp Logo](https://example.com/cineapp-logo.png)

CineApp es un proyecto de aplicación web que permite a los usuarios descubrir información sobre películas y series. La aplicación consume datos de una API de películas para proporcionar detalles sobre películas populares, próximos lanzamientos, detalles de películas específicas, reseñas y más. La interfaz de usuario moderna y fácil de usar permite a los usuarios navegar y explorar una amplia variedad de contenido cinematográfico.

## Características

- Visualización de películas populares y próximos lanzamientos.
- Detalles de películas, incluyendo sinopsis, reparto, clasificación, géneros, y más.
- Búsqueda de películas por título.
- Reseñas y calificaciones de películas proporcionadas por usuarios registrados.
- Creación de listas personalizadas de películas favoritas o para ver más tarde.
- Compartir películas a través de redes sociales y correo electrónico.

## Tecnologías Utilizadas

- React: Librería de JavaScript para construir interfaces de usuario interactivas.
- TypeScript: Para agregar tipado estático a JavaScript y mejorar el desarrollo.
- React Router: Para manejar la navegación y las rutas en la aplicación.
- Redux: Para administrar el estado global de la aplicación.
- Axios: Para realizar peticiones HTTP a la API de películas.
- Tailwind: Para estilizar los componentes de la aplicación.


## Capturas de Pantalla

![Captura de Pantalla 1](https://example.com/cineapp-screenshot-1.png)

![Captura de Pantalla 2](https://example.com/cineapp-screenshot-2.png)

## Instalación

1. Clona el repositorio de CineApp en tu máquina local:

```bash
git clone https://github.com/Ismaelnelro/cinepelis.git
```

Navega al directorio del proyecto:
```bash
cd cineapp
```
Instala las dependencias:
```bash
npm install
```
Crea un archivo .env en la raíz del proyecto y agrega tu clave de API de películas:
```bash
REACT_APP_API_KEY=YOUR_API_KEY
```
Puedes obtener una clave de API gratuita registrándote en themoviedb.org.
Inicia la aplicación:
```bash
npm start
```

La aplicación se ejecutará en modo de desarrollo en http://localhost:3000/.

Contribución
¡Gracias por considerar contribuir al proyecto! Si deseas enviar sugerencias, correcciones o nuevas características, por favor crea un "issue" en el repositorio y etiquétalo adecuadamente. También aceptamos pull requests.

Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

Contacto
Si tienes alguna pregunta o sugerencia, por favor contáctanos a través de nuestro correo electrónico: cineapp@example.com.

¡Disfruta explorando películas con CineApp! 🎬🍿


Recuerda reemplazar `https://example.com` con las URL reales de las imágenes de las capturas de pantalla y cualquier otra URL necesaria para el funcionamiento de tu proyecto. También, cambia `tu-usuario` en los enlaces del repositorio por tu nombre de usuario de GitHub. ¡Espero que te sea útil! Si tienes alguna otra pregunta o necesitas más ayuda, no dudes en preguntar. ¡Buena suerte con tu proyecto! 🚀


   1. tributos a colocar
https://www.themoviedb.org/about/logos-attribution

| Code | HTTP Status | Message                                                      |
| ---- | ----------- | ------------------------------------------------------------ |
| 1    | 200         | Success.                                                     |
| 2    | 501         | Invalid service: this service does not exist.               |
| 3    | 401         | Authentication failed: You do not have permissions to access the service. |
| 4    | 405         | Invalid format: This service doesn't exist in that format.  |
| 5    | 422         | Invalid parameters: Your request parameters are incorrect.  |
| 6    | 404         | Invalid id: The pre-requisite id is invalid or not found.   |
| 7    | 401         | Invalid API key: You must be granted a valid key.           |
| 8    | 403         | Duplicate entry: The data you tried to submit already exists. |
| 9    | 503         | Service offline: This service is temporarily offline, try again later. |
| 10   | 401         | Suspended API key: Access to your account has been suspended, contact TMDB. |
| 11   | 500         | Internal error: Something went wrong, contact TMDB.         |
| 12   | 201         | The item/record was updated successfully.                   |
| 13   | 200         | The item/record was deleted successfully.                   |
| 14   | 401         | Authentication failed.                                      |
| 15   | 500         | Failed.                                                      |
| 16   | 401         | Device denied.                                              |
| 17   | 401         | Session denied.                                             |
| 18   | 400         | Validation failed.                                          |
| 19   | 406         | Invalid accept header.                                      |
| 20   | 422         | Invalid date range: Should be a range no longer than 14 days. |
| 21   | 200         | Entry not found: The item you are trying to edit cannot be found. |
| 22   | 400         | Invalid page: Pages start at 1 and max at 500. They are expected to be an integer. |
| 23   | 400         | Invalid date: Format needs to be YYYY-MM-DD.               |
| 24   | 504         | Your request to the backend server timed out. Try again.   |
| 25   | 429         | Your request count (#) is over the allowed limit of (40).   |
| 26   | 400         | You must provide a username and password.                  |
| 27   | 400         | Too many append to response objects: The maximum number of remote calls is 20. |
| 28   | 400         | Invalid timezone: Please consult the documentation for a valid timezone. |
| 29   | 400         | You must confirm this action: Please provide a confirm=true parameter. |
| 30   | 401         | Invalid username and/or password: You did not provide a valid login. |
| 31   | 401         | Account disabled: Your account is no longer active. Contact TMDB if this is an error. |
| 32   | 401         | Email not verified: Your email address has not been verified. |
| 33   | 401         | Invalid request token: The request token is either expired or invalid. |
| 34   | 404         | The resource you requested could not be found.              |
| 35   | 401         | Invalid token.                                              |
| 36   | 401         | This token hasn't been granted write permission by the user. |
| 37   | 404         | The requested session could not be found.                  |
| 38   | 401         | You don't have permission to edit this resource.           |
| 39   | 401         | This resource is private.                                  |
| 40   | 200         | Nothing to update.                                         |
| 41   | 422         | This request token hasn't been approved by the user.       |
| 42   | 405         | This request method is not supported for this resource.    |
| 43   | 502         | Couldn't connect to the backend server.                    |
| 44   | 500         | The ID is invalid.                                         |
| 45   | 403         | This user has been suspended.                              |
| 46   | 503         | The API is undergoing maintenance. Try again later.        |
| 47   | 400         | The input is not valid.                                    |



Existen tres maneras de buscar una pelicula:
1.  /search : ingresas un string y se brindara el match mas cercano
2.  /discovery : Basado en filtros
3.  /find: Busqueda por Id




REFERENCIAS

https://www.themoviedb.org/movie/739405-operation-fortune-ruse-de-guerre