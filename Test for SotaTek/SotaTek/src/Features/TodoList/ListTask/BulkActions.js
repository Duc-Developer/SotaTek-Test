import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ButtonActions from '../../../Components/ButtonActions';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#e0e0e0',
        padding: theme.spacing(2),
        display: 'flex',
        borderTop: '1px solid #000000',
        alignItems: 'center',
        minHeight: '50px',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function BulkActions({ handleDone, handleRemove }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="subtitle2">
                Bulk Actions
            </Typography>
            <ButtonActions
                primaryBtn="Done"
                handleActionPrimary={handleDone}
                handleActionSecondary={handleRemove}
            />
        </div>
    );
}
