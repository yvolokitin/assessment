import React from 'react';
import {Button} from '@material-ui/core';

import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import Info from './info';

import {card} from './../translations/card';
import './card.css';

import image_automation from './../../images/idealautomatedtestingpyramid.png';
import image_unittest from './../../images/unittestbestpractises.jpg';
import image_regression from './../../images/regressiontest.jpg';

export default function Card(props) {
    const [id, setId] = React.useState('');
    const [info, setInfo] = React.useState(false);
    const [image, setImage] = React.useState('');

    React.useEffect(() => {
        // console.log('Card.useEffect -> ' + props.uid);
        setId('id_' + props.uid);
    }, []);

    function onInfo(open) {
        if (props.uid === 'practise_automation') {
            setImage(image_automation);

        } else if (props.uid === 'practise_unit_test') {
            setImage(image_unittest);

        } else if (props.uid === 'practise_smoke_regression') {
            setImage(image_regression);

        } else {
            console.log('props.uid: ' + props.uid);
            setImage(props.image);
        }

        setInfo(true);
    }

    return (
        <div id={id} className='card_wrapper'>
            <div className='card_wrapper_img' onClick={() => props.onUpdate(props.uid)}>
                <img src={props.image} alt='logo' onContextMenu={(e) => e.preventDefault()}/>
            </div>

            <div className='card_wrapper_text'> {props.title} </div>

            <div className='card_wrapper_btn'>
                <Button size='small' color='primary' onClick={() => onInfo(true)}
                    startIcon={<VisibilityIcon/>}>
                        <font className='card_button'> {card[props.lang]['info']} </font>
                </Button>
                <Button size='small' color='primary' onClick={() => props.onUpdate(props.uid)}
                    startIcon={<PlayCircleFilledWhiteIcon/>}>
                        <font className='card_button'> {card[props.lang]['open']} </font>
                </Button>
            </div>

            <Info open={info}
                uid={props.uid}
                lang={props.lang}
                title={props.title}
                image={image}
                fullScreen={props.width<820}
                onClose={() => setInfo(false)}
                onLaunch={() => {setInfo(false); props.onUpdate(props.uid)}}/>
        </div>
    );
}
