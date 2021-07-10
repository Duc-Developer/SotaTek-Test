import React from 'react';

import TodoListServices from '../../../../Services/TodoList';

import TaskComponent from './component';

function TaskContainer(props) {
    const handleUpdate = async (task) => {
        try {
            const response = await TodoListServices.createOrEditTask(task);
        } catch (err) {
            console.log(err);
        }
    };

    const handleRemove = async (taskId) => {
        try {
            const response = await TodoListServices.deleteTaskWithId([taskId]);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <TaskComponent
            {...props}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
        />
    );
}

TaskContainer.propTypes = {};

export default TaskContainer;
