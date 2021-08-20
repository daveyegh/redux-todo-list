import React, { useEffect, useState } from "react";
import {
  addTodo,
  removeTodo,
  markComplete,
  filterComplete,
  filterAll,
  filterActive,
} from "./redux/actions";
import { connect } from "react-redux";

import "./App.css";

function App({
  todos,
  filteredTodos,
  addTodo,
  removeTodo,
  markComplete,
  filterComplete,
  filterAll,
  filterActive,
}) {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify([]));
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value !== " ") {
      addTodo(e.target.value);
    } else if (e.target.value === "") {
      alert("text cannot be empty");
    }
  };

  return (
    <div className="App">
      <h2>todos</h2>
      <div className="add-todos">
        <input
          className="form-control"
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
      <div className="todos">
        {filteredTodos.length > 0 ? (
          filteredTodos?.map((item) => {
            return (
              <div
                className={`todo ${!item.markedComplete ? "" : "completed"}`}
                key={item.id}
              >
                <p>{item.title}</p>
                <div className="todo-buttons">
                  <button
                    onClick={() => removeTodo(item.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      markComplete(item);
                    }}
                    type="button"
                    className="btn btn-success"
                  >
                    Complete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>There is nothing here.</h1>
        )}
      </div>
      <div className="all-info">
        <h5 className="all-info-title">All Todos: {todos.length}</h5>
        <div className="all-info-filter">
          <button
            onClick={() => {
              filterAll(todos);
            }}
            className="btn btn-info"
          >
            All
          </button>
          <button
            onClick={() => {
              filterActive(todos);
            }}
            className="btn btn-info"
          >
            Active
          </button>
          <button
            onClick={() => {
              filterComplete(todos);
            }}
            className="btn btn-info"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filteredTodos: state.filteredTodos,
  };
};

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  markComplete,
  filterComplete,
  filterAll,
  filterActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
