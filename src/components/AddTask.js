import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    taskName: "",
    priority: false,
    date: new Date().toISOString().slice(0, 10)
  };

  handleChange = e => {
    if (e.target.type === "text") {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else if (e.target.type === "date") {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleClick = e => {
    e.preventDefault();
    const { taskName, priority, date } = this.state;
    if (taskName) {
      const add = this.props.addTask(taskName, date, priority);
      if (add) {
        this.setState({
          taskName: "",
          priority: false,
          date: new Date().toISOString().slice(0, 10)
        });
      }
    }
  };

  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    return (
      <div className="addTask">
        <form className="addTask__form" onSubmit={this.handleClick}>
          <input className="addTask__form--task input" type="text" name="taskName" placeholder="Add task" value={this.state.taskName} onChange={this.handleChange} />
          <label>
            <input className="addTask__form--checkbox" type="checkbox" name="priority" checked={this.state.priority} onChange={this.handleChange} />
            Priority
          </label>
          <p className="addTask__form--date">
            Do before
            <input className="addTask__form--date input" type="date" name="date" value={this.state.date} min={minDate} onChange={this.handleChange} />
          </p>
          <button className="addTask__form--submit btn">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
