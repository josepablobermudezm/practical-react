import React, { Component } from "react";

import "./App.css";

import { Header } from "./components/Header";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSilder";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    paginaActual: "Principal",
  };
  //ejemplo de función
  add(a, b) {
    return a + b;
  }

  handlePage = (event) => {
    if (this.state.paginaActual == "Principal") {
      this.setState({
        paginaActual: event.target.name,
      });
    } else {
      this.setState({
        paginaActual: "Principal",
      });
    }
    //es asincrónico entonces el valor no se va a actualizar inmediatamente
  };

  render() {
    return (
      <div>
        <div
          className="App"
          style={
            this.state.paginaActual === "Imagenes" ? {} : { display: "none" }
          }
        >
          <ImageSlider handlePage={this.handlePage} />
        </div>

        <div
          className="App"
          style={
            this.state.paginaActual === "Formulario" ? {} : { display: "none" }
          }
        >
          <MyForm handlePage={this.handlePage} />
        </div>

        <div
          className="App"
          style={
            this.state.paginaActual === "Contador" ? {} : { display: "none" }
          }
        >
          <Counter
            title="Counter"
            handlePage={this.handlePage}
          />
        </div>

        <div
          className="App"
          style={
            this.state.paginaActual === "Validacion" ? {} : { display: "none" }
          }
        >
          <ValidationForm handlePage={this.handlePage} />
        </div>

        <div
          className="App"
          style={
            this.state.paginaActual === "RandomUser" ? {} : { display: "none" }
          }
        >
          <FetchRandomUser handlePage={this.handlePage} />
        </div>

        <div
          className="App"
          style={
            this.state.paginaActual === "TodoList" ? {} : { display: "none" }
          }
        >
          <TodoList handlePage={this.handlePage} />
        </div>

        <div
          className="App"
          style={
            this.state.paginaActual === "Principal" ? {} : { display: "none" }
          }
        >
          <div>
            <Header
              // myFunc={(a, b) => a + b}
              title="Bienvenidos a mi ruta de aprendizaje"
              // num={5}
              // Objeto={{
              //   a: 5,
              //   b: 6,
              // }}
              // Array={[1, 2, 3]}
              handlePage={this.handlePage}
              paginaActual={this.state.paginaActual}
            />
          </div>

          


        </div>
      </div>
    );
  }
}

export default App;
