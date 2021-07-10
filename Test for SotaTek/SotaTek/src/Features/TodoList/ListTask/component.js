import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import TextField from '@material-ui/core/TextField';

function LisTaskComponent({
    list,
    searchString,
    handleChangeSearch,
    isLoading,
    listIdChecked,
}) {
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Todo List</h3>
            <div style={{ paddingLeft: '36px', paddingRight: '36px' }}>
                <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    placeholder="Search..."
                    style={{ marginBottom: '16px' }}
                    value={searchString}
                    onChange={handleChangeSearch}
                />
                {list.map((item) => (
                    <Task
                        key={item.id}
                        item={item}
                        listIdChecked={listIdChecked}
                    />
                ))}
            </div>
        </div>
    );
}

LisTaskComponent.propTypes = {};

export default LisTaskComponent;
