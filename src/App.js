import React, {Component } from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry';
import TodoItems from './components/TodoItems';
import TodoBar from "./components/TodoBar";

class App extends Component{
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry/>
        <TodoItems/>
        <TodoBar />
        
      </div>
     );
   }
 }


export default App;
