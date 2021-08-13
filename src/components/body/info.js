import React from 'react';
import {Dialog, Button} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import ColorLine from './../line/line';
import Title from './../dialog/title';

import {info} from './../translations/info';

import './info.css';

export default function Info(props) {
    return (
        <Dialog id='fw_info_screen_id' open={props.open} fullScreen={props.fullScreen} transitionDuration={700} scroll='body'>
            <Title title='' onClose={() => props.onClose()}/>
            <ColorLine/>

            <div className='info_title'> {props.title} </div>

            <div className='info_text'> {info[props.lang][props.uid]} </div>

            <div className='info_wrapper_img' onContextMenu={(e) => e.preventDefault()}>
                <img src={props.image} alt={props.title}/>
            </div>

            <div className='info_text'> {info[props.lang][props.uid + '_ext']} </div>

            <ColorLine margin='10px'/>

            <div className='info_wrapper_btn' style={{height: '60px'}}>
                <Button size='small' color='primary' startIcon={<CancelIcon/>} onClick={() => props.onClose()}>
                    <font className='card_button'>
                        {info[props.lang]['close']}
                    </font>
                </Button>

                <Button size='small' color='primary' startIcon={<PlayCircleFilledWhiteIcon/>} onClick={() => props.onLaunch()}>
                    <font className='card_button'>
                        {info[props.lang]['discover']}
                    </font>
                </Button>
            </div>
        </Dialog>
    );
}
