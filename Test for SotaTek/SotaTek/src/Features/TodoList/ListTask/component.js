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
        <div style={{ marginBottom: '96px' }}>
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
                {isLoading ? (
                    <div style={{ textAlign: 'center' }}>...fetching</div>
                ) : list.length > 0 ? (
                    list.map((item) => (
                        <Task
                            key={item.id}
                            item={item}
                            listIdChecked={listIdChecked}
                        />
                    ))
                ) : (
                    <div style={{ textAlign: 'center' }}>No Data</div>
                )}
            </div>
        </div>
    );
}

LisTaskComponent.propTypes = {};

export default LisTaskComponent;
