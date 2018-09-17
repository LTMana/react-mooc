import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./styles.css";
export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["学习英文", "学习react"]
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleBtnClick(e) {
    this.setState(preState => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ""
    }));
  }
  handleItemDelete(index) {
    this.setState(preState => {
      const list = [...preState.list];
      list.splice(index, 1);
      return { list };
    });
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          deleteItem={this.handleItemDelete}
          index={index}
          content={item}
        />
      );
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入：</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
}
