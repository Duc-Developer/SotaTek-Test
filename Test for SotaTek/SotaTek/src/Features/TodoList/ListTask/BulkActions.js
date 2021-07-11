import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import ButtonActions from '../../../Components/ButtonActions';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#e0e0e0',
        display: 'flex',
        borderTop: '1px solid #000000',
        alignItems: 'center',
        minHeight: '80px',
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function BulkActions({ handleDone, handleRemove }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Typography className={classes.title} variant="subtitle2">
                    Bulk Actions
                </Typography>
                <ButtonActions
                    primaryBtn="Done"
                    handleActionPrimary={handleDone}
                    handleActionSecondary={handleRemove}
                />
            </div>
        </div>
    );
}

BulkActions.propTypes = {
    handleDone: PropTypes.func,
    handleRemove: PropTypes.func,
};
