import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {},
    rowStyled: {
        '& label': {
            display: 'block',
            marginBottom: '5px',
            fontWeight: '600',
        },
    },
    rowActions: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '& .MuiButton-root': {
            background: '#5cb85c',
            color: '#ffffff',
        },
    },
}));

export default useStyles;
