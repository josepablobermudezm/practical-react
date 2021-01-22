import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //para que no se refresque
    this.props.addTodo({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    //limpiamos el text
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="container" style={{ border: "0px" }}>
        <form class="todo" onSubmit={this.handleSubmit}>
          <div className="row">
            <input
            type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Tarea"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
