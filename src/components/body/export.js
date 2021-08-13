import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core';
import {RadioGroup, Radio, FormControlLabel} from '@material-ui/core'; 

import Excel from './excel';

import {useStyles} from './../helpers/styles';

import {save} from './../translations/save';

export default function Export(props) {
    // setExcel is used to open excel export window
    const [excel, setExcel] = React.useState(false);
    const [value, setValue] = React.useState('Excel');

    const classes = useStyles();

    React.useEffect(() => {
        if (props.open) {
            setExcel(false);
        }

    }, [props.open, ]);

    function onExport() {
        if (value === 'Excel') {
            setExcel(true);
        }

        props.onUpdate('export', value);
    }

    function onExportType(event) {
        // console.log('onExport ' + event.target.value);
        setValue(event.target.value);
    }

    return (
        <Dialog id='fw_export_screen_id' open={props.open} fullScreen={false} onClose={() => props.onUpdate('close')}>
            <DialogTitle> {save[props.lang]['question']} </DialogTitle>
            <DialogContent>
                <DialogContentText> {save[props.lang]['clarification']} </DialogContentText>
            </DialogContent>

            <Excel open={excel} lang={props.lang}/>

            <DialogContent>
                <RadioGroup row className={classes.radio} defaultValue='JSON' value={value} onChange={onExportType}>
                    <FormControlLabel value='JSON' control={<Radio color='primary'/>} label='JSON'/>
                    <FormControlLabel value='Excel' control={<Radio color='primary'/>} label='Excel'/>
                    <FormControlLabel disabled={true} value='Image' control={<Radio color='primary'/>} label='Image'/>
                    <FormControlLabel value='PDF' control={<Radio color='primary'/>} label='PDF'/>
                    <FormControlLabel value='Database' control={<Radio color='primary'/>} label='Database'/>
                </RadioGroup>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => props.onUpdate('close')} color='primary'> {save[props.lang]['close']} </Button>
                <Button onClick={() => onExport()} color='primary' autoFocus> {save[props.lang]['export']} </Button>
            </DialogActions>

        </Dialog>
    );
}
