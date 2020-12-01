import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Controls extends Component {
    // static propTypes = {
    //     increment: onIncrement,
    //     decrement: OnDecrement,
    // }

    render() {
        return (
            <div>
                <button type="button" 
                onClick={this.props.increment}>Increment</button>
                <button type="button" 
                onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}
