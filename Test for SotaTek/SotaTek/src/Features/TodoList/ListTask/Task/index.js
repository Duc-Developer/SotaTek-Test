import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import AddOrEditTask from '../../../../Components/AddOrEditTask';
import Typography from '@material-ui/core/Typography';
import ButtonActions from '../../../../Components/ButtonActions';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #000000',
        marginBottom: theme.spacing(2),
    },
    list: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingRight: '5px',
    },
    wrapForm: {
        padding: theme.spacing(2),
    },
}));

function TaskComponent({ item, listIdChecked, handleRemove, handleUpdate }) {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        const newStatus = event.target.checked;
        if (newStatus) {
            listIdChecked.push(item.id);
        } else {
            const match = listIdChecked.findIndex(
                (idChecked) => idChecked === item.id
            );
            listIdChecked.splice(match, 1);
        }
        setChecked(newStatus);
    };

    const handleDetail = () => {
        setOpen(!open);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.list}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Typography
                    className={classes.title}
                    variant="subtitle2"
                    children={item.title}
                />
                <ButtonActions
                    primaryBtn={!open ? 'Detail' : 'Close'}
                    handleActionPrimary={handleDetail}
                    handleActionSecondary={() => {
                        handleRemove(item.id);
                    }}
                />
            </div>
            {open && (
                <div className={classes.wrapForm}>
                    <AddOrEditTask
                        submitContent="Update"
                        defaultValue={item}
                        handleSubmit={handleUpdate}
                    />
                </div>
            )}
        </div>
    );
}

TaskComponent.propTypes = {};

export default TaskComponent;
