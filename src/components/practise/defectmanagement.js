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
import {practise_defect_management_questions} from './../helpers/practises';

import {helpers} from './../translations/helpers';
import {questions} from './../translations/questions';
import {discovery} from './../translations/discovery';

import image from './../../images/defect_managements.png';

const ERROR_MESSAGE_TIMEOUT = 13000;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

export default function UnitTest(props) {
    const [comments, setComments] = useState('');

    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [question6, setQuestion6] = useState('');
    const [question7, setQuestion7] = useState('');

    const [points, setPoints] = useState([]);
    const [error, setError] = useState('');

    const classes = useStyles();

    const onAnswer = useCallback((question, answer) => {
        // console.log('onAnswer ' + question);
        switch (question) {
            case 'practise_defect_management_q1':
                setQuestion1(answer);
                if (answer === 'practise_defect_management_q1.NA' ||
                    answer === 'practise_defect_management_q1.0') {
                        setQuestion2('');
                        setQuestion3('');
                        setQuestion4('');
                        setQuestion5('');
                        setQuestion6('');
                        setQuestion7('');
                }
                break;
            case 'practise_defect_management_q2':
                setQuestion2(answer);
                break;
            case 'practise_defect_management_q3':
                setQuestion3(answer);
                break;
            case 'practise_defect_management_q4':
                setQuestion4(answer);
                if (answer === 'practise_defect_management_q4.0') {
                    setQuestion5('practise_defect_management_q5.0');
                    localStorage.setItem('practise_defect_management_q5', 'practise_defect_management_q5.0');
                }
                break;
            case 'practise_defect_management_q5':
                setQuestion5(answer);
                break;
            case 'practise_defect_management_q6':
                setQuestion6(answer);
                break;
            case 'practise_defect_management_q7':
                setQuestion7(answer);
                break;
            default:
                console.log('ERROR: wrong question received ' + question);
                break;
        }

    }, [ ])

    useEffect(() => {
        if (props.open) {
            // console.log('Discovery ');
            setError(''); setPoints(props.points);
            for (var q = 0; q < practise_defect_management_questions.length; q++) {
                var question = practise_defect_management_questions[q], value = 'na';
                if (localStorage.getItem(question) !== null) {
                    value = localStorage.getItem(question);
                    onAnswer(question, value);
                }
            }

            var user_comments = localStorage.getItem('practise_defect_management_comments');
            if (user_comments !== null) {
                setComments(user_comments);
            } else {
                setComments('');
            }
        }

    }, [props.open, props.points, onAnswer]);

    function onClose() {
        var percent = 0;

        if (question1 === 'practise_defect_management_q1.NA') {
            percent = -1;

        } else if (question1 !== 'practise_defect_management_q1.0') {
            for (var p = 0; p < points.length; p++) {
                var answer = localStorage.getItem(points[p]);
                if (answer === null) {
                    setError('You did not answer following question ' + questions[props.lang][points[p]]);
                    return;
                } else {
                    var new_answer = answer.split('.');
                    percent = percent + parseInt(new_answer[1]);
                }
            }
        }

        // save comments section
        localStorage.setItem('practise_defect_management_comments', comments);
        localStorage.setItem('practise_defect_management', percent);

        props.onUpdate('complete', {'name': 'practise_defect_management', 'percent': percent});
    }

    function onQuestion(event) {
        console.log('onQuestion ' + event.target.value);
        // save in localstorage
        var local_question = event.target.value.split('.');
        localStorage.setItem(local_question[0], event.target.value);
        // setAnswer(local_question[0], event.target.value);
        onAnswer(local_question[0], event.target.value);
    }

    function onComments(event) {
        setComments(event.target.value);
    }

    return (
        <Dialog open={props.open} fullScreen={true} TransitionComponent={Transition} transitionDuration={900}>
            <Title title={questions[props.lang]['practise_defect_management']}
                src={image} onClose={() => props.onUpdate('close')}/>
            <ColorLine/>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q1']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question1}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q1.NA' control={<Radio color='primary'/>} label='N/A'/>
                        <FormControlLabel value='practise_defect_management_q1.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_defect_management_q1.5' control={<Radio color='primary'/>} label='Partially'/>
                        <FormControlLabel value='practise_defect_management_q1.15' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q1']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q2']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question2}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q2.0' control={<Radio color='primary'/>} label='Never'/>
                        <FormControlLabel value='practise_defect_management_q2.5' control={<Radio color='primary'/>} label='Post-commit and Merge'/>
                        <FormControlLabel value='practise_defect_management_q2.10' control={<Radio color='primary'/>} label='Pre-commit, Post-commit, Merge'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q2']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q3']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question3}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q3.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_defect_management_q3.20' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q3']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q4']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question4}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q4.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_defect_management_q4.10' control={<Radio color='primary'/>} label='Yes, but target is different per components'/>
                        <FormControlLabel value='practise_defect_management_q4.15' control={<Radio color='primary'/>} label='Yes, target is fixed across all components'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q4']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q5']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question5}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q5.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_defect_management_q5.10' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q5']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q6']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question6}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q6.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_defect_management_q6.10' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q6']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_defect_management_q7']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question7}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_defect_management_q7.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_defect_management_q7.20' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_defect_management_q7']}
                </div>
            </FormControl>

            <div className='discovery_wrapper_btn'>
                <TextField className={classes.textarea} fullWidth={true} value={comments} variant='outlined'
                    onChange={onComments} label={'Add comments to ' + questions[props.lang]['practise_defect_management']}/>
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
