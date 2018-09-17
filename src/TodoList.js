import React, { Component, Fragment } from "react";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div>
          <input />
          <button>提交</button>
        </div>
        <ul>
          <li>学习英文</li>
          <li>学习语文</li>
        </ul>
      </Fragment>
    );
  }
}
