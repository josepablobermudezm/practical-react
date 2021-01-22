import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    //inicia en 0
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    console.log("se montó el componente");
  }

  componentWillUnmount(){
    console.log("Se desmontará");
  }

  increment = () => {
    //es mejor utilizar esta forma para cambiar el valor de esta variable
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    //es mejor utilizar esta forma para cambiar el valor de esta variable
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    //this.props guarda el nombre de los parametros
    return (
      <div className="App-header">
        <h1 className="App-title">{this.props.title}</h1>
        <div className="divCounter">{this.state.count}</div>
        <div className="btn-group">
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
        <div className="btn-group">
          <button onClick={this.props.handlePage}>Volver</button>
        </div>
      </div>
    );
  }
}
