import React from 'react';
import {Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField, Button} from '@material-ui/core';

import {name} from './../translations/name';

export default function Name(props) {
    const [project, setProject] = React.useState('');

    const onNameChange = (event) => {
        console.log(event.target.value);
        setProject(event.target.value);
    };

    function onClose(value) {
        if (value === 'close') {
            props.onUpdate('close');

        } else {
            if (project.length > 0 && project.length < 128) {
                props.onUpdate('name', project);

            } else {
                alert('Please, enter proper name length');
            }
        }
    }

    return (
        <Dialog id='fw_name_screen_id' open={props.open} fullScreen={props.fullScreen} transitionDuration={700} scroll='body'>
            <DialogTitle> {name[props.lang]['title']} </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {name[props.lang]['text']}
                </DialogContentText>

                <TextField autoFocus
                    defaultValue={props.name}
                    margin='dense'
                    id='name'
                    label={name[props.lang]['please']}
                    type='name'
                    fullWidth
                    onChange={onNameChange}/>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => onClose('save')} color='primary'> {name[props.lang]['save']} </Button>
                <Button onClick={() => onClose('close')} color='primary'> {name[props.lang]['close']} </Button>
            </DialogActions>
        </Dialog>
    );
}
