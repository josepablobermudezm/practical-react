import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValidationForm extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "CheckBox";

    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "El correo no tiene @";
    }

    if (!this.state.email) {
      emailError = "El correo no puede estar vacío";
    }

    if (!this.state.name) {
      nameError = "El nombre no puede estar vacío";
    }

    if (!this.state.password) {
      passwordError = "La contraseña no puede estar vacía";
    }

    if (nameError || emailError || passwordError) {
      // si hay algún error seteamos ese error en las variables, aparecen en los divs y hacemos falsa la validación
      this.setState({ emailError, passwordError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      //limpiamos el formulario
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">Formulario</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label>Nombre:</label>
              </div>
              <div className="col-75">
                <input
                  placeholder="Nombre"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
                <div className="error">{this.state.nameError}</div>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Correo:</label>
              </div>
              <div className="col-75">
                <input
                  placeholder="Correo"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
                <div className="error">{this.state.emailError}</div>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Contraseña:</label>
              </div>
              <div className="col-75">
                <input
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                ></input>
                <div className="error">{this.state.passwordError}</div>
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
