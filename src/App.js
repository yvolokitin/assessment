import React, { useEffect, useState } from 'react';

import { CssBaseline, Link, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DeleteIcon from '@material-ui/icons/Delete';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SaveIcon from '@material-ui/icons/Save';

import Benefits from './components/benefits/benefits';
import Language from './components/header/language';
import Discovery from './components/body/discovery';
import Contacts from './components/body/contacts';
import Delete from './components/body/delete';
import Import from './components/body/import';
import Export from './components/body/export';
import Help from './components/body/help';
import Card from './components/body/card';
import Wave from './components/body/wave';
import Name from './components/body/name';

import Results from './components/results/results';

import {menu} from './components/translations/menu';
import {areas} from './components/translations/areas';

import {export_json, remove_all_answers_from_localstorage} from './components/helpers/functions';
import {practises} from './components/helpers/practises';

import icon_image from './images/assesment.png';

import './App.css';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
})) (Tooltip);

const STATUS = {
    NONE: 0,
    NAME: 1,
    HELP: 2,
    CONTACTS: 3,
    PROFILE: 4,
    LANGUAGE: 5,
    SEARCH: 6,
    DELETE: 7,
    IMPORT: 8,
    EXPORT: 9,
    DISCOVERY: 10,
    RESULTS: 11,
    BENEFITS: 12,
}

export default function App(props) {
    const [screen, setScreen] = useState(STATUS.NONE);
    const [points, setPoints] = useState([]);
    const [image, setImage] = useState('');
    const [lang, setLang] = useState('en');
    const [uid, setUid] = useState('');

    // Current percent, level and color
    const [assestDate, setAssestDate] = useState(0);
    const [percentText, setPercentText] = useState('');
    const [percent, setPercent] = useState(0);
    const [level, setLevel] = useState('');
    const [color, setColor] = useState('');
    const [name, setName] = useState('');

    const width = 1080;

    useEffect(() => {
        console.log('Location ' + window.location);
        recalculateScore();

    }, [ ]);

    function onOpen(open_uid) {
        console.log('App.onOpen -> ' + open_uid);
        setUid(open_uid);

        for (var p = 0; p < practises.length; p++) {
            if (open_uid === practises[p].uid) {
                // console.log(practises[p].questions);
                setPoints(practises[p].questions);
                setImage(practises[p].image);
            }
        }

        setScreen(STATUS.DISCOVERY);
    }

    function onStatus(screen, value) {
        console.log('App.onStatus -> ' + screen + ', value ' + value);

        switch (screen) {
            case 'name':
                setScreen(STATUS.NONE);
                localStorage.setItem('name', value);
                setName(value);
                break;

            case 'language':
                setScreen(STATUS.NONE);
                setLang(value);
                break;

            case 'practise':
                onOpen(value);
                break;

            // once completed dedicated practise
            case 'complete':
                // re-calculate percent, level and color
                localStorage.setItem(value.name, value.percent);
                recalculateScore();
                setScreen(STATUS.NONE);
                break;

            case 'import':
                setName(localStorage.getItem('name'));
                setPercent(localStorage.getItem('percent'));
                setLevel(localStorage.getItem('level'));
                setAssestDate(localStorage.getItem('date'));

                if (localStorage.getItem('percent') === 'N/A') {
                    setPercent('N/A'); setPercentText('N/A');
                    setAssestDate('N/A'); setColor('red');

                } else {
                    setAssestDate(new Date().toLocaleDateString());
                    setPercent(localStorage.getItem('percent'));
                    setPercentText(localStorage.getItem('percent') + ' %');
                }

                recalculateScore();
                setScreen(STATUS.NONE);
                break;

            case 'export':
                if (value === 'PDF') {
                    console.log('Exporting as PDF....');
                    setScreen(STATUS.RESULTS);
                    setTimeout(function() {
                        const input = document.body;
                        // console.table(input);
                        html2canvas(input).then((canvas) => {
                            const imgData = canvas.toDataURL('image/png');
                            const pdf = new jsPDF('p', 'px', 'a4');
                            var width = pdf.internal.pageSize.getWidth();
                            var height = pdf.internal.pageSize.getHeight();
                            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                            pdf.save('discovery.pdf');
                        });
                        setScreen(STATUS.NONE);
                    }, 2000);

                } else if (value === 'JSON') {
                    console.table('Export in JSON');

                    var result_json = export_json();
                    console.log(result_json);

                    const element = document.createElement('a');
                    const file = new Blob([JSON.stringify(result_json)], {type: 'application/json'});
                    element.href = URL.createObjectURL(file);

                    if (name === 'TA HUB') {
                        element.download = 'discovery.json';
                    } else {
                        element.download = name + '_discovery.json';
                    }

                    document.body.appendChild(element);
                    element.click();

                    setScreen(STATUS.NONE);

                } else if (value === 'Excel') {
                    console.table('Export in Excel');
                    setScreen(STATUS.NONE);

                } else if (value === 'Image') {
                    console.table('Export in Image');
                    setScreen(STATUS.NONE);

                } else if (value === 'Database') {
                    console.table('Save in Database, NOT IMPLEMENTED');

                }

                break;

            case 'remove':
                setPercentText('N/A'); setPercent('N/A');
                setLevel('Undefined'); setColor('red');
                setAssestDate(0); setName('TA HUB');

                remove_all_answers_from_localstorage();

                setScreen(STATUS.NONE);
                break;

            default:
                setScreen(STATUS.NONE);
                break;
        }
    }

    function recalculateScore() {
        var whole_percent = 0, counter = 0;

        for (var p = 0; p < practises.length; p++) {
            var tmp_percent = localStorage.getItem(practises[p].uid);
            if (tmp_percent !== null) {
                if (parseInt(tmp_percent) >= 0) {
                    whole_percent = whole_percent + parseInt(tmp_percent);
                    counter = counter + 1;
                }
            }
        }

        if (counter > 0) {
            var final = parseInt(whole_percent/counter);
            localStorage.setItem('percent', final);

            setPercent(final); setPercentText(final + ' %');
            console.log('Percent ' + final);

            if (final > 95) {
                setLevel('Matured'); setColor('#007acc');
                localStorage.setItem('level', 'Matured');
            } else if (final > 75) {
                setLevel('Advanced'); setColor('#009999');
                localStorage.setItem('level', 'Advanced');
            } else if (final > 55) {
                setLevel('Defined'); setColor('#86b300');
                localStorage.setItem('level', 'Defined');
            } else if (final > 30) {
                setLevel('Developing'); setColor('#cc6600');
                localStorage.setItem('level', 'Developing');
            } else {
                setLevel('Beginning'); setColor('#b30000');
                localStorage.setItem('level', 'Beginning');
            }

            var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            localStorage.setItem('date', utc); setAssestDate(utc);

        } else {
            setPercentText('N/A'); setPercent('N/A');
            setLevel('Undefined'); setColor('red');
            setAssestDate(0);

            localStorage.setItem('percent', 'N/A');
            localStorage.setItem('level', 'Undefined');
            localStorage.setItem('color', 'red');
            localStorage.setItem('date', '0');
        }
    }

    const onRefresh = (event) => {
        event.preventDefault();
        window.location.reload();
    }

    return (
        <React.Fragment>
            <CssBaseline/>

            <div className='header_div'>
                <div className='header_div_left'>
                    <img src={icon_image} alt='Assesment logo' onClick={onRefresh} onContextMenu={(e) => e.preventDefault()}/>
                </div>
                <div className='header_div_right'>
                    ASSESMENT
                </div>
            </div>

            <div className='body_wrapper'>
                <div className='tabs_wrapper'>
                    <div className='tabs_wrapper_left'>
                        <LightTooltip title={menu[lang]['help']}>
                            <HelpOutlineRoundedIcon id='fw_help_id'
                                onClick={() => setScreen(STATUS.HELP)}
                                className='header_div_right_icon'
                                color='action' fontSize='large'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['benefits']}>
                            <AcUnitIcon id='fw_benefits_id'
                                onClick={() => setScreen(STATUS.BENEFITS)}
                                className='header_div_right_icon'
                                color='action' fontSize='large'/>
                        </LightTooltip>
                    </div>
                    <div className='tabs_wrapper_right'>
                        <LightTooltip title={menu[lang]['assesment']}>
                            <font id='fw_results_text_id'
                                onClick={() => setScreen(STATUS.RESULTS)}
                                className='header_div_right_text_assesment'>
                                    {percentText}
                            </font>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['assesment']}>
                            <TrendingUpIcon id='fw_results_id'
                                onClick={() => setScreen(STATUS.RESULTS)}
                                className='header_div_right_icon_assesment'
                                color='action' fontSize='large'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['import']}>
                            <ImportExportIcon id='fw_import_id'
                                onClick={() => setScreen(STATUS.IMPORT)}
                                className='header_div_right_icon'
                                color='action' fontSize='large'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['export']}>
                            <SaveIcon id='fw_export_id'
                                onClick={() => setScreen(STATUS.EXPORT)}
                                className='header_div_right_icon'
                                color='action' fontSize='large'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['delete']}>
                            <DeleteIcon  id='fw_remove_id'
                                onClick={() => setScreen(STATUS.DELETE)}
                                className='header_div_right_icon'
                                color='action' fontSize='large'/>
                        </LightTooltip>
                    </div>
                </div>

                <div className='tasks_wrapper'>
                    {practises.map((practise) => 
                        <Card key={practise.uid}
                            uid={practise.uid}
                            title={areas[lang][practise.uid]}
                            image={practise.image}
                            width={width}
                            lang={lang}
                            onUpdate={onOpen}/>
                        )}
                </div>
            </div>

            <div className='tasks_waver'>
                <Wave mask='url(#mask)' fill={'#2596be'}>
                    <defs>
                        <linearGradient id='gradient' gradientTransform='rotate(90)'>
                            <stop offset='0' stopColor='white' />
                            <stop offset='0.5' stopColor='black' />
                        </linearGradient>
                        <mask id='mask'>
                            <rect x='0' y='0' width='2000' height='200' fill='url(#gradient)'/>
                        </mask>
                    </defs>
                </Wave>
            </div>

            <div className='footer_wrapper'>
                {'?? Copyright '}
                {new Date().getFullYear()}
                &nbsp; &#124; &nbsp;
                <Link color='inherit' href={''}> Help &#38; Contact </Link> 
                &nbsp; &#124; &nbsp;
                <Link color='inherit' href='/benefits'> Benefits </Link>
            </div>

            <Name open={screen === STATUS.NAME}
                name={name}
                onUpdate={onStatus}
                width={width} 
                lang={lang}/>

            <Contacts open={screen === STATUS.CONTACTS}
                onUpdate={onStatus}
                width={width} 
                lang={lang}/>

            <Language open={screen === STATUS.LANGUAGE}
                onUpdate={onStatus}
                width={width} 
                lang={lang}/>

            <Help open={screen === STATUS.HELP}
                onUpdate={onStatus}
                width={width} 
                lang={lang}/>

            <Delete open={screen === STATUS.DELETE}
                onUpdate={onStatus}
                width={width} 
                lang={lang}/>

            <Import open={screen === STATUS.IMPORT}
                onUpdate={onStatus}
                width={width} 
                lang={lang}/>

            <Export open={screen === STATUS.EXPORT}
                onUpdate={onStatus}
                name={name}
                width={width} 
                lang={lang}/>

            <Discovery open={screen === STATUS.DISCOVERY}
                onUpdate={onStatus}
                points={points}
                image={image}
                width={width} 
                lang={lang}
                uid={uid}/>

            <Benefits open={screen === STATUS.BENEFITS}
                onUpdate={onStatus}
                points={points}
                image={image}
                width={width} 
                lang={lang}
                uid={uid}/>

            <Results open={screen === STATUS.RESULTS}
                onUpdate={onStatus}
                assestDate={assestDate}
                percentText={percentText}
                percent={percent}
                level={level}
                color={color}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

        </React.Fragment>
    );
}
