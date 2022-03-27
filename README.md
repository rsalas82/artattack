# Art FavAttack

## Información

Aplicación para consultar las distintas obras de arte del The Cleveland Museum of Art. Permite filtrar por texto, consultar
diversos detalles de las distintas obras y marcarlas como favoritas para posteriormente revisarlas.

La autenticación está mockeada, no valida contra endpoint de usuarios. Para acceder, se pueden utilizar dos usuarios:
* rsalas / 12345
* pcastro / 12345

## Requisitos

* Node 16.x o superior.
* React 17.x

## Instalación

1. Clonar el proyecto.
2. Ejecutar el comando *npm i* en la carpeta del proyecto.
3. Lanzar la aplicación en modo desarrollo con el comando *npm start*
4. Acceder en el navegador web a la URL http://localhost:3000/

## Testing

Ejecutar el comando *npm test* para lanzar test en consola.

## Notas sobre el desarrollo

*Art FavAttack* es una single page application que ha sido desarrollada en React, utilizando la herramienta de empaquetado Create React App.
Para ello, se han implementado distintos componentes funcionales, gestionando el estado de la aplicación y el ciclo de vida de cada uno mediante el uso de los hooks *useState* y *useEffect*, y el estado global de la aplicación combinando *useContext* y Redux.

La aplicación está compuesta por 4 páginas principales:
1. *Login:* Pantalla de login donde se solicita al usuario un par nombre/password mediante un formulario.
2. *ArtworksSearchList:* Pantalla con el listado de obras de arte del museo, limitadas a 12 y con filtro de búsqueda por texto. Permite cargar más obras de arte, en tandas de 12.
3. *ArtworkDetails:* Pantalla que muestra los detalles de una obra de arte.
4. *MyFavArtworks* Pantalla que muestra las obras de arte marcadas como favoritas por el usuario.

Los datos de navegación se almacenan en el contexto *SearchContext* y los datos de login en el contexto *UserContext* mediante el uso del hook *useContext*.

La consulta de las obras de arte se realiza mediante la librería *axios*, a través de un *Custom Hook* que gestiona el listado de obras de arte y el estado de las llamadas al endpoint del museo.

Durante el desarrollo se han hecho uso de los siguientes patrones de diseño:
* Module Pattern: Para extrar funcionalidades y hacerlas reutilizables (https://www.patterns.dev/posts/module-pattern/)
* Provider Pattern: Para compartir datos entre componentes (https://www.patterns.dev/posts/provider-pattern/)
* Hooks Pattern: Uso de hooks y custom hooks | https://www.patterns.dev/posts/hooks-pattern/
* Container/presentational Pattern: Para reforzar la separación de la vista y la lógica de la aplicación | https://www.patterns.dev/posts/presentational-container-pattern/

## Puntos a mejorar

* Diseño: hacer que sea más atractivo para el usuario.
* Testing, tanto pruebas unitarias como pruebas de integración.
* Mejorar el uso attributos y etiquetas de accesibilidad HTML.
* Mejorar el responsive.
* Utilizar styled-components o CSS modules.
* Persistir el estado para recuperar las obras de arte favoritas de los usuarios.
