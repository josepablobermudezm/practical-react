import logo from "../logo.svg";
import React from "react";
// import { Body } from "../components/Body";

export class Header extends React.Component {

  render() {
    //this.props guarda el nombre de los parametros
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        {/* <div> {this.props.num}</div>
        <div> {this.props.Objeto.a}</div>
        <div> {this.props.Objeto.b}</div>
        <div> {JSON.stringify(this.props.Objeto)}</div>
        <div>{this.props.Array[0]}</div>
        <div>{this.props.myFunc(10, 12)}</div> */}
        {/* <Body text="this is cool" text2=" and that's cool too" /> */}
        <div className="btn-group">
          <button name="Imagenes" onClick={this.props.handlePage}>Imagenes</button>
          <button name="Formulario" onClick={this.props.handlePage}>
            Formulario
          </button>
          <button name="Contador" onClick={this.props.handlePage}>Contador</button>
          <button name="Validacion" onClick={this.props.handlePage}>
            Formulario de Validación
          </button>
          <button name="RandomUser" onClick={this.props.handlePage}>
            Usuario Random
          </button>
          <button name="TodoList" onClick={this.props.handlePage}>
            To-do List
          </button>
        </div>
      </header>
    );
  }
}
