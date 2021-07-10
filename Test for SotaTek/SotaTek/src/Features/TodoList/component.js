import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Create from './Create';
import ListTask from './ListTask';
import Grid from '@material-ui/core/Grid';
import Snackbar from '../../Components/SnackBar';

import useStyles from './Style';

function TodoListComponent({ handleCreate }) {
    const classes = useStyles();
    const mobileMatched = useMediaQuery('(max-width: 768px)');
    return (
        <>
            <Grid
                className={`${
                    !mobileMatched ? classes.root : classes.rootMobile
                }`}
                container
            >
                <Grid
                    className={`${
                        !mobileMatched ? classes.create : classes.createMobile
                    }`}
                    item
                    xs={12}
                    md={6}
                >
                    <Create handleSubmit={handleCreate} />
                </Grid>
                <Grid
                    className={`${
                        !mobileMatched ? classes.list : classes.listMobile
                    }`}
                    item
                    xs={12}
                    md={6}
                >
                    <ListTask />
                </Grid>
            </Grid>
            <Snackbar />
        </>
    );
}

export default TodoListComponent;
