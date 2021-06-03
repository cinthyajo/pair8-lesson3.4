import "../stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hola Mundo</p>
      </header>
    </div>
  );
}
export default App;
// con command P y te saca la consola de comandos, pero antes instalar React pure to class. Hacer un componente funcional a uno de clase: A un componente de clase siempre un render un constructor y exportar la clase e importar react (import React from "react").
//En un componente de clase, el constructor construye el componente. muchas veces construimos un componente base que es el padre y luego de agregamos variables que son estados y eventos. En un componente funcional no se declara constructor.
//Debugger: en devtools aparecen 2 pestañas: components and profilter.

//EJERCICIO 1
//Vamos a crear un nuevo proyecto de React llamado mediacard. Vamos a maquetar esta tarjeta dentro del componente App.js para que tenga un diseño lo más parecido posible al de la imagen. Podéis usar una imagen a vuestra elección en lugar de la que aparece en el diseño, y Font-Awesome para el icono del corazón. De esta forma, aprenderemos a cómo trabajar con cosas que ya conocemos (HTML y CSS) en una aplicación de React.
//

//Lección 3.4 eventos: del ejercicio le agrego un evento al botón input: evento onchange y dentro de mi JSX le digo lo que quiero (función manejadora handleInput: onChange={handleInput} para declarar la función dentro de mi clase => handleInput(ev){ console.log('Han cambiado los valores del input, ev.target.value, 'con el evento es')}, luego en mi constructor: this.handleInput=this.handleInput.bind(this); constructor en componente de clase: se encarga de especificar cómo se va a crear mi componente la 1 vez: sus valores inicials != componente de función que ya lo tiene con export. Un super hereda todas las propiedades del componente padre.
//Las funciones dentro de un class {} no llevan function ni const. Dentro de una class las funciones quedan así (como las pone Yanelis)
//A las funciones dentro de una class se les suele llamar métodos
//A las variables dentro de una class (que son de toda la class) se les suele llamar atributos
//this es sólo para cuando estoy dentro de mi clase. Hace referencia al objeto de la clase.
//si creo la función fuera d la clase no necesito el this
//forceupdate solo afecta al mismo componente y a sus hijos
//cuando un componente padre acftualiza sus estados/propiedades y le doy un forceupdate entonces sus componentes hijos tbn lo cambian
//Las propiedades de la App.js se bajan a las hijas con las props.

class App {
  funcion1() {}
  funcion2(param) {}
}

class App extends Component {
  render() {
    const card_title = (
      <div className="card__title">
        <img
          src="https://doggiedesigner.com/wp-content/uploads/2020/07/Miniature-Schnauzer-triple-black.jpg"
          className="card__picture"
          alt="picture"
        />
        <div>
          <h2 className="card__topic">Cute Black Dogs</h2>

          <p className="card__date">Lunes 31 de mayo de 2021</p>
        </div>
      </div>
    );

    const card_text = (
      <p className="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam
        felis, imperdiet eget semper nec, aliquet at ligula. Sed fermentum nunc
        vitae lacus tincidunt, eu dignissim sapien imperdiet.
      </p>
    );

    const card_info = (
      <div>
        <div className="card__info">
          <p className="card_read-info">Leer más...</p>
        </div>
        <div>
          <span className="card_number-numbers">37</span>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}

//Lección 3: Ejercicio en clase: Cuando comienzo a trabajar con mis variables debo decidir cómo voy a pintar mi componente. Podemos ir pintando todos los <li> ahí directamente, pero mejor es crear un componente item que retornaré ahí.
//para pintar los items, tengo que import iTEM FROM "./Item"; Para pintar c/item tengo que recorrer mi listado con función map(me devuelve el resultado de recorrer todos los items y hacer una operación con cada item). Dentro del map pongo todo lo quequiero recorrer.
//Quiero quedarme con los items cuya cantidad=2, entonces usar filter. Crear una const result donde pondré mis resultados. El resultado lo muestro al llamar a la constante, en mi<ul> pongo la variable {result}.
