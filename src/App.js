import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v1 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "brush teeth" },
      { id: 3, title: "make breakfast" },
    ],
    id: uuid(),
    title: "",
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("Handle Change");
  };
  handleSubmit = (e) => {
    console.log("Handle Submit");
  };
  handleEdit = (id) => {
    console.log(`Handle edit : ${id}`);
  };
  handleDelete = (id) => {
    console.log(`Handle edit : ${id}`);
  };
  clearList = (e) => {
    console.log("Clear List");
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">To do Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
