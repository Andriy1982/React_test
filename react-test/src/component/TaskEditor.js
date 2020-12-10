// import { Component } from "react"
import React, { Component } from 'react';

export default class Taskeditor extends Component {
  state = {
    text: '',
  };
  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submit');
    if (!this.state.text) return;

    this.props.onAddTask(this.state.text);

    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Create notification</button>
      </form>
    );
  }
}

{
  /* <div>
<button type="button" onClick = {onAddTask}>Add Task</button>      
  </div> */
}
