import React, { useEffect, useState, useCallback } from 'react';
import {Dialog, Slide, Button, Snackbar, TextField} from '@material-ui/core';
import {Radio, RadioGroup, FormLabel, FormControl, FormControlLabel} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';

import ColorLine from './../line/line';
import Title from './../dialog/title';

import './../body/discovery.css';

import {helpers} from './../translations/helpers';
import {questions} from './../translations/questions';
import {discovery} from './../translations/discovery';

import {useStyles} from './../helpers/styles';
import {practise_release_strategy_questions} from './../helpers/practises';

import image from './../../images/gs1_global_tree_icon_graphic.png';

const ERROR_MESSAGE_TIMEOUT = 13000;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

export default function ReleaseStrategy(props) {
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

    // const [question10, setQuestion10] = useState('');
    // const [question11, setQuestion11] = useState('');
    // const [question12, setQuestion12] = useState('');
    // const [question13, setQuestion13] = useState('');
    // const [question14, setQuestion14] = useState('');
    // const [question15, setQuestion15] = useState('');
    // const [question16, setQuestion16] = useState('');

    const [points, setPoints] = useState([]);
    const [error, setError] = useState('');

    const classes = useStyles();

    const onAnswer = useCallback((question, answer) => {
        // console.log('onAnswer ' + question);
        switch (question) {
            case 'practise_release_strategy_q1':
                setQuestion1(answer);
                break;
            case 'practise_release_strategy_q2':
                setQuestion2(answer);
                break;
            case 'practise_release_strategy_q3':
                setQuestion3(answer);
                break;
            case 'practise_release_strategy_q4':
                setQuestion4(answer);
                break;
            case 'practise_release_strategy_q5':
                setQuestion5(answer);
                break;
            case 'practise_release_strategy_q6':
                setQuestion6(answer);
                break;
            case 'practise_release_strategy_q7':
                setQuestion7(answer);
                break;
            case 'practise_release_strategy_q8':
                setQuestion8(answer);
                break;
            case 'practise_release_strategy_q9':
                setQuestion9(answer);
                break;
            /*
            case 'practise_release_strategy_q10':
                setQuestion10(answer);
                break;
            case 'practise_release_strategy_q11':
                setQuestion11(answer);
                break;
            case 'practise_release_strategy_q12':
                setQuestion12(answer);
                break;
            case 'practise_release_strategy_q13':
                setQuestion13(answer);
                break;
            case 'practise_release_strategy_q14':
                setQuestion14(answer);
                break;
            case 'practise_release_strategy_q15':
                setQuestion15(answer);
                break;
            case 'practise_release_strategy_q16':
                setQuestion16(answer);
                break;
            */
            default:
                console.log('ERROR: wrong question received ' + question);
                break;
        }

    }, [ ])

    useEffect(() => {
        if (props.open) {
            // console.log('Discovery ');
            setError(''); setPoints(props.points);
            for (var q = 0; q < practise_release_strategy_questions.length; q++) {
                var question = practise_release_strategy_questions[q], value = 'na';
                if (localStorage.getItem(question) !== null) {
                    value = localStorage.getItem(question);
                    onAnswer(question, value);
                }
            }

            var user_comments = localStorage.getItem('practise_release_strategy_comments');
            if (user_comments !== null) {
                setComments(user_comments);
            } else {
                setComments('');
            }
        }

    }, [props.open, props.points, onAnswer]);

    function onClose(action) {
        if (action === 'save_and_close') {
            var percent = 0;
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

            // save comments section
            localStorage.setItem('practise_release_strategy_comments', comments);
            localStorage.setItem('practise_release_strategy', percent);

            props.onUpdate('complete', {'name': 'practise_release_strategy', 'percent': percent});

        } else if (action === 'cleanup') {
            localStorage.removeItem(props.uid + '_comments');
            localStorage.removeItem(props.uid);

            for (var point = 0; point < points.length; point++) {
                console.log('removing ' + points[point]);
                localStorage.removeItem(points[point]);
            }

            setQuestion1(''); setQuestion2(''); setQuestion3('');
            setQuestion4(''); setQuestion5(''); setQuestion6('');
            setQuestion7(''); setQuestion8(''); setQuestion9('');
 
            props.onUpdate('close');

        } else {
            console.log('Wrong action on onClose call ' + action);
            setError('Wrong action on onClose call ' + action);
        }
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
            <Title title={questions[props.lang]['practise_release_strategy']}
                src={image} onClose={() => props.onUpdate('close')}/>
            <ColorLine/>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q1']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question1}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q1.0' control={<Radio color='primary'/>} label='2-6 months'/>
                        <FormControlLabel value='practise_release_strategy_q1.2' control={<Radio color='primary'/>} label='1-2 months'/>
                        <FormControlLabel value='practise_release_strategy_q1.6' control={<Radio color='primary'/>} label='2-4 weeks'/>
                        <FormControlLabel value='practise_release_strategy_q1.8' control={<Radio color='primary'/>} label='1-2 weeks'/>
                        <FormControlLabel value='practise_release_strategy_q1.10' control={<Radio color='primary'/>} label='1-5 days'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_release_strategy_q1']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q2']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question2}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q2.0' control={<Radio color='primary'/>} label='5 - 10+ weeks'/>
                        <FormControlLabel value='practise_release_strategy_q2.1' control={<Radio color='primary'/>} label='1 - 4 weeks'/>
                        <FormControlLabel value='practise_release_strategy_q2.3' control={<Radio color='primary'/>} label='2 - 5 days'/>
                        <FormControlLabel value='practise_release_strategy_q2.4' control={<Radio color='primary'/>} label='1 - 2 day'/>
                        <FormControlLabel value='practise_release_strategy_q2.5' control={<Radio color='primary'/>} label='<=1 day'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_release_strategy_q1']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q3']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question3}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q3.0' control={<Radio color='primary'/>} label='Could not be formailzed'/>
                        <FormControlLabel value='practise_release_strategy_q3.5' control={<Radio color='primary'/>} label='Formal document with description'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_release_strategy_q3']}
                </div>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q4']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question4}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q4.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_release_strategy_q4.10' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q5']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question5}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q5.0' control={<Radio color='primary'/>} label='No'/>
                        <FormControlLabel value='practise_release_strategy_q5.10' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q6']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question6}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q6.0' control={<Radio color='primary'/>} label='Could not be formailzed'/>
                        <FormControlLabel value='practise_release_strategy_q6.10' control={<Radio color='primary'/>} label='Yes'/>
                </RadioGroup>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q7']}
                </FormLabel>
                <RadioGroup aria-label='position' name='position' value={question7}
                    defaultValue='top' className={classes.column} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q7.0' control={<Radio color='primary'/>} label='Only Smoke Test'/>
                        <FormControlLabel value='practise_release_strategy_q7.5' control={<Radio color='primary'/>} label='New features and Smoke Test'/>
                        <FormControlLabel value='practise_release_strategy_q7.10' control={<Radio color='primary'/>} label='New features and regression related to changed functionality'/>
                        <FormControlLabel value='practise_release_strategy_q7.15' control={<Radio color='primary'/>} label='New features, Smoke and full Regression Test '/>
                        <FormControlLabel value='practise_release_strategy_q7.20' control={<Radio color='primary'/>} label='New features, Full Regression Set and Non Functional testing (Load & Performance, Security etc.)'/>
                </RadioGroup>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q8']}
                </FormLabel>
                <RadioGroup aria-label='position' name='position' value={question8}
                    defaultValue='top' className={classes.column} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q8.0' control={<Radio color='primary'/>} label='Only Smoke Test'/>
                        <FormControlLabel value='practise_release_strategy_q8.5' control={<Radio color='primary'/>} label='New features and Smoke Test'/>
                        <FormControlLabel value='practise_release_strategy_q8.10' control={<Radio color='primary'/>} label='New features and regression related to changed functionality'/>
                        <FormControlLabel value='practise_release_strategy_q8.15' control={<Radio color='primary'/>} label='New features, Smoke and full Regression Test '/>
                        <FormControlLabel value='practise_release_strategy_q8.20' control={<Radio color='primary'/>} label='New features, Full Regression Set and Non Functional testing (Load & Performance, Security etc.)'/>
                </RadioGroup>
            </FormControl>

            <FormControl component='fieldset' fullWidth={true} className={classes.question_form}>
                <FormLabel component='legend' className={classes.question_title}>
                    {questions[props.lang]['practise_release_strategy_q9']}
                </FormLabel>
                <RadioGroup row aria-label='position' name='position' value={question9}
                    defaultValue='top' className={classes.radio} onChange={onQuestion}>
                        <FormControlLabel value='practise_release_strategy_q9.0' control={<Radio color='primary'/>} label='only Dev and Prod'/>
                        <FormControlLabel value='practise_release_strategy_q9.5' control={<Radio color='primary'/>} label='Dev, Test and Prod'/>
                        <FormControlLabel value='practise_release_strategy_q9.10' control={<Radio color='primary'/>} label='Dev, Test, Pre Prod, Prod, Other'/>
                </RadioGroup>
                <div className={classes.helper}>
                    {helpers[props.lang]['practise_release_strategy_q9']}
                </div>
            </FormControl>

            <div className='discovery_wrapper_btn'>
                <TextField className={classes.textarea} fullWidth={true} value={comments} variant='outlined'
                    onChange={onComments} label={'Add comments to ' + questions[props.lang]['practise_release_strategy']}/>
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
