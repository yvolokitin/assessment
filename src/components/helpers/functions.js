import {practises} from './practises';

import {questions} from './../translations/questions';
import {recommends} from './../translations/recommends';

/*
 * Generate data for export Excel file format
 */
export function generate_data(lang, type, practise_questions) {
    // console.log('generate_data ' + type);
    var result_dataset = [], value = {};

    // first excel sheet with summary and overview
    if (type === 'overview') {
        if (localStorage.getItem('percent') !== null && localStorage.getItem('level') !== null) {
            value = {amount: '', name: 'Overall Score',
                score: localStorage.getItem('percent') + ', ' + localStorage.getItem('level')}
        } else {
            value = {amount: '', name: 'Overall Score', score: 'N/A, Undefined'}
        }
        result_dataset.push(value);

        for (var p = 0; p < practises.length; p++) {
            value = {'amount': (p + 1), 'name': questions[lang][practises[p].uid]};
            var practise = localStorage.getItem(practises[p].uid);
            if (practise !== null) {
                if (parseInt(practise) >= 0) {
                    value['score'] = practise + ' %';
                } else {
                    value['score'] = 'Excluded';
                }
            } else {
                value['score'] = 'N/A';
            }

            result_dataset.push(value);
        }

        value = {amount: '', name: '', score: ''}
        result_dataset.push(value);

        value = {amount: '', name: 'Name', score: localStorage.getItem('name')}
        result_dataset.push(value);

        value = {amount: '', name: 'Date', score: localStorage.getItem('date')}
        result_dataset.push(value);

    // else means some exact practise, 
    } else {
        if (practise_questions.length > 0) {
            for (var question = 0; question < practise_questions.length; question++) {
                var current_question = questions[lang][practise_questions[question]];
                value = {'number': (question+1), 'question': current_question};
                var local = localStorage.getItem(practise_questions[question]);
                if (local === null) {
                    value['answer'] = 'N/A (Not Answered)'; 
                    value['recommends'] = 'N/A';
                } else {
                    value['answer'] = localStorage.getItem(practise_questions[question] + '_text');
                    value['recommends'] = recommends[lang][practise_questions[question]];
                }
                result_dataset.push(value);
            }

            var practise_comments = type + '_comments';
            var practise_comments_local = localStorage.getItem(practise_comments);
            value = {'number': '', 'question': 'Comments', 'recommends': ''};
            if (practise_comments_local !== null) {
                value['answer'] = practise_comments_local; 
            } else {
                value['answer'] = ''; 
            }
            result_dataset.push(value);
        }
    }

    return result_dataset;
}

/**
 * Remove all answers from Browser's localstorage
 */
export function remove_all_answers_from_localstorage() {
    localStorage.removeItem('percent'); localStorage.removeItem('level');
    localStorage.removeItem('color'); localStorage.removeItem('date');

    // removing practises % results
    for (var prac = 0; prac < practises.length; prac++) {
        // console.log('removing ' + practises[prac].uid);
        localStorage.removeItem(practises[prac].uid);
        localStorage.removeItem(practises[prac].uid + '_comments');

        var current_practise = practises[prac];
        for (var question = 0; question < current_practise.questions.length; question++) {
            var current_question = current_practise.questions[question];
            // console.log('current_question ' + current_question['question']);
            localStorage.removeItem(current_question['question']);
        }
    }

    // completed
}

export function export_json() {
    var result_json = {};

    var project_name = localStorage.getItem('name');
    if (project_name === null) {
        result_json['name'] = 'Unknown';
    } else {
        result_json['name'] = project_name;
    }

    var percent = localStorage.getItem('percent');
    if (percent === null) {
        result_json['percent'] = 'N/A';
    } else {
        result_json['percent'] = percent;
    }

    var level = localStorage.getItem('level');
    if (level === null) {
        result_json['level'] = 'Undefined';
    } else {
        result_json['level'] = level;
    }

    var assest = localStorage.getItem('date');
    if (assest === null) {
        result_json['date'] = '0';
    } else {
        result_json['date'] = assest;
    }

    for (var p = 0; p < practises.length; p++) {
        var json_array_questions = {};
        var practise = localStorage.getItem(practises[p].uid);
        if (practise !== null) {
            json_array_questions[practises[p].uid + '_score'] = practise;
            
            var questions = practises[p].questions;
            for (var question = 0; question < questions.length; question++) {
                var json_question = questions[question]['question'];
                var local_store_question = localStorage.getItem(json_question);

                // console.log(json_question + ' = ' + local_store_question);
                if (local_store_question !== null) {
                    json_array_questions[json_question] = local_store_question;

                } else {
                    json_array_questions[json_question] = '';
                }
            }

            var practise_comments = practises[p].uid + '_comments';
            var practise_comments_local = localStorage.getItem(practise_comments);
            if (practise_comments_local !== null) {
                json_array_questions[practise_comments] = practise_comments_local;
            } else {
                json_array_questions[practise_comments] = '';
            }

            // if practise -> no data to export
            result_json[practises[p].uid] = json_array_questions;
        }
    }

    return result_json;
}
