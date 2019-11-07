import React, { Component } from "react";
import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react";
@observer
class Deleting extends Component {
  constructor(props) {
      super(props)
    this.clear = this.clear.bind(this);
  }
  clear() {
    TodoStore.Clear();
      }
  render() {
    if (TodoStore.todosAll.filter(todo => todo.completed === true).length>0) {
      return (
        <a onClick={this.clear} className="clear-completed">
         Erase completed 
        </a>
      );
    } else {
      return null;
    }
  }
}
export default Deleting 