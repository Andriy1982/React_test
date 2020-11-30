import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import  createTask from './create-task'
import TaskListItem from './TaskListItem'

// export default class Tasklist extends Component {
//     static propTypes = {
//         tasks: [],
//     }
//     state = {
//         tasks: []
//     }

//     render() {
//         console.log(this.state);
//         return (
            
//             <ul>
//                {this.props.tasks.map(task => {<li>{task}</li>})} 
//             </ul>
//         )
//     }
// }


export default function Tasklist({ tasks, onRemoveTask, onUpdateTask }) {
  return (
    <ul>
      {tasks.map(({id, text, completed}) => (
        <TaskListItem
          key = {id}
          text = {text}
          completed = {completed}
          onRemove = {() => onRemoveTask(id)}
          onUpdate = {() => onUpdateTask(id)}
        />
      ))}
    </ul>
  );
}
