import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://image.freepik.com/vector-gratis/papel-tapiz-tropical-colorido-espacio-vacio_23-2148805353.jpg",
      "https://image.freepik.com/vector-gratis/coleccion-trazos-pincel-tinta_52683-54057.jpg",
      "https://image.freepik.com/vector-gratis/fondo-plano-estilo-comic_23-2148808995.jpg",
      "https://image.freepik.com/foto-gratis/surtido-sushi-japones-tradicional-vista-superior_23-2148809934.jpg",
      "https://image.freepik.com/foto-gratis/fondo-azul-claro-abstracto-modelo-espacio-copia_23-2148802093.jpg"
    ],
    idx: 0,
  };

  handleNext = () => {
    if (this.state.idx < 4) {
      this.setState(
        {
          idx: this.state.idx + 1,
        },
        () => {
          console.log(this.state);
        }
      ); //es asincrónico entonces el indice no se va a actualizar inmediatamente, para eso usaríamos un recall function, así cada vez que cambia
      //podermos ver el cambio en tiempo real... sincrónicamente
    }
  };

  handlePrevious = () => {
    if (this.state.idx > 0) {
      this.setState(
        {
          idx: this.state.idx - 1,
        },
        () => {
          console.log(this.state);
        }
      ); //es asincrónico entonces el valor no se va a actualizar inmediatamente
    }
  };

  render() {
    return (
      <div className="App-header">
        <h1 className="Galería">Usuario Random</h1>
        <img
          style={{
            width: 500,
            heigh: 500,
          }}
          src={this.state.images[this.state.idx]}
          alt=""
        />
        <div className="btn-group">
          <button onClick={this.handlePrevious}>Anterior</button>
          <button onClick={this.handleNext}>Siguiente</button>
        </div>
        <div className="btn-group">
          <button onClick={this.props.handlePage}>Volver</button>
        </div>
      </div>
    );
  }
}
