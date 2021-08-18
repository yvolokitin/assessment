import React, { useEffect, useState } from 'react';
import {Dialog, Slide, Button} from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';

import ColorLine from './../line/line';
import Title from './../dialog/title';

import RadialChart from "./../charts/radialchart";

import {useStyles} from './../helpers/styles';
import {practises} from './../helpers/practises';

import {results} from './../translations/results';
import {areas} from './../translations/areas';

import image from './../../images/results.png';

import './results.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

function PractiseLine(props) {
    const [text, setText] = useState('');
    const [color, setColor] = useState('green');
    const [percent, setPercent] = useState(-1);

    useEffect(() => {
        var local_percent = localStorage.getItem(props.practise);
        if (local_percent !== null) {
            setPercent(local_percent);

            if (parseInt(local_percent) < 0) {
                console.log(props.practise + ': ' + local_percent)

                // excluded from results as inapplicable
                setText('N/A, ' + props.number + '. ' + props.title);
                setColor('#ffffe6'); // yellow
            } else {
                setText(local_percent + '%, ' + props.number + '. ' + props.title);
                setColor('#ecf9f2'); // green
            }

        } else {
            setText('N/A, ' + props.title);
            setColor('#ffe6e6'); // red
            setPercent(0);
        }

    }, [ props.practise, props.title, props.number ]);

    return (
        <>
            {percent >= -2 &&
                <div className='practise_selector_row' style={{backgroundColor: color}}
                    onClick={() => props.onUpdate(props.practise)}>
                        <div className='practise_selector_row_image'>
                            <img src={props.image} alt={props.image}/>
                        </div>
                        <div className='practise_selector_row_label'> {text} </div>
                </div>
            }
        </>
    );
}

export default function Results(props) {
    const [error, setError] = useState('');

    const classes = useStyles();

    useEffect(() => {
        if (props.open) {
            if (props.percent === 'N/A') {
                setError('You have to complete assesment at least for 4 mandatory practises: '
                    + '1. Test Automation Approach, 2. Unit Testing, 3. Component & Integration '
                    + 'testing and 4. Smoke & Regression testing');
            } else {
                setError('');
            }
        }

    }, [props.open, props.percent, ]);

    return (
        <Dialog open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title={results[props.lang]['title']} src={image} onClose={() => props.onUpdate('close')}/>

            <div className='results_wrapper_line'>
                <ColorLine/>
            </div>

            <div className={classes.chart}>
                {props.level !== 'Undefined' &&
                    <div className={classes.header}>
                       {results[props.lang]['overall']} &nbsp;
                        <font style={{'color': props.color}}> {props.percentText} </font>
                        &#44; &nbsp; {results[props.lang]['level']} &nbsp;

                        <font style={{'color': props.color}}>
                            {results[props.lang][props.level]}
                        </font>
                    </div>
                }

                <RadialChart progress={props.percent}/>

                {(error.length === 0) ? (
                    <div className={classes.footer}>
                        {results[props.lang]['Beginning']} (&#60; 30 &#37;), &nbsp;
                        {results[props.lang]['Developing']} (31 - 55 &#37;), &nbsp;
                        {results[props.lang]['Defined']} (56 - 75 &#37;), &nbsp;
                        {results[props.lang]['Advanced']} (76 - 95 &#37;), &nbsp;
                        {results[props.lang]['Matured']} (&#62; 95 &#37;)
                    </div>
                ) : (
                    <div className={classes.footer} style={{color: 'red'}}>
                        {error}
                    </div>
                )}
            </div>

            <div className='language_selector_wrapper'>
                {practises.map((practise) =>
                    <PractiseLine key={practise.uid}
                        practise={practise.uid}
                        number={practise.num}
                        image={practise.image}
                        title={areas[props.lang][practise.uid]}
                        onUpdate={() => props.onUpdate('practise', practise.uid)}/>
                )}

            </div>

            <div className='results_wrapper_line'>
                <ColorLine margin='13px'/>
            </div>

            <div className='results_wrapper_btn'>
                <Button size='large' color='primary' startIcon={<CancelIcon/>} onClick={() => props.onUpdate('close')}>
                    <font> {results[props.lang]['close']} </font>
                </Button>
            </div>

        </Dialog>
    );
}
