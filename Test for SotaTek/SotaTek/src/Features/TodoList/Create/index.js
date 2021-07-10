import React from 'react';
import AddOrEditTask from '../../../Components/AddOrEditTask';

export default function Create({ handleSubmit }) {
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>New Task</h3>
            <AddOrEditTask handleSubmit={handleSubmit} />
        </div>
    );
}
