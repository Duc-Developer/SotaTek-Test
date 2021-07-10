import React from 'react';

import Create from './Create';
import Grid from '@material-ui/core/Grid';

import useStyles from './Style';

function TodoListComponent({ handleCreate }) {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container>
            <Grid className={classes.create} item xs={12} md={6}>
                <Create handleSubmit={handleCreate} />
            </Grid>
            <Grid className={classes.list} item xs={12} md={6}>
                here is list
            </Grid>
        </Grid>
    );
}

export default TodoListComponent;
