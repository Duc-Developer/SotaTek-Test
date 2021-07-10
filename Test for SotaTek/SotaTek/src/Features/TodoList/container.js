import React from 'react';

import TodoListComponent from './component';
import TodoListServices from '../../Services/TodoList';

function TodoListContainer() {
    const handleCreate = (formData) => {
        createNewTask(formData);
    };
    const createNewTask = async (task) => {
        try {
            const response = await TodoListServices.createOrEditTask(task);
        } catch (err) {
            console.log(err);
        }
    };
    return <TodoListComponent handleCreate={handleCreate} />;
}

TodoListComponent.propTypes = {};

export default TodoListContainer;
