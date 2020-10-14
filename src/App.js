import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v1 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    title: "",
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    //console.log("Handle Change");
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    //console.log("Handle Submit");
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  handleEdit = (id) => {
    //console.log(`Handle edit : ${id}`);
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  handleDelete = (id) => {
    //console.log(`Handle Delete : ${id}`);
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  };
  clearList = (e) => {
    //console.log("Clear List");
    this.setState({ items: [] });
  };

  render() {
    //console.log(this.state);
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
