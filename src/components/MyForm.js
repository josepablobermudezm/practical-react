import React from "react";

export default class MyForm extends React.Component {
  state = {
    name: "juan",
    lastName: "Hernandez",
    rememberMe: false,
    title: "Mr.",
  };

  /*esta función funciona para todos los inputs porque obtenemos el nombre del evento que se genera, o sea, si es un textarea, input
  además de eso, usamos event.target.checked o event.target.value dependiendo de cuando sea necesario, eso lo sabemos ya que, revisamos
  si el tipo del evento que se generó es de tipo checkbox, básicamente es polimorfismo*/

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //previene que el formulario se refresque y pase los datos por el link
    console.log(this.state);
  };

  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">Formulario</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label>First Name:</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Lastname:</label>
              </div>
              <div className="col-75">
                <input
                 type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Title:</label>
              </div>
              <div className="col-75">
                <select
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                >
                  <option>Mr.</option>
                  <option>Miss.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Remember Me:</label>
              </div>
              <div className="col-75">
                <input
                  name="rememberMe"
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.rememberMe}
                ></input>
              </div>
            </div>

            <button className="buttonsubmit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="btn-group">
          <button onClick={this.props.handlePage}>Volver</button>
        </div>
      </div>
    );
  }
}
