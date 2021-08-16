import React from 'react';
import {Dialog, Slide, Button} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';

import ColorLine from './../line/line';
import Title from './../dialog/title';

import image_contacts from './../../images/contacts_icon.jpg';
import image_radar from './../../images/radar.jpg';

import {useStyles} from './../helpers/styles';
import {contacts} from './../translations/contacts';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function Contacts(props) {
    const classes = useStyles();

    return (
        <Dialog id='fw_contacts_screen_id' open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title={contacts[props.lang]['title']} src={image_contacts} onClose={() => props.onUpdate('close')}/>
            <ColorLine/>

            <div className={classes.contacts}>
                {contacts[props.lang]['dear']}
            </div>

            <div className={classes.contacts}>
                {contacts[props.lang]['introduce']}
            </div>

            <div className={classes.image_wrapper} onContextMenu={(e) => e.preventDefault()}>
                <img className={classes.image} src={image_radar} alt='Radar!'/>
            </div>

            <div className={classes.contacts}>
                {contacts[props.lang]['interactive']}
            </div>

            <div className={classes.contacts}>
                {contacts[props.lang]['outcome']}
            </div>
            <div className={classes.contacts}>
                {contacts[props.lang]['maturity']}
            </div>
            <div className={classes.contacts}>
                {contacts[props.lang]['plan']}
            </div>

            <div className={classes.contacts}>
                {contacts[props.lang]['register']}
            </div>


            <div className={classes.contacts}>
                {contacts[props.lang]['see_you']}
            </div>

            <ColorLine margin='13px'/>

            <div className={classes.footer}>
                <Button size='large' color='primary' startIcon={<CancelIcon/>} onClick={() => props.onUpdate('close')}>
                    <font className='card_button'> {contacts[props.lang]['close']} </font>
                </Button>
            </div>
        </Dialog>
    );
}
