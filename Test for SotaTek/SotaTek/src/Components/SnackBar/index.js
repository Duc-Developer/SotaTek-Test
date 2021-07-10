import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { ALERT_TYPES, EVENTS } from '../../Utilities/Constants';
import { useEventListener } from '../../Utilities/useHooks';

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
    alert: {
        minWidth: '200px',
    },
}));

export default function SnackbarAdvance({ type }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleAlert = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen(false);
        }
    };
    useEventListener(EVENTS.SUCCESS, handleAlert);
    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert className={classes.alert} severity={type}>
                    {generateMessage(type)}
                </Alert>
            </Snackbar>
        </div>
    );
}

function generateMessage(type) {
    switch (type) {
        case ALERT_TYPES.SUCCESS:
            return 'Successful!';
        case ALERT_TYPES.ERROR:
            return 'Something was wrong!';
        case ALERT_TYPES.WARNING:
            return 'Warning!';
        default:
            return 'Errors';
    }
}

SnackbarAdvance.propTypes = {
    type: PropTypes.oneOf(Object.values(ALERT_TYPES)),
};

SnackbarAdvance.defaultProps = {
    type: 'success',
};
