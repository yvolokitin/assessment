import React from 'react';
import {Dialog, Slide, Card, Button} from '@material-ui/core';

import {language} from './../translations/language';

import Title from "./../dialog/title";
import world from './../../images/world.jpg';
import './language.css';

import ru from './../../images/language/ru.png';
import en from './../../images/language/en.png';
import de from './../../images/language/de.png';
//import nl from './../../images/language/nl.png';
//import fr from './../../images/language/fr.png';
//import es from './../../images/language/es.png';
//import it from './../../images/language/it.png';

export const languages = [
    {id: 1, name: 'en', label: 'English (GB, US, CA, IE)', image: en},
    {id: 2, name: 'ru', label: 'Russian / Русский', image: ru},
    {id: 3, name: 'de', label: 'German / Deutsch', image: de},
/*
    {id: 4, name: 'fr', label: 'French / Français', image: fr},
    {id: 5, name: 'es', label: 'Spanish / Espanol', image: es},
    {id: 6, name: 'it', label: 'Italian / Italiano', image: it},
    {id: 7, name: 'nl', label: 'Nederlands / Dutch', image: nl},
*/
];

function LanguageImage(props) {
    return (
        <>
            {(props.selected) ? (
                <div className='language_selector_row_selected'>
                    <div className='language_selector_row_image'>
                        <img src={props.src} alt={props.name} onContextMenu={(e) => e.preventDefault()}/>
                    </div>

                    <div className='language_selector_row_label'>
                        {props.label}
                    </div>
                </div>
            ) : (
                <div className='language_selector_row' onClick={() => props.onLanguageChange(props.name)}>
                    <div className='language_selector_row_image'>
                        <img src={props.src} alt={props.name}/>
                    </div>

                    <div className='language_selector_row_label'>
                        {props.label}
                    </div>
                </div>
            )}
        </>
    );
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='left' ref={ref} {...props} />;
});

export default function Language(props) {
    function onLanguageChange(lang) {
        console.log('Language.onLangChange ' + lang);
        props.onUpdate('language', lang);
    }

    return (
        <Dialog open={props.open} onClose={() => props.onUpdate('language', props.lang)}
            TransitionComponent={Transition} transitionDuration={800}
            fullScreen={props.width<820} fullWidth={true} maxWidth='sm' scroll='body'>

            <Title title={language[props.lang]['title']} className='language_title'
                onClose={() => props.onUpdate('language', props.lang)}/>

            <div className='language_selector_image_map'>
                <img src={world} alt='World Map' onContextMenu={(e) => e.preventDefault()}/>
            </div>

            <div className='language_selector_wrapper'>
                {languages.map((lang) =>
                    <LanguageImage key={lang.name}
                        name={lang.name}
                        src={lang.image}
                        label={lang.label}
                        selected={props.lang === lang.name}
                        onLanguageChange={onLanguageChange}/>
                )}

            </div>

            <div className='language_selector_warning'>
                {language[props.lang]['warning']}
            </div>

            <Card className='language_selector_btn'>
                <Button variant='contained' onClick={() => props.onUpdate('language', props.lang)}>
                    {language[props.lang]['close']}
                </Button>
            </Card>
        </Dialog>
    );
}
