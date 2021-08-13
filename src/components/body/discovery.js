import React, { useEffect, useState } from 'react';
import {Dialog, Slide, Button, Snackbar, TextField} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';

import Question from './question';
import ColorLine from './../line/line';
import Title from './../dialog/title';

import {areas} from './../translations/areas';
import {discovery} from './../translations/discovery';

import './discovery.css';

const ERROR_MESSAGE_TIMEOUT = 13000;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

export default function Discovery(props) {
    const [questions, setQuestions] = useState([]);
    const [comments, setComments] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (props.open) {
            setError(''); setQuestions(props.points);
            var user_comments = localStorage.getItem(props.uid + '_comments');
            if (user_comments !== null) {
                setComments(user_comments);
            } else {
                setComments('');
            }
        }

    }, [props.open, props.uid, props.points]);

    function onClose(action) {
        if (action === 'save_and_close') {
            var percent = 0;
            for (var q = 0; q < questions.length; q++) {
                var answer = localStorage.getItem(questions[q]['question']);
                if (answer === null || answer.length === 0) {
                    console.log(questions[q]['question'] + ': ' + answer);
                    setError('Sorry, You did not answer all questions');
                    return;

                } else {
                    console.log('answer.split()[0] ' + answer.split('.')[0]);
                    percent = percent + parseInt(answer.split('.')[0]);
                }
            }

            // save comments section
            localStorage.setItem(props.uid + '_comments', comments);
            localStorage.setItem(props.uid, percent);

            console.log(props.uid + ' %: ' + percent);
            props.onUpdate('complete', {'name': props.uid, 'percent': percent});

        } else if (action === 'cleanup') {
            localStorage.removeItem(props.uid + '_comments');
            localStorage.removeItem(props.uid);

            for (var que = 0; que < questions.length; que++) {
                localStorage.removeItem(questions[que]);
            }

            props.onUpdate('close');

        } else {
            console.log('Wrong action on onClose call ' + action);
            setError('Wrong action on onClose call ' + action);
        }
    }

    function onComments(event) {
        setComments(event.target.value);
    }

    return (
        <Dialog id='fw_discovery_screen_id' open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title={areas[props.lang][props.uid]} src={props.image} onClose={() => props.onUpdate('close')}/>

            <div className='discovery_wrapper_btn'>
                <ColorLine/>
            </div>

            {questions.map(
                (question) => 
                    <Question key={question['question']}
                        question={question['question']}
                        options={question['options']}
                        lang={props.lang}/>
            )}

            <div className='discovery_wrapper_btn'>
                <ColorLine margin='15px'/>
            </div>

            <div className='discovery_wrapper_btn'>
                <TextField className='discovery_textarea' value={comments} variant='outlined'
                    onChange={onComments} label={'Add comments to ' + areas[props.lang][props.uid]}/>
            </div>

            <div className='discovery_wrapper_btn'>
                <Button size='large' color='primary' startIcon={<DeleteIcon/>} onClick={() => onClose('cleanup')}>
                    <font> {discovery[props.lang]['remove']} </font>
                </Button>
                <Button size='large' color='primary' startIcon={<CancelIcon/>} onClick={() => props.onUpdate('close')}>
                    <font> {discovery[props.lang]['close']} </font>
                </Button>
                <Button size='large' color='primary' startIcon={<SaveIcon/>} onClick={() => onClose('save_and_close')}>
                    <font> {discovery[props.lang]['finish']} </font>
                </Button>
            </div>

            <Snackbar open={error.length !== 0} autoHideDuration={ERROR_MESSAGE_TIMEOUT}
                className='discovery_snackbar' anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
                <Alert onClose={() => setError('')} severity='error'> {error} </Alert>
            </Snackbar>
        </Dialog>
    );
}
