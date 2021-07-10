import React from 'react';

import TodoListComponent from './component';
import TodoListServices from '../../Services/TodoList';
import { EVENTS } from '../../Utilities/Constants';
import { useDispatchEvent } from '../../Utilities/useHooks';

function TodoListContainer() {
    const [evRefreshTodoList, dispatchEventRefreshTodoList] = useDispatchEvent(
        EVENTS.REFRESH_TODO_LIST
    );
    const handleCreate = (formData) => {
        createNewTask(formData);
    };
    const createNewTask = async (task) => {
        try {
            const response = await TodoListServices.createOrEditTask(task);
            dispatchEventRefreshTodoList(evRefreshTodoList);
        } catch (err) {
            console.log(err);
        }
    };
    return <TodoListComponent handleCreate={handleCreate} />;
}

TodoListComponent.propTypes = {};

export default TodoListContainer;
