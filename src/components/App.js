import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.variableDeTodaLaClase = "Holi";
    this.otraVariable = "";

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.variableDeTodaLaClase = ev.target.value;
    console.log("Funciona");
    this.forceUpdate(); // Solo para el 3/6/2021
  }

  render() {
    this.otraVariable = "Solo del render";
    return (
      <main>
        <form action="">
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
          />
        </form>

        <div>{this.variableDeTodaLaClase}</div>
      </main>
    );
  }
}

export default App;
