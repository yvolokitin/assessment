import React, { useEffect, useState } from 'react';
import {Dialog} from '@material-ui/core';
import ReactExport from 'react-export-excel';

import {generate_data} from './../helpers/functions';
import {practises} from './../helpers/practises';

import {questions} from './../translations/questions';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function Excel(props) {
    const [localPractises, setLocalPractises] = useState([]);

    useEffect(() => {
        if (props.open) {
            var tmpPractises = [];
            for (var p = 0; p < practises.length; p++) {
                if (localStorage.getItem(practises[p].uid) !== null) {
                    // console.log('add ' + practises[p].uid);
                    tmpPractises.push({
                        'practise': practises[p].uid,
                        'questions': practises[p].questions
                    });
                }
            }

            // console.log('tmpPractises.length ' + tmpPractises.length);
            setLocalPractises(tmpPractises);
        }

    }, [props.open, ]);

    return (
        <Dialog id='fw_excel_screen_id' open={props.open}>
            {props.open === true &&
                <ExcelFile hideElement={true} filename='Discovery' fileExtension='xlsx'>
                    <ExcelSheet data={generate_data(props.lang, 'overview')} name='Summary'>
                        <ExcelColumn label='#' value='amount'/>
                        <ExcelColumn label='Practise Name' value='name'/>
                        <ExcelColumn label='Score' value='score'/>
                    </ExcelSheet>

                    {localPractises.map((local) =>
                        <ExcelSheet key={local.practise}
                            data={generate_data(props.lang, local.practise, local.questions)}
                            name={questions[props.lang][local.practise]}>
                                <ExcelColumn label='#' value='number'/>
                                <ExcelColumn label='Question' value='question'/>
                                <ExcelColumn label='Answer' value='answer'/>
                                <ExcelColumn label='Recommendation' value='recommends'/>
                        </ExcelSheet>
                    )}
               </ExcelFile>
            }
        </Dialog>
    );
}
