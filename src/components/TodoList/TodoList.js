import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "Todos",
    toggleAllComplete: true,
  };

  addTodo = (todo) => {
    //agregue un todo al inicio del array y después copie el array de nuevo dentro de este array
    this.setState((state) => ({
      todos: [todo, ...this.state.todos],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          //actualizamos
          return {
            ...todo, //mantiene la primera parte del todo
            complete: !todo.complete, // cambia el complete
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  //setState de esa forma es asincrónico entonces la mejor forma es usando el (state) => () así lo obtenemos sincrónicamente
  toggleAll = () => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => ({
        ...todo,
        complete: state.toggleAllComplete,
      })),
      toggleAllComplete: !state.toggleAllComplete,
    }));
  };

  render() {
    let todos = [];
    if (this.state.todoToShow === "Todos") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "Activos") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "Completos") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="App-header">
        <h1 className="App-title">Lista de quehaceres</h1>
        <TodoForm addTodo={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            handleDeleteTodo={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Tareas a realizar:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}{" "}
        </div>
        <div className="btn-group">
          <button onClick={() => this.updateTodoToShow("Todos")}>Todos</button>
          <button onClick={() => this.updateTodoToShow("Activos")}>
            Activos
          </button>
          <button onClick={() => this.updateTodoToShow("Completos")}>
            Completos
          </button>
          {this.state.todos.some((todo) => todo.complete) ? (
            <button onClick={this.removeAllTodosThatAreComplete}>
              Eliminar Tareas Completas
            </button>
          ) : null}
          <div>
            <button onClick={this.toggleAll}>
              Cambiar todas: {`${this.state.toggleAllComplete}`}
            </button>
          </div>
        </div>

        <div className="btn-group">
          <button onClick={this.props.handlePage}>Volver</button>
        </div>
      </div>
    );
  }
}
