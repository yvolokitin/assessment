import React, { useEffect, useState, useRef } from 'react';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core';

import {remove_all_answers_from_localstorage} from './../helpers/functions';

import {practises} from './../helpers/practises';
import {json_import} from './../translations/import';

export default function Import(props) {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('');

    const inputFile = useRef(null);

    useEffect(() => {
        if (props.open) {
            setText(json_import[props.lang]['clarification']);
            setColor('black');
        }

    }, [props.open, props.lang]);

    const handleFileUpload = e => {
        const { files } = e.target;

        if (files && files.length) {
            var fileName = files[0].name;

            var reader = new FileReader();
            reader.onload = function(event) {
                var json_file;
                try {
                    json_file = JSON.parse(event.target.result);

                } catch(e) {
                    setText('Could not load and parse selected JSON file ('
                        + fileName + '). Please, use another one OR try one more time.');
                    setColor('red');
                    return;
                }

                // json validation, should be implemented :-)
                if (json_file['name'] === undefined ||
                    json_file['percent'] === undefined ||
                    json_file['level'] === undefined ||
                    json_file['date'] === undefined) {
                        setText('Validation error for one of the key properties: name, percent, level or date. '
                            + 'Please, export your results once again or edit JSON file according to required format.');
                        setColor('red');

                } else {
                    remove_all_answers_from_localstorage();

                    localStorage.setItem('name', json_file['name']);
                    localStorage.setItem('percent', json_file['percent']);
                    localStorage.setItem('level', json_file['level']);
                    localStorage.setItem('date', json_file['date']);

                    for (var p = 0; p < practises.length; p++) {
                        var practise = practises[p].uid;
                        // console.log('Validation ' + practise + ', json_file[practise]: ' + json_file[practise]);

                        if (json_file[practise] !== undefined) {
                            var practise_score = practise + '_score';
                            // console.log(practise_score + ' = ' + json_file[practise][practise_score]);
                            localStorage.setItem(practise, json_file[practise][practise_score]);
                            localStorage.setItem(practise_score, json_file[practise][practise_score]);

                            for (var question = 0; question < practises[p].questions.length; question++) {
                                var current_question = practises[p].questions[question]['question'];
                                // console.log(current_question + ' = ' + json_file[practise][current_question]);
                                var options = practises[p].questions[question]['options'];

                                var assigned_option = '';
                                for (var option = 0; option < options.length; option++) {
                                    var current_option = options[option]['value'];
                                    if (current_option === json_file[practise][current_question]) {
                                        assigned_option = json_file[practise][current_question];
                                        break;
                                    }
                                }

                                if (assigned_option.length > 0) {
                                    localStorage.setItem(current_question, json_file[practise][current_question]);
                                }
                            }

                            var practise_comments = practise + '_comments';
                            console.log(practise_comments + ' = ' + json_file[practise][practise_comments]);
                            localStorage.setItem(practise_comments, json_file[practise][practise_comments]);
                        }
                    }

                    setText('All is good, JSON (' + fileName + ') is succesfully imported to your '
                        + 'Browser\'s LocalStorage. Results for ' + json_file['name']
                        + ' should be available for you now.');
                    setColor('green');
                }
            };

            reader.onerror = function(event) {
                setText('onError ' + event); setColor('red');
                console.log('onError ' + event);
            }

            reader.readAsText(files[0]);
        }
    };

    function onClose() {
        if (color === 'green') {
            props.onUpdate('import');

        } else {
            props.onUpdate('close');
        }
    }

    return (
        <Dialog id='fw_import_screen_id' open={props.open} fullScreen={false} onClose={() => onClose()}>
            <DialogTitle> {json_import[props.lang]['question']} </DialogTitle>

            <DialogContent style={{'color': color}}>
                <DialogContentText style={{'color': color}}> {text} </DialogContentText>
            </DialogContent>

            <DialogContent>
                <input style={{display: 'none'}} ref={inputFile} onChange={handleFileUpload} type='file'/>
                <Button onClick={() => inputFile.current.click()} color='primary'> UPLOAD </Button>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => onClose()} color='primary'> {json_import[props.lang]['close']} </Button>
            </DialogActions>
        </Dialog>
    );
}
