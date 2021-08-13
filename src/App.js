import React, { useEffect, useState, useCallback } from 'react';

import { CssBaseline, Menu, MenuItem, Link, Tooltip, Button, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { useHistory, useParams, BrowserRouter, Route, Switch } from 'react-router-dom';

import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LanguageIcon from '@material-ui/icons/Language';
import DeleteIcon from '@material-ui/icons/Delete';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SaveIcon from '@material-ui/icons/Save';

import axios from 'axios';

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

import UnitTest from './components/practise/unittest';
import ReleaseStrategy from './components/practise/releasestrategy';
import Integration from './components/practise/integration';
import Deployment from './components/practise/deployment';
import SmokeRegression from './components/practise/smokeregression';

import {areas} from './components/translations/areas';
import {questions} from './components/translations/questions';
import {menu} from './components/translations/menu';

import {export_json, remove_all_answers_from_localstorage} from './components/helpers/functions';
import {practises, practises_autotest, practises_processes, practises_autoops, practises_cicd, practises_rai} from './components/helpers/practises';

import t_image from './images/t_logo.jpg';

import './App.css';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import AssessmentResults, {AssessmentResultV1} from "./lib/results";

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

// https://automate-dev.telekom.de/assessment/self
// const TOKEN_URL_API = 'https://automate-dev.telekom.de/api/services/tokener';
const TOKEN_URL_API = 'https://automate-dev.telekom.de/api/services/tokener?service_name=token_sala_healthradar&stoken=';

export default function App(props) {
    const [reference, setReference] = useState('');

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

    const [longToken, setLongToken] = useState('');
    const [shortToken, setShortToken] = useState('');
    const [edit, setEdit] = useState('');

    const width = 1080;

    const assessmentResults = new AssessmentResults()

    const onTokenUpdate = useCallback((response) => {
        console.log('!!!!!! RESPONSE RECEIVED !!!!!!!');
        console.table(response);

        if ('data' in response) {
            if ('token' in response.data) {
                setLongToken(response.data['token']);
            }
        }

    }, [ ])

    const onTokenError = useCallback((error) => {
        console.log('********* onTokenError ' + error);

        // for test needs with localhost only
        // setLongToken("NYG8KP51ESMPPG45WC3LFDVZJR7DDWOC1LFZ3SDSSD0QM8FDN4");

    }, [ ])

    useEffect(() => {
        // console.log('Location ' + location);

        if (location.toString().indexOf('benefits') > 0) {
            setReference('/');

        } else {
            setReference('/benefits');
        }

        var local_name = localStorage.getItem('name');
        if (local_name === null || local_name === '') {
            setName('TA HUB');
        } else {
            setName(local_name);
        }

        if (location.search.length > 0) {
            let token = (new URLSearchParams(location.search)).get('automate_self_assessment_token');
            setShortToken(token);

            let hubName = (new URLSearchParams(location.search)).get('automate_self_assessment_hub');
            setName(hubName);

            let editId = (new URLSearchParams(location.search)).get('automate_edit_id');
            setEdit(editId);

            console.log('token ' + token + ', hubName ' + hubName + ', editId ' + editId);

            var requested_url = TOKEN_URL_API + token + '&action=ini&redirect_type=';

            // if editId > 0 -> we have to retrive long token and data
            if (editId !== null && editId > 0) {
                requested_url = requested_url + 'edit&id=' + editId;
            } else { // else just request long token only
                requested_url = requested_url + 'create';
            }

            axios.get(requested_url)
                .then(onTokenUpdate)
                .catch(onTokenError);
        }

        recalculateScore();

    }, [ onTokenUpdate, onTokenError ]);

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
                    setPercent('N/A'); setPercentText('N/A'); setColor('red');

                } else {
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
                    console.table('Save in Database');

                    const jsonResult = export_json();
                    const answers = {}

                    practises.map(p => {
                        return p.uid
                    }).filter(id => {
                        return !!jsonResult[id]
                    }).forEach(id => {
                        answers[id] = jsonResult[id]
                    })

                    const assessmentResult = new AssessmentResultV1()
                        .withName(jsonResult.name ? jsonResult.name : "Unknown")
                        .withPercent(jsonResult.percent ? jsonResult.percent : "0")
                        .withLevel(jsonResult.level ? jsonResult.level : "Unknown")
                        .withAnswers(answers)

                    assessmentResults.add(assessmentResult.toJson()).then(() => {
                        setScreen(STATUS.NONE)
                    }).catch(reason => {
                        console.error(reason)
                    });


                    // longToken.length > 0 -> Send results to Coalition Team
                    if (longToken.length > 0) {
                        console.log('******* Send results to automate-dev');
                        console.table(jsonResult);
                        var post_url = 'https://automate-dev.telekom.de/api/services/tokener?service_name=token_sala_healthradar&token=' + longToken + '&action=use';
                        axios.post(post_url, jsonResult)
                            .then(onTokenUpdate)
                            .catch(onTokenError);
                    }
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
        // console.log('recalculateScore: ' + name + ', percent: ' + percent);
        if ((localStorage.getItem('practise_automation') && localStorage.getItem('practise_unit_test') &&
            localStorage.getItem('practise_smoke_regression') && localStorage.getItem('practise_component_test')) ||
            (localStorage.getItem('practise_automation') && localStorage.getItem('practise_sap'))) {
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <CssBaseline/>

            <div className='header_div'>
                <div className='header_div_left'>
                    <img className='header_div_left_link' src={t_image} alt='T-logo' onClick={handleMenuClick} onContextMenu={(e) => e.preventDefault()}/>

                    <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleMenuClose} TransitionComponent={Fade}>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/'> Home </Link> </MenuItem>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/benefits'> Benifits </Link> </MenuItem>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/autotest'> Test Automation </Link> </MenuItem>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/processes'> Processes and Interaction </Link> </MenuItem>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/autoops'> Automation of Operation </Link> </MenuItem>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/cicd'> Continues Integration and Deployment </Link> </MenuItem>
                        <MenuItem onClick={handleMenuClose}> <Link color='secondary' href='/rai'> Robotics and Artificial Intelligence </Link> </MenuItem>
                    </Menu>

                    <font id='fw_name_id'  onClick={() => setScreen(STATUS.NAME)}>{name}</font>
                </div>
                <div className='header_div_right'>
                    LIFE IS FOR SHARING
                </div>
            </div>

            <div className='body_wrapper'>
                <div className='tabs_wrapper'>
                    <div className='header_div_left'>
                        <LightTooltip title={menu[lang]['help']}>
                            <HelpOutlineRoundedIcon id='fw_help_id'
                                onClick={() => setScreen(STATUS.HELP)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['contacts']}>
                            <MailOutlineIcon id='fw_contact_id'
                                onClick={() => setScreen(STATUS.CONTACTS)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['benefits']}>
                            <Link href={reference} style={{height: '100%', marginLeft: '5%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',}}>
                                <AcUnitIcon id='fw_benefits_id'
                                    className='header_div_right_icon'
                                    color='secondary' fontSize='default'/>
                            </Link>
                        </LightTooltip>
                    </div>
                    <div className='header_div_right'>
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
                                color='secondary' fontSize='default'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['language']}>
                            <LanguageIcon id='fw_language_id'
                                onClick={() => setScreen(STATUS.LANGUAGE)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['import']}>
                            <ImportExportIcon id='fw_import_id'
                                onClick={() => setScreen(STATUS.IMPORT)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['export']}>
                            <SaveIcon id='fw_export_id'
                                onClick={() => setScreen(STATUS.EXPORT)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>
                        <LightTooltip title={menu[lang]['delete']}>
                            <DeleteIcon  id='fw_remove_id'
                                onClick={() => setScreen(STATUS.DELETE)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>

                        <LightTooltip title={menu[lang]['login']}>
                            <AccountCircleIcon  id='fw_login_id'
                                onClick={() => setScreen(STATUS.LOGIN)}
                                className='header_div_right_icon'
                                color='secondary' fontSize='default'/>
                        </LightTooltip>

                    </div>
                </div>

                <BrowserRouter>
                    <Switch>
                        <Route path='/benefits'>
                            <Benefits width={width} lang={lang}/>
                        </Route>

                        <Route path='/autotest'>
                            <div className='tasks_wrapper'>
                                {practises_autotest.map((practise) => 
                                    <Card key={practise.uid}
                                        uid={practise.uid}
                                        title={areas[lang][practise.uid]}
                                        image={practise.image}
                                        width={width}
                                        lang={lang}
                                        onUpdate={onOpen}/>
                                )}
                            </div>
                        </Route>

                        <Route path='/processes'>
                            <div className='tasks_wrapper'>
                                {practises_processes.map((practise) => 
                                    <Card key={practise.uid}
                                        uid={practise.uid}
                                        title={areas[lang][practise.uid]}
                                        image={practise.image}
                                        width={width}
                                        lang={lang}
                                        onUpdate={onOpen}/>
                                )}
                            </div>
                        </Route>

                        <Route path='/autoops'>
                            <div className='tasks_wrapper'>
                                {practises_autoops.map((practise) => 
                                    <Card key={practise.uid}
                                        uid={practise.uid}
                                        title={areas[lang][practise.uid]}
                                        image={practise.image}
                                        width={width}
                                        lang={lang}
                                        onUpdate={onOpen}/>
                                )}
                            </div>
                        </Route>

                        <Route path='/cicd'>
                            <div className='tasks_wrapper'>
                                {practises_cicd.map((practise) => 
                                    <Card key={practise.uid}
                                        uid={practise.uid}
                                        title={areas[lang][practise.uid]}
                                        image={practise.image}
                                        width={width}
                                        lang={lang}
                                        onUpdate={onOpen}/>
                                )}
                            </div>
                        </Route>

                        <Route path='/rai'>
                            <div className='tasks_wrapper'>
                                {practises_rai.map((practise) => 
                                    <Card key={practise.uid}
                                        uid={practise.uid}
                                        title={areas[lang][practise.uid]}
                                        image={practise.image}
                                        width={width}
                                        lang={lang}
                                        onUpdate={onOpen}/>
                                )}
                            </div>
                        </Route>

                        <Route path='/'>
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
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>

            <div className='tasks_waver'>
                <Wave mask='url(#mask)' fill={'#e20074'}>
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
                {'© Deutsche Telekom AG '}
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

            <Results open={screen === STATUS.RESULTS}
                onUpdate={onStatus}
                percentText={percentText}
                percent={percent}
                level={level}
                color={color}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

            <UnitTest open={screen === 'practise_unit_test'}
                onUpdate={onStatus}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

            <ReleaseStrategy open={screen === 'practise_release_strategy'}
                onUpdate={onStatus}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

            <Integration open={screen === 'practise_integration'}
                onUpdate={onStatus}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

            <Deployment open={screen === 'practise_deployment'}
                onUpdate={onStatus}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

            <SmokeRegression open={screen === 'practise_smoke_regression'}
                onUpdate={onStatus}
                points={points}
                width={width} 
                lang={lang}
                uid={uid}/>

        </React.Fragment>
    );
}
