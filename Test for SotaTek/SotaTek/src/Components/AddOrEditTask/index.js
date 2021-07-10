import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import useStyles from './Style';
import { PRIORITY } from '../../Utilities/Constants';
import HELPERS from '../../Utilities/Helpers';

function AddOrEditTask({
    searchPlaceholder,
    defaultValue,
    submitContent,
    handleSubmit,
}) {
    const [formData, setFormData] = useState(defaultValue);
    const [errors, setErrors] = useState({
        title: false,
    });

    const handleClickSubmit = () => {
        const isValidTitle = HELPERS.validateWithoutFullWhiteSpace(
            formData.title
        );
        if (!isValidTitle) {
            setErrors((prev) => ({ ...prev, title: true }));
        } else {
            handleSubmit(formData);
            setErrors((prev) => ({ ...prev, title: false }));
        }
    };

    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid className={classes.rowStyled} item xs={12}>
                <TextField
                    variant="outlined"
                    size="small"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    placeholder={searchPlaceholder}
                    error={errors.title}
                    helperText={!errors.title ? '' : 'Title is required'}
                />
            </Grid>
            <Grid className={classes.rowStyled} item xs={12}>
                <label>Description</label>
                <TextField
                    name="description"
                    variant="outlined"
                    size="small"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    multiline
                    fullWidth
                />
            </Grid>
            <Grid className={classes.rowStyled} item xs={12} md={6}>
                <label>Due Date</label>
                <TextField
                    size="small"
                    name="dueDate"
                    variant="outlined"
                    type="date"
                    value={formData.dueDate}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid className={classes.rowStyled} item xs={12} md={6}>
                <FormControl variant="outlined" size="small" fullWidth>
                    <label>Priority</label>
                    <Select
                        labelId="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        name="priority"
                    >
                        <MenuItem value={PRIORITY.LOW}>Low</MenuItem>
                        <MenuItem value={PRIORITY.NORMAL}>Normal</MenuItem>
                        <MenuItem value={PRIORITY.HIGH}>Hight</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid className={classes.rowActions} item xs={12}>
                <Button
                    onClick={handleClickSubmit}
                    fullWidth
                    variant="contained"
                >
                    {submitContent}
                </Button>
            </Grid>
        </Grid>
    );
}

AddOrEditTask.propTypes = {
    searchPlaceholder: PropTypes.string,
    submitContent: PropTypes.string,
    defaultValue: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        priority: PropTypes.number,
        dueDate: PropTypes.string,
    }),
    handleSubmit: PropTypes.func.isRequired,
};

AddOrEditTask.defaultProps = {
    searchPlaceholder: 'Add New task...',
    submitContent: 'Add',
    defaultValue: {
        title: '',
        description: '',
        priority: PRIORITY.NORMAL,
        dueDate: HELPERS.convertDateToStringFormat(new Date()),
    },
    handleSubmit: () => {},
};

export default AddOrEditTask;
