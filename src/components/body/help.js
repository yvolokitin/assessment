import React from 'react';
import {Dialog, Slide, Typography, Button} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import ColorLine from './../line/line';
import Title from './../dialog/title';

import image_help from './../../images/help-icon-png-26.jpg';
import image_tamm from './../../images/maturity_model.jpg';

import pdf_tamm from './../../ppt/TAMM_overview.pdf';

import { makeStyles } from '@material-ui/core/styles';
// import './help.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 'auto',
        width: '75%',
    },
    footer: {
        height: '60px',
        width: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        position: 'absolute',
        right: '1%',
        top: '1%',
        color: 'grey',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function Help(props) {
    const classes = useStyles();

    return (
        <Dialog id='fw_help_screen_id' open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title='Help' src={image_help} onClose={() => props.onUpdate('close')}/>
            <ColorLine/>

            <Typography className={classes.root}>
                <img src={image_tamm} alt='Help' className={classes.image} onContextMenu={(e) => e.preventDefault()}/>
            </Typography>

            <ColorLine/>

            <div className={classes.footer}>
                <Button size='large' color='primary' startIcon={<CloudDownloadIcon/>}>
                    <a href={pdf_tamm} download='TAMM_overview.pdf'>
                        <font className='card_button'> Download Full PDF </font>
                    </a>
                </Button>

                <Button size='large' color='primary' startIcon={<CancelIcon/>} onClick={() => props.onUpdate('close')}>
                    <font className='card_button'> Close </font>
                </Button>

            </div>
        </Dialog>
    );
}
