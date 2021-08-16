import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core';

import {remove} from './../translations/remove';

export default function Delete(props) {
    return (
        <Dialog id='fw_delete_screen_id' open={props.open} fullScreen={false} onClose={() => props.onUpdate('close')}>
            <DialogTitle> {remove[props.lang]['question']} </DialogTitle>
            <DialogContent>
                <DialogContentText> {remove[props.lang]['clarification']} </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.onUpdate('close')} color='primary'> {remove[props.lang]['disagree']} </Button>
                <Button onClick={() => props.onUpdate('remove')} color='primary' autoFocus> {remove[props.lang]['agree']} </Button>
            </DialogActions>
        </Dialog>
    );
}
