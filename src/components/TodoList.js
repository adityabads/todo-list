import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.input = "";
  }

  toggleTodo(id) {
    const todos = this.state.todos.slice();
    todos[id].completed = !todos[id].completed;
    this.setState({ todos });
  }

  render() {
    return (
      <>
        {/* This form grabs Todo text input */}
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.input.value.trim()) {
              return;
            }
            this.setState({
              todos: [
                ...this.state.todos,
                {
                  id: this.state.todos.length,
                  text: this.input.value,
                  completed: false
                }
              ]
            });
            this.input.value = "";
          }}
        >
          <input ref={node => (this.input = node)} />
          <button type="submit">Add Todo</button>
        </form>

        {/* This renders the actual todo list */}
        <ul>
          {this.state.todos.map(todo => (
            <Todo onClick={() => this.toggleTodo(todo.id)} {...todo} />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
