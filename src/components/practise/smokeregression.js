import React, { useEffect, useState, useCallback } from 'react';
import {Dialog, Slide, Button, Snackbar, TextField} from '@material-ui/core';
import {Radio, RadioGroup, FormLabel, FormControl, FormControlLabel} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';

import ColorLine from './../line/line';
import Title from './../dialog/title';

import {useStyles} from './../helpers/styles';
import {practise_smoke_regression_questions} from './../helpers/practises';

import {helpers} from './../translations/helpers';
import {questions} from './../translations/questions';
import {discovery} from './../translations/discovery';

import image from './../../images/system_test.png';

const ERROR_MESSAGE_TIMEOUT = 13000;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

export default function SmokeRegression(props) {
    const [comments, setComments] = useState('');

    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [question6, setQuestion6] = useState('');
    const [question7, setQuestion7] = useState('');
    const [question8, setQuestion8] = useState('');
    const [question9, setQuestion9] = useState('');
    const [question10, setQuestion10] = useState('');

    // by unknown reasons, normal structure does not work
    // {'question1': value1, 'question2': value2, ...}
    // const [quests, setQuests] = useState({});

    const [points, setPoints] = useState([]);
    const [error, setError] = useState('');

    const classes = useStyles();

    const onAnswer = useCallback((question, answer) => {
        // console.log('onAnswer ' + question);
        switch (question) {
            case 'practise_smokeregression_q1':
                setQuestion1(answer);
                break;
            case 'practise_smokeregression_q2':
                setQuestion2(answer);
/*                if (answer === '0.No') {
                    setQuestion3('0.No'); setQuestion4('0.No');

                    localStorage.setItem('practise_smokeregression_q3', '0.No');
                    localStorage.setItem('practise_smokeregression_q4', '0.No');

                    localStorage.setItem('practise_smokeregression_q3_text', 'No');
                    localStorage.setItem('practise_smokeregression_q4_text', 'No');

                } else {
                    if (question3 === '0.No') {
                        setQuestion3('');
                        localStorage.removeItem('practise_smokeregression_q3');
                        localStorage.removeItem('practise_smokeregression_q3_text');
                    }

                    if (question4 === '0.No') {
                        setQuestion4('');
                        localStorage.removeItem('practise_smokeregression_q4');
                        localStorage.removeItem('practise_smokeregression_q4_text');
                    }
                }*/
                break;
            case 'practise_smokeregression_q3':
                setQuestion3(answer);
                break;
            case 'practise_smokeregression_q4':
                setQuestion4(answer);
                break;
            case 'practise_smokeregression_q5':
                setQuestion5(answer);
                break;
            case 'practise_smokeregression_q6':
                setQuestion6(answer);
                break;
            case 'practise_smokeregression_q7':
                setQuestion7(answer);
                break;
            case 'practise_smokeregression_q8':
                setQuestion8(answer);
                break;
            case 'practise_smokeregression_q9':
                setQuestion9(answer);
                break;
            case 'practise_smokeregression_q10':
                setQuestion10(answer);
                break;
            default:
                console.log('ERROR: wrong question received ' + question);
                break;
        }

    }, [question3, question4, ])

    useEffect(() => {
        if (props.open) {
            // console.log('Discovery ');
            setError(''); setPoints(props.points);
            for (var q = 0; q < practise_smoke_regression_questions.length; q++) {
                var question = practise_smoke_regression_questions[q], value = 'na';
                if (localStorage.getItem(question) !== null) {
                    value = localStorage.getItem(question);
                    onAnswer(question, value);
                }
            }

            var user_comments = localStorage.getItem('practise_smoke_regression_comments');
            if (user_comments !== null) {
                setComments(user_comments);
            } else {
                setComments('');
            }
        }

    }, [props.open, props.points, onAnswer]);

    function onClose() {
        var percent = 0;
        for (var p = 0; p < points.length; p++) {
            var answer = localStorage.getItem(points[p]);
            if (answer === null) {
                setError('You did not answer following question ' + questions[props.lang][points[p]]);
                return;
            } else {
                console.log(points[p] + ': ' + localStorage.getItem(points[p] + '_text'));
                var new_answer = answer.split('.');
                percent = percent + parseInt(new_answer[0]);
            }
        }

        // save comments section
        localStorage.setItem('practise_smoke_regression_comments', comments);
        localStorage.setItem('practise_smoke_regression', percent);

        props.onUpdate('complete', {'name': 'practise_smoke_regression', 'percent': percent});
    }

    function onQuestion(event) {
        console.log('onQuestion ' + event.target.name + ': ' + event.target.value);
        onAnswer(event.target.name, event.target.value);

        // save in localstorage
        localStorage.setItem(event.target.name, event.target.value);

        var text_question = event.target.value.split('.');
        // 5.Partially -> [5, Partially]
        localStorage.setItem(event.target.name + '_text', text_question[1] + ' (' + text_question[0] + '%)');
    }

    function onComments(event) {
        setComments(event.target.value);
    }

    return (
        <Dialog open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title={questions[props.lang]['practise_smoke_regression']}
                src={image} onClose={() => props.onUpdate('close')}/>
            <div className='discovery_wrapper_btn'>
                <ColorLine/>
            </div>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q1']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='practise_smokeregression_q1' value={question1}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.No' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='5.Yes' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q1']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q2']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='practise_smokeregression_q2' value={question2}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.No' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='5.Yes, ~20-50%' control={<Radio color='primary'/>} label='Yes, ~20-50%'/>
                        <FormControlLabel value='10.Yes, ~60-90%' control={<Radio color='primary'/>} label='Yes, ~60-90%'/>
                        <FormControlLabel value='15.Yes, 100%' control={<Radio color='primary'/>} label='Yes, 100%'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q2']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q3']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q3' value={question3}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.No' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='2.Per deployment' control={<Radio color='primary'/>} label='Per deployment'/>
                        <FormControlLabel value='5.Per merge request' control={<Radio color='primary'/>} label='Per merge request'/>
                        <FormControlLabel value='10.Per-commit or at least daily' control={<Radio color='primary'/>} label='Per-commit or at least daily'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q3']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q4']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q4' value={question4}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel disabled={question2 === '0.No'} value='0.N/A' control={<Radio color='primary'/>} label='N/A'/>
                        <FormControlLabel disabled={question2 === '0.No'} value='3.< 5 min' control={<Radio color='primary'/>} label='< 5 min'/>
                        <FormControlLabel disabled={question2 === '0.No'} value='4.< 1 hour' control={<Radio color='primary'/>} label='< 1 hour'/>
                        <FormControlLabel disabled={question2 === '0.No'} value='5.> 1 hour' control={<Radio color='primary'/>} label='> 1 hour'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q4']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q5']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q5' value={question5}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.Yes' control={<Radio color='primary'/>} label='Yes'/>
                        <FormControlLabel value='10.No' control={<Radio color='primary'/>} label='No'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q5']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q6']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q6' value={question6}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.No' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='10.Yes' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q6']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q7']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q7' value={question7}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.N/A' control={<Radio color='primary'/>} label='N/A'/>
                        <FormControlLabel value='1.Per Major Release' control={<Radio color='primary'/>} label='Per Major Release'/>
                        <FormControlLabel value='2.Per any Release' control={<Radio color='primary'/>} label='Per any Release'/>
                        <FormControlLabel value='5.Per Delivery' control={<Radio color='primary'/>} label='Per Delivery'/>
                        <FormControlLabel value='7.Daily' control={<Radio color='primary'/>} label='Daily'/>
                        <FormControlLabel value='10.Per Commit' control={<Radio color='primary'/>} label='Per Commit'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q7']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q8']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q8' value={question8}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.0 (No automated Regression)' control={<Radio color='primary'/>} label='0 (No automated Regression)'/>
                        <FormControlLabel value='5.< 30%' control={<Radio color='primary'/>} label='< 30%'/>
                        <FormControlLabel value='10.30%-70%' control={<Radio color='primary'/>} label='30%-70%'/>
                        <FormControlLabel value='15.>=80%' control={<Radio color='primary'/>} label='>=80%'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_smokeregression_q8']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q9']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q9' value={question9}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.No' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='10.Yes' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' style={{fontFamily: 'TeleGrotesk, sans-serif', fontSize: '20px', color: '#446600'}} className={classes.question_title}>
                    {questions[props.lang]['practise_smokeregression_q10']}
                </FormLabel>
                <RadioGroup row name='practise_smokeregression_q10' value={question10}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='0.N/A' control={<Radio color='primary'/>} label='N/A'/>
                        <FormControlLabel value='2.> 12h' control={<Radio color='primary'/>} label='> 12h'/>
                        <FormControlLabel value='5.< 12h' control={<Radio color='primary'/>} label='< 12h'/>
                        <FormControlLabel value='10.< 4h' control={<Radio color='primary'/>} label='< 4h'/>
                </RadioGroup>
            </FormControl>

            <div className='discovery_wrapper_btn'>
                <TextField className={classes.textarea} fullWidth={true} value={comments} variant='outlined'
                    onChange={onComments} label={'Add comments to ' + questions[props.lang]['practise_smoke_regression']}/>
            </div>

            <div className='discovery_wrapper_btn'>
                <ColorLine margin='15px'/>
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

            <Snackbar open={error.length !== 0} autoHideDuration={ERROR_MESSAGE_TIMEOUT} anchorOrigin={{vertical:'bottom', horizontal:'center'}}>
                <Alert onClose={() => setError('')} severity='error'>
                    {error}
                </Alert>
            </Snackbar>

        </Dialog>
    );
}
