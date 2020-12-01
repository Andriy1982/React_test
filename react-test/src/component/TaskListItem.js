import React from 'react';

const TaskListItem = ({text, onRemove, completed, onUpdate}) => (
    <li>
    <p>{text}</p>
    <input 
    type="checkbox" 
    checked = {completed}
    onChange = {onUpdate}
    />
    <section>
      <button type="button" onClick = {onRemove}>Удалить</button>
    </section>
  </li>
);

export default TaskListItem;