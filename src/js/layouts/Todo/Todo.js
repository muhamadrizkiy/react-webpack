/**
 * Created by Muhamad Rizki on 15/8/2017.
 */
import React from 'react';
import AddTodo from '../../componens/Todo/AddTodo.js';
import VisibleTodoList from '../../componens/Todo/VisibleTodoList.js';
import Footer from '../../componens/Todo/FilterLink.js';
export default class Todo extends React.Component {
    render() {
        return (
            <div className="starter-template">
                <AddTodo />
                <VisibleTodoList />
                <Footer/>
            </div>
        );
    }
}