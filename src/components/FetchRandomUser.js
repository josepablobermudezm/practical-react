import React from "react";
import update from "immutability-helper";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    this.setState({ people: data.results, loading: false });
  }

  /*usamos el immutability-helper para actualizar el array con 5 nuevos resultados de la API*/
  getUser = () => {
    fetch("https://api.randomuser.me/?results=5")
      .then((res) => res.json())
      .then((json) =>
        this.setState(
          update(
            this.state,
            { people: { $push: json.results } },
            { loading: false }
          )
        )
      );
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>No se obtuvo a una persona</div>;
    }

    /*otra forma de hacer esto es haciéndolo con un foreach, por ejemplo
     const peopleJSX = [];

     this.state.people.forEach(person => {
       peopleJSX.push(
         <div key={person.name.first + person.name.last}>
           <div>{person.name.title}</div>
           <div>{person.name.first}</div>
           <div>{person.name.last}</div>
           <img src={person.picture.large} />
         </div>
       );
     });

     entonces vamos haciendo un loop por cada una de las personas que están
     en "person" y guardando eso dentro de la variable peopleJSX
    */

    return (
      <div className="App-header">
        <h1 className="App-title">Usuario Random</h1>
        {this.state.people.map((person) => (
          <div key={person.login.uuid} className="container">
            {/* también podemos hacer esto con 
            key={`some-person-$ {i}`} como última opción si no tenemos un key único que pasar 
            entonces usamos el index del array
        */}
            <div className="row">
              <div className="col-25">
                <label>Nombre: </label>
              </div>
              <div className="col-25">
                <div>{person.name.first + " " + person.name.last}</div>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Foto de Perfil: </label>
              </div>
              <div className="col-25">
                <img src={person.picture.large} alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Genero: </label>
              </div>
              <div className="col-25">
                <div>{person.gender}</div>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Email: </label>
              </div>
              <div className="col-25">
                <div>{person.email}</div>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Localización: </label>
              </div>
              <div className="col-25">
                <div>
                  {person.location.city + ", " + person.location.country}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Contacto: </label>
              </div>
              <div className="col-25">
                <div>{person.phone}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="btn-group">
          <button onClick={this.getUser}>+</button>
        </div>
        <div className="btn-group">
          <button onClick={this.props.handlePage}>Volver</button>
        </div>
      </div>
    );
  }
}
