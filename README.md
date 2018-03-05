# Grace Hopper con React
Réplica de la página [Grace Hopper](https://es.wikipedia.org/wiki/Grace_Murray_Hopper) desarrollado con React.

## Componentes

### Header.js
El componente contiene el título de la página. En él encontramos las siguientes etiquetas: `header`, `h1` y `hr`.

### Main.js
El componente envuelve el contenido de la página en la etiqueta `main`.

### Aside.js
El componente contiene la tabla bibliográfica. El contenido está envuelto por la etiqueta `aside`.

### App.js
Este componente está compuesto por los 3 componentes mencionados anteriormente. Para lograr la composición es necesario importar los componentes.
~~~js
  import Header from './components/Header';
  import Main from './components/Main';
  import Aside from './components/Aside';
~~~