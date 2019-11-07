import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.input = "";
  }

  toggleTodo(id) {
    this.props.dispatch(toggleTodo(id));
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
            this.props.dispatch(addTodo(this.input.value));
            this.input.value = "";
          }}
        >
          <input ref={node => (this.input = node)} />
          <button type="submit">Add Todo</button>
        </form>

        {/* This renders the actual todo list */}
        <ul>
          {this.props.todos.map(todo => (
            <Todo onClick={() => this.toggleTodo(todo.id)} {...todo} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
