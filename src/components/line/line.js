import React from 'react';
import {useStyles} from './../helpers/styles';

export default function ColorLine(props) {
    const classes = useStyles();

    return (
        <div className={classes.line_header} style={{marginTop: props.margin}}>

        </div>
    )
}
