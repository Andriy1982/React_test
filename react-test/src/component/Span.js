import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Span extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <span style={{ fontSize: '30px' }}>{this.props.value}</span>
        )
    }
}
