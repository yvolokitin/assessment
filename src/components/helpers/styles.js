import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title_avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        border: '1px solid black',
    },
    title_button: {
        position: 'absolute',
        right: '1%',
        top: '1%',
        color: 'grey',
    },
    title_title: {
        marginLeft: '13px',
        fontSize: '24px',
        fontFamily: 'TeleGrotesk',
    },
    line_header: {
        width: '100%',
        height: '7px',
        backgroundColor: '#e20074',
    },
    question_wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    question_form: {
        marginTop: '15px',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        boxShadow: '1px 1px 3px 0px grey',

        '&:hover': {
            background: '#efefef',
            cursor: 'pointer',
        },
    },
    question_title: {
        width: '100%',
        marginTop: '4%',
        color: '#446600',
        fontSize: '20px',
        textAlign: 'center',
        fontFamily: 'TeleGrotesk, sans-serif',

        '&:hover': {
            color: '#e20074',
        },
    },
    chart: {
        width: '90%',
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '5%',
        marginRight: '5%',
        boxShadow: '1px 1px 3px 0px grey',
    },
    header: {
        width: '100%',
        color: '#404040',
        fontSize: '20px',
        textAlign: 'center',
        fontFamily: 'TeleGrotesk,\'Helvetica Neue\',Helvetica,Arial,\'Lucida Grande\',sans-serif',
    },
    footer: {
        width: '100%',
        color: 'grey',
        fontSize: '14px',
        textAlign: 'center',
        fontFamily: 'TeleGrotesk,\'Helvetica Neue\',Helvetica,Arial,\'Lucida Grande\',sans-serif',
    },
    radio: {
        marginTop: '1%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '10px',
    },
    column: {
        marginTop: '1%',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '10px',
    },
    textarea: {
        width: '90%',
        marginTop: '15px',
        marginBottom: '1%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    helper: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        color: 'grey',
        textAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    snackbar: {
        border: '3px solid black',
        borderRadius: '7px',
        boxShadow: '1px 1px 3px 0px grey',
    },
    contacts: {
        marginTop: '1%',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',

        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'TeleGrotesk,\'Helvetica Neue\',Helvetica,Arial,\'Lucida Grande\',sans-serif',
    },
    image_wrapper: {
        width: '98%',
        margin: '1%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '20%',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '13px',
    },
}));

