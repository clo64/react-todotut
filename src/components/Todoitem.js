import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
            return {
                background: '#f4f4f4',
                padding: '10',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through' : 'non'
                   }
         }
    render() {
        return (
            <div style = {this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default Todoitem
