import React, { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import createTask from './create-task';
import Filter from './Filter';
import Modal from './Modal/Modal';
import Layout from './Layout/Layout';
// import PropTypes from 'prop-types';

// const newTask = createTask()

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  componentWillUnmount() {}

  changeFilter = filter => {
    console.log(filter);
    this.setState({ filter });
  };

  getVisibleTasks = () => {
    const { tasks, filter } = this.state;
    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  addTask = text => {
    // const task = createTask();
    const task = {
      id: uuidv4(),
      text,
      completed: false,
    };
    // createTask();
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = taskId => {
    // console.log(taskId);
    //   console.log('delete Task');
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      };
    });
  };

  // updateCompleted = taskId => {
  //     this.setState(prevState => {
  //         return {
  //             tasks: prevState.tasks.map(task => {
  //                 if (task.id === taskId) {
  //                     return {
  //                         ...task,
  //                         completed: !task.completed,
  //                     }
  //                 }
  //                 return task;
  //             })
  //         }
  //     })
  // }

  updateCompleted = taskId => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { filter, tasks, showModal } = this.state;
    const visibleTasks = this.getVisibleTasks();
    return (
      <Layout>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello</h1>
            <p>Lorem 2002lkjsdfgh;ldfjkshglkjnklj</p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
        {/* <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleTasks.length > 0 && (
          <TaskList
            tasks={visibleTasks}
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
          />
        )} */}
      </Layout>
    );
  }
}
