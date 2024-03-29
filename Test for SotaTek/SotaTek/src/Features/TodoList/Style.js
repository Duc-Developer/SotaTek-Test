import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #000000',
    },
    create: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(2),
    },
    list: {
        paddingTop: theme.spacing(2),
        borderLeft: '1px solid #000000',
        position: 'relative',
    },

    rootMobile: {
        border: '1px solid #000000',
    },
    createMobile: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    listMobile: {
        paddingTop: theme.spacing(1),
        borderTop: '1px solid #000000',
        position: 'relative',
    },
}));

export default useStyles;
