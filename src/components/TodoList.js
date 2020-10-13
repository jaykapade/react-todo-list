import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            ></TodoItem>
          );
        })}
        `
        {items.length === 0 && (
          <li className="list-group text-capitalize text-center text-muted">
            <h6>looks like there's nothing left to do!!</h6>
          </li>
        )}
        <button
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
