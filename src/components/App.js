import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Paint walls in sister's room",
        expirationDate: "2018-02-15",
        important: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Learn English",
        expirationDate: "2024-12-31",
        important: false,
        finishDate: null
      },
      {
        id: 2,
        text: "Start training",
        expirationDate: "2022-02-29",
        important: false,
        finishDate: false
      }
    ]
  };

  counter = 3;

  addTask = (text, expirationDate, important) => {
    const task = {
      id: this.counter,
      text,
      expirationDate,
      important,
      finishDate: null
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    this.counter++;
    return true;
  };

  doTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks[index].finishDate = new Date().getTime();
    this.setState({
      tasks
    });
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">To do app</h1>
        <AddTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} doTask={this.doTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
