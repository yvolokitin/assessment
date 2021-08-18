import React from 'react';
import {Dialog, Link, Slide} from '@material-ui/core';

import Title from './../dialog/title';
import ColorLine from './../line/line';

import image_radar from './../../images/radar_picture.jpg';
import benefits_picture from './../../images/benefits_picture.jpg';
import time_picture from './../../images/time_picture.png';
import roadmap_picture from './../../images/roadmap_picture.jpg';
import preparation_picture from './../../images/preparation_picture.png';
import questions_picture from './../../images/questions_picture.jpg';

import {useStyles} from './../helpers/styles';
import {benefits} from './../translations/benefits';

import './benefits.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

export default function Benifits(props) {
    const classes = useStyles();

    return (
        <Dialog id='fw_discovery_screen_id' open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title='Benefits' src={props.image} onClose={() => props.onUpdate('close')}/>
            <ColorLine/>

            <div className='benefits_wrapper'>
                <div className='benefits_card'>
                    <div className='benefits_title'> {benefits[props.lang]['boost']} </div>
                    <div className='benifits_image_wrapper' onContextMenu={(e) => e.preventDefault()}>
                        <img className='benifits_image' src={image_radar} alt='Radar!'/>
                    </div>

                    <div className={classes.contacts}> {benefits[props.lang]['dear']} </div>
                    <div className='benefits_text'> {benefits[props.lang]['continuous']} </div>

                    <div className='benefits_text'>
                        <ul style={{paddingLeft: '13%', paddingRight: '13%'}}>
                            <li> <Link href='#realbenefits'>Benefits of the Test Automation Radar</Link> </li>
                            <li> <Link href='#howmuchtime'>How much time does it require?</Link> </li>
                            <li> <Link href='#whatafter'>What happens after the Assessment?</Link> </li>
                            <li> <Link href='#howprepare'>How should I prepare?</Link> </li>
                            <li> <Link href='#idonothave'>I dont have all the information</Link> </li>
                            <li> <Link href='#startitnow'>Start it now!</Link> </li>
                        </ul>
                    </div>

                    <div className='benefits_text'> {benefits[props.lang]['navigate']} </div>
                    <div className='benefits_text'> {benefits[props.lang]['answering']} </div>

                    <ul className='benefits_text'>
                        <li>{benefits[props.lang]['certificate']}</li>
                        <li>{benefits[props.lang]['roadmap']}</li>
                        <li>{benefits[props.lang]['plan']}</li>
                        <li>{benefits[props.lang]['practices']}</li>
                    </ul>

                    <div id='realbenefits' className='benefits_title'> {benefits[props.lang]['1_point']} </div>
                    <div className='benifits_image_wrapper' onContextMenu={(e) => e.preventDefault()}>
                        <img className='benifits_image' src={benefits_picture} alt='Benefits!'/>
                    </div>
                    <div className='benefits_text'> {benefits[props.lang]['1_point_txt1']} </div>
                    <div className='benefits_text'> {benefits[props.lang]['1_point_txt2']} </div>

                    <div id='howmuchtime' className='benefits_title'> {benefits[props.lang]['2_point']} </div>
                    <div className='benifits_image_wrapper' onContextMenu={(e) => e.preventDefault()}>
                        <img className='benifits_image' src={time_picture} alt='Benefits!'/>
                    </div>
                    <div className='benefits_text'> {benefits[props.lang]['2_point_txt1']} </div>

                    <div id='whatafter' className='benefits_title'> {benefits[props.lang]['3_point']} </div>
                    <div className='benifits_image_wrapper' onContextMenu={(e) => e.preventDefault()}>
                        <img className='benifits_image' src={roadmap_picture} alt='Roadmap!'/>
                    </div>
                    <div className='benefits_text'> {benefits[props.lang]['3_point_txt1']} </div>
                    <ul className='benefits_text'>
                        <li>{benefits[props.lang]['3_point_txt2']}</li>
                        <li>{benefits[props.lang]['3_point_txt3']}</li>
                        <li>{benefits[props.lang]['3_point_txt4']}</li>
                    </ul>

                    <div id='howprepare' className='benefits_title'> {benefits[props.lang]['4_point']} </div>
                    <div className='benifits_image_wrapper' onContextMenu={(e) => e.preventDefault()}>
                        <img className='benifits_image' src={preparation_picture} alt='Preparation!'/>
                    </div>
                    <div className='benefits_text'> {benefits[props.lang]['4_point_txt1']} </div>

                    <div id='idonothave' className='benefits_title'> {benefits[props.lang]['5_point']} </div>
                    <div className='benifits_image_wrapper' onContextMenu={(e) => e.preventDefault()}>
                        <img className='benifits_image' src={questions_picture} alt='Preparation!'/>
                    </div>
                    <div className='benefits_text'> {benefits[props.lang]['5_point_txt1']} </div>

                    <div className='benefits_text'>
                        {benefits[props.lang]['eager']}
                        <Link href='/'> {benefits[props.lang]['start']} </Link>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
