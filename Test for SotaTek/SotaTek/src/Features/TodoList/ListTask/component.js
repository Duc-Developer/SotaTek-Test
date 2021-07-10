import React from 'react';

import Task from './Task';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
function LisTaskComponent({
    list,
    searchString,
    handleChangeSearch,
    isLoading,
    listIdChecked,
    handleRemoveTask,
    handleUpdateTask,
}) {
    const mobileMatched = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{ marginBottom: '96px' }}>
            <h3 style={{ textAlign: 'center' }}>Todo List</h3>
            <div
                style={{
                    paddingLeft: mobileMatched ? '16px' : '36px',
                    paddingRight: mobileMatched ? '16px' : '36px',
                }}
            >
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
                            handleRemove={handleRemoveTask}
                            handleUpdate={handleUpdateTask}
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
