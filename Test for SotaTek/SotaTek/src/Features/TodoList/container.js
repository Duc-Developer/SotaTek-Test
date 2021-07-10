import React from 'react';
import PropTypes from 'prop-types';

import TodoListComponent from './component';

function TodoListContainer(props) {
    const handleCreate = (formData) => {
        console.log(formData, 'handleCreate');
    };
    return <TodoListComponent handleCreate={handleCreate} />;
}

TodoListComponent.propTypes = {};

export default TodoListContainer;
