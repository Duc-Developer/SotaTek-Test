import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Snackbar({ type }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen(false);
        }
    };

    return (
        <div className={classes.root}>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
}

Snackbar.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
};

Snackbar.defaultProps = {
    type: 'success',
};
