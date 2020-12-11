import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {};

  //     this.handleEvent = this.handleEvent.bind(this);
  //   }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.name !== this.state.name) {
      this.handler();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      console.log('aaaaa');
      this.props.onClose();
    }

    // this.props.onClose();
  };
  //   // Prototype methods, Bind in Constructor (ES2015)
  //   handleEvent() {}

  //   // Class Properties (Stage 3 Proposal)
  //   handler = () => {
  //     this.setState();
  //   };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
