import React from 'react';

import {Radio, RadioGroup} from '@material-ui/core';
import {FormLabel, FormControl, FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {questions} from './../translations/questions';
import {helpers} from './../translations/helpers';
import './question.css';

export default function Question(props) {
    const [color, setColor] = React.useState('');
    const [value, setValue] = React.useState('');
    const [help, setHelp] = React.useState('');

    const handleChange = (event) => {
        console.log('Question ' + props.question + ' ' + event.target.value);
        localStorage.setItem(props.question, event.target.value);
        setColor('#efffef'); setValue(event.target.value);
    };

    React.useEffect(() => {
        var question = localStorage.getItem(props.question);
        console.log('Question ' + props.question + ' = ' + question);

        if (question !== null && question.length > 0) {
            setValue(localStorage.getItem(props.question));
            setColor('#efefef');
        }

        if (helpers[props.lang][props.question] !== undefined) {
            setHelp(helpers[props.lang][props.question]);
        }

    }, [props.lang, props.question, props.title, ]);

    /*
                    <FormControlLabel value='0' control={<Radio color='primary'/>} label='No'/>
                    <FormControlLabel value='1' control={<Radio color='primary'/>} label='Yes'/>
    */
    return (
        <div className='question_wrapper'>
            <FormControl component='fieldset' className='question_form' style={{backgroundColor: color}}>
                <FormLabel component='legend' className='question_title'
                    style={{color: '#446600', fontFamily: 'TeleGrotesk,sans-serif', fontSize: '20px',}}>
                        {questions[props.lang][props.question]}
                </FormLabel>

                <RadioGroup row value={value} className='question_radio' onChange={handleChange}>
                    {props.options.map(
                        (option) => 
                            <FormControlLabel key={option['value']}
                                value={option['value']}
                                label={option['label']}
                                control={<Radio color='primary'/>}/>
                    )}

                </RadioGroup>

                {help.length > 0 &&
                    <div className='question_helper'>
                        {helpers[props.lang][props.question]}
                    </div>
                }
            </FormControl>
        </div>
    );
}

