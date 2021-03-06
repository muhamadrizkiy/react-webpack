/**
 * Created by Muhamad Rizki on 15/8/2017.
 */
import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
    <tr>
        <td></td>
        <td
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
        {text}
        </td>
        <td></td>
    </tr>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo