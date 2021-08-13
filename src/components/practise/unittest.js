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
import {practise_unit_test_questions} from './../helpers/practises';

import {helpers} from './../translations/helpers';
import {questions} from './../translations/questions';
import {discovery} from './../translations/discovery';

import image from './../../images/unit_tests.png';

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
            case 'practise_unit_test_q1':
                setQuestion1(answer);
                if (answer === 'NA.NA' || answer === '0.No') {
                        setQuestion2(''); setQuestion3(''); setQuestion4('');
                        setQuestion5(''); setQuestion6(''); setQuestion7('');

                        localStorage.setItem('practise_unit_test_q2', '0.Never');
                        localStorage.setItem('practise_unit_test_q3', '0.No');
                        localStorage.setItem('practise_unit_test_q4', '0.No');
                        localStorage.setItem('practise_unit_test_q5', '0.No');
                        localStorage.setItem('practise_unit_test_q6', '0.No');
                        localStorage.setItem('practise_unit_test_q7', '0.No');

                        localStorage.setItem('practise_unit_test_q2_text', 'Never (0%)');
                        localStorage.setItem('practise_unit_test_q3_text', 'No (0%)');
                        localStorage.setItem('practise_unit_test_q4_text', 'No (0%)');
                        localStorage.setItem('practise_unit_test_q5_text', 'No (0%)');
                        localStorage.setItem('practise_unit_test_q6_text', 'No (0%)');
                        localStorage.setItem('practise_unit_test_q7_text', 'No (0%)');
                }
                break;
            case 'practise_unit_test_q2':
                setQuestion2(answer);
                break;
            case 'practise_unit_test_q3':
                setQuestion3(answer);
                break;
            case 'practise_unit_test_q4':
                setQuestion4(answer);
                if (answer === '0.No') {
                    setQuestion5('0.No');
                    localStorage.setItem('practise_unit_test_q5', '0.No');
                }
                break;
            case 'practise_unit_test_q5':
                setQuestion5(answer);
                break;
            case 'practise_unit_test_q6':
                setQuestion6(answer);
                break;
            case 'practise_unit_test_q7':
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
            for (var q = 0; q < practise_unit_test_questions.length; q++) {
                var question = practise_unit_test_questions[q], value = 'na';
                if (localStorage.getItem(question) !== null) {
                    value = localStorage.getItem(question);
                    onAnswer(question, value);
                }
            }

            var user_comments = localStorage.getItem('practise_unit_test_comments');
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
            if (question1 === 'NA.NA') {
                percent = -1;

            } else {
                for (var p = 0; p < points.length; p++) {
                    var answer = localStorage.getItem(points[p]);
                    if (answer === null) {
                        setError('You did not answer following question ' + questions[props.lang][points[p]]);
                        return;
                    } else {
                        // console.log(points[p] + ': ' + localStorage.getItem(points[p] + '_text'));
                        var new_answer = answer.split('.');
                        percent = percent + parseInt(new_answer[0]);
                    }
                }
            }

            // save comments section
            localStorage.setItem('practise_unit_test_comments', comments);
            localStorage.setItem('practise_unit_test', percent);

            props.onUpdate('complete', {'name': 'practise_unit_test', 'percent': percent});

        } else if (action === 'cleanup') {
            localStorage.removeItem(props.uid + '_comments');
            localStorage.removeItem(props.uid);

            for (var point = 0; point < points.length; point++) {
                console.log('removing ' + points[point]);
                localStorage.removeItem(points[point]);
                localStorage.removeItem(points[point] + '_text');
            }

            setQuestion1(''); setQuestion2(''); setQuestion3('');
            setQuestion4(''); setQuestion5(''); setQuestion6('');
            setQuestion7('');
 
            props.onUpdate('close');

        } else {
            console.log('Wrong action on onClose call ' + action);
            setError('Wrong action on onClose call ' + action);
        }
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
            <Title title={questions[props.lang]['practise_unit_test']} src={image} onClose={() => props.onUpdate('close')}/>
            <div className={classes.question_wrapper}>
                <ColorLine/>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q1']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q1' value={question1}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel value='NA.NA' control={<Radio color='primary'/>} label='N/A'/>
                            <FormControlLabel value='0.No' control={<Radio color='primary'/>} label='No'/>
                            <FormControlLabel value='5.Partially' control={<Radio color='primary'/>} label='Partially'/>
                            <FormControlLabel value='15.Yes' control={<Radio color='primary'/>} label='Yes'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q1']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q2']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q2' value={question2}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='0.Never' control={<Radio color='primary'/>} label='Never'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='5.Post-commit and Merge' control={<Radio color='primary'/>} label='Post-commit and Merge'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='10.Pre-commit, Post-commit, Merge' control={<Radio color='primary'/>} label='Pre-commit, Post-commit, Merge'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q2']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q3']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q3' value={question3}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='0.No' control={<Radio color='primary'/>} label='No'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='20.Yes' control={<Radio color='primary'/>} label='Yes'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q3']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q4']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q4' value={question4}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='0.No' control={<Radio color='primary'/>} label='No'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='10.Yes, but target is different per components' control={<Radio color='primary'/>} label='Yes, but target is different per components'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='15.Yes, target is fixed across all components' control={<Radio color='primary'/>} label='Yes, target is fixed across all components'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q4']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q5']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q5' value={question5}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No' || question4 === 'practise_unit_test_q4.0'}
                                value='0.No' control={<Radio color='primary'/>} label='No'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No' || question4 === 'practise_unit_test_q4.0'}
                                value='10.Yes' control={<Radio color='primary'/>} label='Yes'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q5']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q6']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q6' value={question6}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='0.No' control={<Radio color='primary'/>} label='No'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='10.Yes' control={<Radio color='primary'/>} label='Yes'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q6']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <FormControl component='fieldset' className={classes.question_form}>
                    <FormLabel component='legend' className={classes.question_title}>
                        {questions[props.lang]['practise_unit_test_q7']}
                    </FormLabel>
                    <RadioGroup row name='practise_unit_test_q7' value={question7}
                        className={classes.radio} onChange={onQuestion}>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='0.No' control={<Radio color='primary'/>} label='No'/>
                            <FormControlLabel disabled={question1 === 'NA.NA' || question1 === '0.No'}
                                value='20.Yes' control={<Radio color='primary'/>} label='Yes'/>
                    </RadioGroup>
                    <div className={classes.helper}> {helpers[props.lang]['practise_unit_test_q7']} </div>
                </FormControl>
            </div>

            <div className={classes.question_wrapper}>
                <ColorLine margin='13px'/>
            </div>

            <div className={classes.question_wrapper}>
                <TextField className={classes.textarea} fullWidth={true} value={comments} variant='outlined'
                    onChange={onComments} label={'Add comments to ' + questions[props.lang]['practise_unit_test']}/>
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
