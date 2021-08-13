import practise_requirements_image from './../../images/requirements.png';
import practise_code_quality_image from './../../images/code_quality_review.png';
import practise_release_strategy_image from './../../images/gs1_global_tree_icon_graphic.png';

import practise_testcase_management_image from './../../images/test_management.png';

import practise_defect_management_image from './../../images/defects.png';
import practise_deployment_image from './../../images/deployment.png';
import practise_integration_image from './../../images/integration.png';

import practise_docs_logs_image from './../../images/architecture.png';
import practise_automation_image from './../../images/automation.png';
import practise_unit_test_image from './../../images/unit_tests.png';
import practise_component_test_image from './../../images/component.png';

import practise_smoke_regression_image from './../../images/system_test.png';
import practise_nft_image from './../../images/non_functional.png';
import practise_sap_image from './../../images/sap_image.jpg';

import monitoring_image from './../../images/monitoring_icon.jpg';
import operation_image from './../../images/operation_icon.jpg';
import exploration_image from './../../images/exploration.png';
import release_on_demand_image from './../../images/releases.jpg';

import robotics_image from './../../images/robot.jpg';
import practise_safe_deployment_image from './../../images/safe_deployment.png';
import practise_safe_integration_image from './../../images/safe_integration.png';

export const practise_automation_questions = [
    {
        'question': 'practise_automation_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_automation_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_automation_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_automation_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_automation_q5',
        'options': [
            {'value': '0.Manually', 'label': 'Manually'},
            {'value': '10.DB', 'label': 'DataBase Snapshot / Dump'},
            {'value': '20.REST', 'label': 'Rest API calls / Automatically via UI'},
            {'value': '15.MIX', 'label': 'Mix of DB / Rest / UI (automated)'},
        ]
    },
    {
        'question': 'practise_automation_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_automation_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'}]
    },
];

export const practise_unit_test_questions = [
    {
        'question': 'practise_unit_test_q1',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Partially', 'label': 'Partially'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_unit_test_q2',
        'options': [
            {'value': '0.Never', 'label': 'N/A'},
            {'value': '10.Post-commit and Merge', 'label': 'Post-commit, Merge'},
            {'value': '15.Pre-commit, Post-commit, Merge', 'label': 'Pre-commit, Post-commit, Merge'},
        ]
    },
    {
        'question': 'practise_unit_test_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_unit_test_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes, but target is different per components', 'label': 'Yes, but target is different per components'},
            {'value': '15.Yes, target is fixed across all components', 'label': 'Yes, target is fixed across all components'},
        ]
    },
    {
        'question': 'practise_unit_test_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_unit_test_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_unit_test_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Partially', 'label': 'Partially'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_component_test_questions = [
    {
        'question': 'practise_component_test_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_component_test_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_smoke_regression_questions = [
    {
        'question': 'practise_smokeregression_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_smokeregression_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes, ~10-49%', 'label': 'Yes, ~10-49%'},
            {'value': '10.Yes, ~50-90%', 'label': 'Yes, ~50-90%'},
            {'value': '15.Yes, 100%', 'label': 'Yes, 100%'},
        ]
    },
    {
        'question': 'practise_smokeregression_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Per deployment', 'label': 'Per deployment'},
            {'value': '5.Per merge request', 'label': 'Per merge request'},
            {'value': '10.Per-commit or at least daily', 'label': 'Per-commit or at least daily'},
        ]
    },
    {
        'question': 'practise_smokeregression_q4',
        'options': [
            {'value': '0.N/A', 'label': 'N/A'},
            {'value': '3.> 1 hour', 'label': 'more 1 hour'},
            {'value': '4.< 1 hour', 'label': 'less 1 hour'},
            {'value': '5.< 5 min', 'label': 'less 5 min'},
        ]
    },
    {
        'question': 'practise_smokeregression_q5',
        'options': [
            {'value': '0.Yes', 'label': 'Yes'},
            {'value': '10.No', 'label': 'No'},
        ]
    },
    {
        'question': 'practise_smokeregression_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },

    {
        'question': 'practise_smokeregression_q7',
        'options': [
            {'value': '0.N/A', 'label': 'N/A'},
            {'value': '1.Per Major Release', 'label': 'Per Major Release'},
            {'value': '2.Per any Release', 'label': 'Per any Release'},
            {'value': '5.Per Delivery', 'label': 'Per Delivery'},
            {'value': '7.Daily', 'label': 'Daily'},
            {'value': '10.Per Commit', 'label': 'Per Commit'},
        ]
    },
    {
        'question': 'practise_smokeregression_q8',
        'options': [
            {'value': '0.No automated Regression', 'label': 'No'},
            {'value': '5.< 30%', 'label': '< 30%'},
            {'value': '10.30%-70%', 'label': '30%-80%'},
            {'value': '15.>=80%', 'label': '>=80%'},
        ]
    },
    {
        'question': 'practise_smokeregression_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_smokeregression_q10',
        'options': [
            {'value': '0.N/A', 'label': 'N/A'},
            {'value': '2.> 12h', 'label': 'more 12h'},
            {'value': '5.< 12h', 'label': 'less 12h'},
            {'value': '10.< 4h', 'label': 'less 4h'},
        ]
    },
];

export const practise_code_quality_questions = [
    {
        'question': 'practise_code_quality_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_code_quality_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_testcase_management_questions = [
    {
        'question': 'practise_testcase_management_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q10',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q11',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_testcase_management_q12',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_defect_management_questions = [
    {
        'question': 'practise_defect_management_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_defect_management_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },

    // 'practise_defect_management_q9',  -> temporary excluded
    // 'practise_defect_management_q10', -> temporary excluded
];

// requires advansed questions -> handled separatly
export const practise_release_strategy_questions = [
    {
        'question': 'practise_release_strategy_q1',
        'options': [
            {'value': '0.2-6 months', 'label': '2-6 months'},
            {'value': '1.1-2 months', 'label': '1-2 months'},
            {'value': '3.0.5-1 month', 'label': '0.5-1 month'},
            {'value': '5.1-2 weeks', 'label': '1-2 weeks'},
            {'value': '10.1-5 days', 'label': '1-5 days'},
        ]
    },
    {
        'question': 'practise_release_strategy_q2',
        'options': [
            {'value': '0.5-10 weeks', 'label': '5-10+ weeks'},
            {'value': '2.1-4 weeks', 'label': '1-4 weeks'},
            {'value': '5.2-5 days', 'label': '2-5 days'},
            {'value': '8.1-2 days', 'label': '1-2 days'},
            {'value': '10.1 day', 'label': 'within or less than one day'},
        ]
    },
    {
        'question': 'practise_release_strategy_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_release_strategy_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_release_strategy_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_release_strategy_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_release_strategy_q7',
        'options': [
            {'value': '0.Nothing', 'label': 'Nothing'},
            {'value': '1.Smoke test', 'label': 'Smoke test'},
            {'value': '2.New Features', 'label': 'New Features'},
            {'value': '3.Smoke and New Features', 'label': 'Smoke and New Features'},
            {'value': '8.Full Regression Test', 'label': 'Full Regression Test'},
            {'value': '10.Full Regression Test and NFT', 'label': 'Full Functional Regression and Non Functional Test (LaP, secirity, stability etc.)'},
        ]
    },
    {
        'question': 'practise_release_strategy_q8',
        'options': [
            {'value': '0.Nothing', 'label': 'Nothing'},
            {'value': '1.Smoke test', 'label': 'Smoke test'},
            {'value': '2.New Features', 'label': 'New Features'},
            {'value': '3.Smoke and New Features', 'label': 'Smoke and New Features'},
            {'value': '8.Full Regression Test', 'label': 'Full Regression Test'},
            {'value': '10.Full Regression Test and NFT', 'label': 'Full Functional Regression and Non Functional Test (LaP, secirity, stability etc.)'},
        ]
    },
    {
        'question': 'practise_release_strategy_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Pre Prod and Prod only', 'label': 'Pre Prod and Prod only'},
            {'value': '5.Dev, Pre Prod, Prod', 'label': 'Dev, Pre Prod, Prod'},
            {'value': '10.Dev, Test, Pre Prod, Prod, etc.', 'label': 'Dev, Test, Pre Prod, Prod, etc.'},
        ]
    },
    {
        'question': 'practise_release_strategy_q14',
        'options': [
            {'value': '0.None of them', 'label': 'None of them'},
            {'value': '5.Pre Prod', 'label': 'Pre Prod'},
            {'value': '10.Dev, Test, Pre Prod', 'label': 'Dev, Test, Pre Prod'},
        ]
    },

    // 'practise_release_strategy_q10', 'practise_release_strategy_q11', 'practise_release_strategy_q12',
    // 'practise_release_strategy_q13', 'practise_release_strategy_q14', 'practise_release_strategy_q15',
    // 'practise_release_strategy_q16',
];

export const practise_integration_questions = [
    {
        'question': 'practise_integration_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q10',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q11',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_integration_q12',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_safe_integration_questions = [
    {
        'question': 'practise_safe_integration_q1',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): Builds are run fewer than once per iteration and/or are completely manual.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Builds are run once per iteration and are partially automated. Dev branches are open for a month or more and builds break often.'},
            {'value': '10.Walk', 'label': 'Walk (10): Automated builds run once a day. Broken builds are corrected in 2-4 hours. Manual unit tests are run against each build. Dev branches are open for 2-4 weeks.'},
            {'value': '15.Run', 'label': 'Run (15): Builds run automatically upon code commit; broken builds are corrected within 1 hour; automated unit tests are run against each build; dev branches are merged to trunk every iteration. '},
            {'value': '25.Fly', 'label': 'Fly (25): Builds run on every commit; builds include static code analysis and security testing; gated commits prevent defects from entering the version control; dev branches are merged to trunk on every commit.'}
        ]
    },
    {
        'question': 'practise_safe_integration_q2',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): The team backlog does not exist or is not used to manage daily work.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Stories are either incomplete or too verbose; unit tests are generally not written; peer reviews are not conducted.'},
            {'value': '10.Walk', 'label': 'Walk (10): Stories are complete; most changes have unit tests; peer reviews are usually conducted.'},
            {'value': '15.Run', 'label': 'Run (15): Code is checked in daily; unit test coverage is 80%+; peer reviews are always conducted.'},
            {'value': '25.Fly', 'label': 'Fly (25): Code is checked in multiple times per day; tests are written before code (TDD); pair work and other Built-in quality practices are the norm.'}
        ]
    },
    {
        'question': 'practise_safe_integration_q3',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): No staging environment exists or we use a test environment for staging.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Features are deployed manually to a staging environment once every PI.'},
            {'value': '10.Walk', 'label': 'Walk (10): Features are deployed to a staging environment once per month and demonstrated to Product Management.'},
            {'value': '15.Run', 'label': 'Run (15): Features and infrastructure are auto-deployed to a staging environment every iteration and accepted by Product Management.'},
            {'value': '25.Fly', 'label': 'Fly (25): Stories, changes and infrastructure are auto-deployed to a staging environment, validated, and immediately proceed to deployment.'}
        ]
    },
    {
        'question': 'practise_safe_integration_q4',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): No staging environment exists or we use a test environment for staging.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Features are deployed manually to a staging environment once every PI.'},
            {'value': '10.Walk', 'label': 'Walk (10): Features are deployed to a staging environment once per month and demonstrated to Product Management.'},
            {'value': '15.Run', 'label': 'Run (15): Features and infrastructure are auto-deployed to a staging environment every iteration and accepted by Product Management.'},
            {'value': '25.Fly', 'label': 'Fly (25): Stories, changes and infrastructure are auto-deployed to a staging environment, validated, and immediately proceed to deployment.'}
        ]
    },
];

export const practise_deployment_questions = [
    {
        'question': 'practise_deployment_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_deployment_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_safe_deployment_questions = [
    {
        'question': 'practise_safe_deployment_q1',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): Features are deployed to production every 3+ months; deployments are manual and painful; "deployed" implies "released".'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Features are deployed to production at PI boundaries; deployments are mostly manual; "deployed" implies "released".'},
            {'value': '10.Walk', 'label': 'Walk (10): Features are deployed to production every iteration; deployments are mostly automated; some features can be deployed without being released.'},
            {'value': '15.Run', 'label': 'Run (15): Features are deployed to production every iteration and fully automated through the pipeline; dark releases are common.'},
            {'value': '25.Fly', 'label': 'Fly (25): Features are deployed continuously throughout each iteration; Dev teams initiate deployments directly via pipeline tools; release is completely decoupled from deployment; dark releases are the norm.'}
        ]
    },
    {
        'question': 'practise_safe_deployment_q2',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): No feature level production monitoring exists; only infrastructure monitoring is in place.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Features only log faults and exceptions; analyzing events involves manually correlating logs from multiple systems.'},
            {'value': '10.Walk', 'label': 'Walk (10): Features log faults, user activity and other events; data is analyzed manually to investigate incidents and measure business value of Features.'},
            {'value': '15.Run', 'label': 'Run (15): Full-stack monitoring is in place; events can be correlated throughout the architecture; data is presented through system-specific dashboards.'},
            {'value': '25.Fly', 'label': 'Fly (25): Federated monitoring platform provides one-stop access to full-stack insights; data is used to gauge system performance and business value.'}
        ]
    },
    {
        'question': 'practise_safe_deployment_q3',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): Customers find issues before we do; resolving high priority issues is time consuming and reactive; customers have low confidence in our ability to recover from production issues.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Operations owns production issues; development involvement requires significant escalation; teams blame each other in times of crisis.'},
            {'value': '10.Walk', 'label': 'Walk (10): Development and Operations collectively own the incident resolution process; recovering from major incidents is reactive but a team effort.'},
            {'value': '15.Run', 'label': 'Run (15): Our monitoring systems detect most issues before our customers do; Dev and Ops work proactively to recover from major incidents.'},
            {'value': '25.Fly', 'label': 'Fly (25): Our monitoring systems alert us to dangerous conditions based on carefully-designed tolerance thresholds; Developers are responsible for supporting their own code and proactively issue fixes through the pipeline before users are affected.'}
        ]
    },
    {
        'question': 'practise_safe_deployment_q4',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): Deployments are not verified in production before being released to end users.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Deployments are verified with manual smoke tests and/or user acceptance testing (UAT); we address deployment issues within a stated grace/triage/warranty period; we often correct issues directly in production.'},
            {'value': '10.Walk', 'label': 'Walk (10): Deployments are verified with manual tests prior to releasing to end users; rolling back is painful or impossible; we do not make changes directly in production.'},
            {'value': '15.Run', 'label': 'Run (15): Deployments are verified using automated smoke tests, synthetic transactions and penetration tests prior to release; we can easily roll back or fix forward to recover from failed deployments.'},
            {'value': '25.Fly', 'label': 'Fly (25): Automated production tests run on an ongoing basis and feed monitoring systems; failed deployments can be rolled back instantly or fixed forward through the entire pipeline.'}
        ]
    },
];

export const practise_requirements_questions = [
    {
        'question': 'practise_requirements_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_requirements_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_requirements_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_requirements_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_requirements_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_requirements_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_requirements_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_docs_logs_questions = [
    {
        'question': 'practise_docs_logs_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_docs_logs_q10',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'},
        ]
    },
];

export const practise_non_functional = [
    {
        'question': 'practise_non_functional_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_non_functional_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}]
    },
];

export const practise_sap_questions = [
    {
        'question': 'practise_sap_q1',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_sap_q2',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.Manual', 'label': 'Manual'},
            {'value': '5.Automatic', 'label': 'Automatic'}]
    },
    {
        'question': 'practise_sap_q3',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_sap_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_sap_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes, ~10-49%', 'label': 'Yes, ~10-49%'},
            {'value': '3.Yes, ~50-90%', 'label': 'Yes, ~50-90%'},
            {'value': '5.Yes, 100%', 'label': 'Yes, 100%'},
        ]
    },
    {
        'question': 'practise_sap_q6',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.Manual', 'label': 'Manual'},
            {'value': '5.SolMan_Transport', 'label': 'SolMan / Transport'}]
    },
    {
        'question': 'practise_sap_q7',
        'options': [
            {'value': '0.N/A', 'label': 'N/A'},
            {'value': '3.> 1 hour', 'label': 'more 1 hour'},
            {'value': '4.< 1 hour', 'label': 'less 1 hour'},
            {'value': '5.< 5 min', 'label': 'less 5 min'},
        ]
    },
    {
        'question': 'practise_sap_q8',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.Yes', 'label': 'Yes'},
            {'value': '5.No', 'label': 'No'},
        ]
    },
    {
        'question': 'practise_sap_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '8.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_sap_q10',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_sap_q11',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_sap_q12',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_sap_q13',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '8.Yes', 'label': 'Yes'},
        ]
    },

    {
        'question': 'practise_sap_q14',
        'options': [
            {'value': '0.N/A', 'label': 'N/A'},
            {'value': '1.Per Major Release', 'label': 'Per Major Release'},
            {'value': '2.Per any Release', 'label': 'Per any Release'},
            {'value': '3.Per Delivery', 'label': 'Per Delivery'},
            {'value': '4.Daily', 'label': 'Daily'},
            {'value': '5.Per Commit', 'label': 'Per Commit'},
        ]
    },
    {
        'question': 'practise_sap_q15',
        'options': [
            {'value': '0.No automated Regression', 'label': 'No'},
            {'value': '3.< 30%', 'label': '< 30%'},
            {'value': '6.30%-70%', 'label': '30%-80%'},
            {'value': '8.>=80%', 'label': '>=80%'},
        ]
    },
    {
        'question': 'practise_sap_q16',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '8.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_sap_q17',
        'options': [
            {'value': '0.N/A', 'label': 'N/A'},
            {'value': '3.> 12h', 'label': 'more 12h'},
            {'value': '6.< 12h', 'label': 'less 12h'},
            {'value': '8.< 4h', 'label': 'less 4h'},
        ]
    },
];

export const practise_monitoring_questions = [
    {
        'question': 'practise_monitoring_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'}
        ]
    },
    {
        'question': 'practise_monitoring_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}
        ]
    },
    {
        'question': 'practise_monitoring_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}
        ]
    },
    {
        'question': 'practise_monitoring_q4',
        'options': [
            {'value': '0.0', 'label': '0 Points (Nothing)'},
            {'value': '5.5', 'label': '5 Points'},
            {'value': '10.10', 'label': '10 Points'},
            {'value': '15.15', 'label': '15 Points (Optimal)'}
        ]
    },
    {
        'question': 'practise_monitoring_q5',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'}
        ]
    },
    {
        'question': 'practise_monitoring_q6',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}
        ]
    },
    {
        'question': 'practise_monitoring_q7',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}
        ]
    },
    {
        'question': 'practise_monitoring_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '10.Yes', 'label': 'Yes'}
        ]
    },
];

export const practise_operation_questions = [
    {
        'question': 'practise_operation_q1',
        'options': [
            {'value': '1.Retirement', 'label': 'Retirement'},
            {'value': '1.Cloud', 'label': 'Cloud'},
            {'value': '1.Same state', 'label': 'Same state'}]
    },
    {
        'question': 'practise_operation_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '6.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q4',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '6.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q5',
        'options': [
            {'value': '0.Nothing', 'label': 'Nothing'},
            {'value': '3.Tool', 'label': 'Explain which Tool'}]
    },
    {
        'question': 'practise_operation_q6',
        'options': [
            {'value': '0.0 Points', 'label': '0 Points'},
            {'value': '1.Point', 'label': '1 Point'}]
    },
    {
        'question': 'practise_operation_q7',
        'options': [
            {'value': 'NA.NA', 'label': 'N/A'},
            {'value': '0.App/SFTP Server', 'label': 'APP/SFTP Server'},
            {'value': '3.Lieferserver', 'label': 'Lieferserver'}]
    },
    {
        'question': 'practise_operation_q8',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q9',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q10',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q11',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q12',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '3.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q13',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q14',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '3.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q15',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q16',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '3.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q17',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '8.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q18',
        'options': [
            {'value': '0.No Solution', 'label': 'No Solution'},
            {'value': '3.Medium Solution', 'label': 'Medium Solution'},
            {'value': '6.Optimal Solution', 'label': 'Optimal Solution'}]
    },
    {
        'question': 'practise_operation_q19',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q20',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '7.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q21',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '3.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q22',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q23',
        'options': [
            {'value': '0.No', 'label': 'No Scripts'},
            {'value': '2.Yes', 'label': 'Yes, some scripts'}]
    },
    {
        'question': 'practise_operation_q24',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '6.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q25',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q26',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '3.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q27',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes', 'label': 'Yes (e.g. Telesec, Darwin, Patrol, Browser, Cron job script)'}]
    },
    {
        'question': 'practise_operation_q28',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '5.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q29',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '1.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q30',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q31',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '2.Yes', 'label': 'Yes'}]
    },
    {
        'question': 'practise_operation_q32',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '3.Yes', 'label': 'Yes'}]
    },
];


export const practise_exploration_questions = [
    {
        'question': 'practise_exploration_q1',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): Ideas are vague or not defined.'},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Ideas are defined (example: as epics) but do not include hypothesis statements.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Some ideas are expressed as hypothesis statements with measurable outcomes.'},
            {'value': '8.Run', 'label': 'Run (7-8): Most ideas are expressed as hypothesis statements with measurable outcomes and include MVPs.'},
            {'value': '12.Fly', 'label': 'Fly (9-10): All ideas are expressed as hypothesis statements with measurable outcomes and include MVPs.'}
        ]
    },
    {
        'question': 'practise_exploration_q2',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): Architecture is monolithic and fragile; it is difficult to change and involves managing complex dependencies across many components and systems. '},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Architecture is predominantly monolithic but some applications and systems are loosely coupled.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Architectures is mostly decoupled but doesn\'t allow Release on Demand.'},
            {'value': '8.Run', 'label': 'Run (7-8): Architecture is aligned around value delivery and with few dependencies across components and systems. '},
            {'value': '12.Fly', 'label': 'Fly (9-10): Architecture is built for Release on Demand and operability.'}
        ]
    },
    {
        'question': 'practise_exploration_q3',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): Product Management roles and responsibilities are not defined or followed.'},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Product Management creates requirements in large batches with little customer or development collaboration.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Product Management collaborates with business-side or development-side experts, but not both, when defining requirements.'},
            {'value': '8.Run', 'label': 'Run (7-8): Product Management regularly collaborates with business-side, development-side, and operation-side experts but does not define MMFs.'},
            {'value': '12.Fly', 'label': 'Fly (9-10): Product Management always collaborates with business-side, development-side, and operation-side experts and defines MMFs.'}
        ]
    },
    {
        'question': 'practise_exploration_q4',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): The program backlog does not exist or is not shared. '},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): The program backlog exists but the Features are incomplete and prioritization is an afterthought. '},
            {'value': '6.Walk', 'label': 'Walk (5-6): The program backlog contains fully defined features but are not prioritized using weighted shortest job first (WSJF).'},
            {'value': '8.Run', 'label': 'Run (7-8): Features in the program backlog are complete, prioritized using WSJF and calibrated to the delivery capacity of the agile release train (ART).'},
            {'value': '12.Fly', 'label': 'Fly (9-10): The program backlog is a collection of Minimum Marketable Features created using Behavior Driven Development (BDD) and prioritized using WSJF.'}
        ]
    },
    {
        'question': 'practise_exploration_q5',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): Builds are run fewer than once per iteration and/or are completely manual.'},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Builds are run once per iteration and are partially automated. Dev branches are open for a month or more and builds break often.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Automated builds run once a day. Broken builds are corrected in 2-4 hours. Manual unit tests are run against each build. Dev branches are open for 2-4 weeks.'},
            {'value': '8.Run', 'label': 'Run (7-8): Builds run automatically upon code commit; broken builds are corrected within 1 hour; automated unit tests are run against each build; dev branches are merged to trunk every iteration. '},
            {'value': '13.Fly', 'label': 'Fly (9-10): Builds run on every commit; builds include static code analysis and security testing; gated commits prevent defects from entering the version control; dev branches are merged to trunk on every commit."'}
        ]
    },
    {
        'question': 'practise_exploration_q6',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): The team backlog does not exist or is not used to manage daily work.'},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Stories are either incomplete or too verbose; unit tests are generally not written; peer reviews are not conducted.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Stories are complete; most changes have unit tests; peer reviews are usually conducted.'},
            {'value': '8.Run', 'label': 'Run (7-8): Code is checked in daily; unit test coverage is 80%+; peer reviews are always conducted.'},
            {'value': '13.Fly', 'label': 'Fly (9-10): Code is checked in multiple times per day; tests are written before code (TDD); pair work and other Built-in quality practices are the norm.'}
        ]
    },
    {
        'question': 'practise_exploration_q7',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): No staging environment exists or we use a test environment for staging.'},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Features are deployed manually to a staging environment once every PI.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Features are deployed to a staging environment once per month and demonstrated to Product Management.'},
            {'value': '8.Run', 'label': 'Run (7-8): Features and infrastructure are auto-deployed to a staging environment every iteration and accepted by Product Management.'},
            {'value': '13.Fly', 'label': 'Fly (9-10): Stories, changes and infrastructure are auto-deployed to a staging environment, validated, and immediately proceed to deployment.'}
        ]
    },
    {
        'question': 'practise_exploration_q8',
        'options': [
            {'value': '2.Sit', 'label': 'Sit (1-2): No staging environment exists or we use a test environment for staging.'},
            {'value': '4.Crawl', 'label': 'Crawl (3-4): Features are deployed manually to a staging environment once every PI.'},
            {'value': '6.Walk', 'label': 'Walk (5-6): Features are deployed to a staging environment once per month and demonstrated to Product Management.'},
            {'value': '8.Run', 'label': 'Run (7-8): Features and infrastructure are auto-deployed to a staging environment every iteration and accepted by Product Management.'},
            {'value': '13.Fly', 'label': 'Fly (9-10): Stories, changes and infrastructure are auto-deployed to a staging environment, validated, and immediately proceed to deployment.'}
        ]
    },
];

export const practise_release_on_demand_questions = [
    {
        'question': 'practise_release_on_demand_q1',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): Features are never evaluated post-release.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Features are sometimes evaluated using subjective information and/or unilateral opinions.'},
            {'value': '10.Walk', 'label': 'Walk (10): Hypotheses are evaluated using objective measures but actions are heavily influenced by corporate politics.'},
            {'value': '15.Run', 'label': 'Run (15): Hypotheses are objectively evaluated; pivot-or-persevere decisions are made without mercy or guilt.'},
            {'value': '25.Fly', 'label': 'Fly (25): Continuous learning and experimentation are ingrained in the DNA of the organization.'}
        ]
    },
    {
        'question': 'practise_release_on_demand_q2',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): We don’t define or measure the value of Features.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): We’ve defined what "value" is but don’t know how to measure it.'},
            {'value': '10.Walk', 'label': 'Walk (10): We capture qualitative feedback from the business about the value of our Features. '},
            {'value': '15.Run', 'label': 'Run (15): We capture qualitative and quantitative feedback from the business and our monitoring systems about the value of our features.'},
            {'value': '25.Fly', 'label': 'Fly (25): We aggregate the quantitative and qualitative feedback to objectively validate the original hypothesis and inform pivot-or-persevere decisions.'}
        ]
    },
    {
        'question': 'practise_release_on_demand_q3',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): Releases are tightly coupled to deployments and customers are extremely dissatisfied with the frequency of releases.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): Releases are tightly coupled to deployments but customers are somewhat dissatisfied with the frequency of releases.'},
            {'value': '10.Walk', 'label': 'Walk (10): Release and deployment are coupled but both occur continuously or on demand.'},
            {'value': '15.Run', 'label': 'Run (15): Release is decoupled from deployment; deployed features are released to the end user population based on business readiness.'},
            {'value': '25.Fly', 'label': 'Fly (25): Deployed Features can be released to individual segments of the user population; feature toggles are refactored when no longer used.'}
        ]
    },
    {
        'question': 'practise_release_on_demand_q4',
        'options': [
            {'value': '0.Sit', 'label': 'Sit (0): We experience frequent unplanned outages and/or security breaches with long recovery times.'},
            {'value': '5.Crawl', 'label': 'Crawl (5): We experience occasional unplanned outages but recover within our service level agreements.'},
            {'value': '10.Walk', 'label': 'Walk (10): We have very few unplanned outages; availability, security, and disaster recovery measures are effective.'},
            {'value': '15.Run', 'label': 'Run (15): We have no unplanned outages; We plan and rehearse failure and recovery.'},
            {'value': '25.Fly', 'label': 'Fly (25): We maximize resiliency by deliberately injecting faults into our production environment and rehearsing recovery procedures.'}
        ]
    },
];

export const practise_robotics_questions = [
    {
        'question': 'practise_robotics_q1',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '20.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_robotics_q2',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_robotics_q3',
        'options': [
            {'value': '0.No', 'label': 'No'},
            {'value': '15.Yes', 'label': 'Yes'},
        ]
    },
    {
        'question': 'practise_robotics_q4',
        'options': [
            {'value': '0.No', 'label': 'No robots in live env'},
            {'value': '3.1-10', 'label': '1-10'},
            {'value': '5.10-20', 'label': '10-20'},
            {'value': '10.20-30', 'label': '20-30'},
            {'value': '15.30-40', 'label': '30-40'},
            {'value': '18.40-50', 'label': '40-50'},
            {'value': '20.50+', 'label': 'Over 50'},
        ]
    },
    {
        'question': 'practise_robotics_q5',
        'options': [
            {'value': '0.No', 'label': 'No potential'},
            {'value': '20.Yes', 'label': 'Lot of potential'},
        ]
    },
    {
        'question': 'practise_robotics_q6',
        'options': [
            {'value': '2.Self', 'label': 'Self development'},
            {'value': '5.RnAI dev', 'label': 'Using RnAI hub for RPA development'},
            {'value': '7.RnAI res', 'label': 'Using RnAI hub for support for internal resources'},
            {'value': '9.Another support', 'label': 'Using support from another hub/domain'},
            {'value': '10.No automation', 'label': 'No automated processes used'},
        ]
    },
];



export const practises = [
    {num: '1', uid: 'practise_automation', image: practise_automation_image, questions: practise_automation_questions},
    {num: '2', uid: 'practise_unit_test', image: practise_unit_test_image, questions: practise_unit_test_questions},
    {num: '3', uid: 'practise_component_test', image: practise_component_test_image, questions: practise_component_test_questions},
    {num: '4', uid: 'practise_smoke_regression', image: practise_smoke_regression_image, questions: practise_smoke_regression_questions},
    {num: '5', uid: 'practise_code_quality_and_review', image: practise_code_quality_image, questions: practise_code_quality_questions},
    {num: '6', uid: 'practise_testcase_management', image: practise_testcase_management_image, questions: practise_testcase_management_questions},
    {num: '7', uid: 'practise_defect_management', image: practise_defect_management_image, questions: practise_defect_management_questions},
    {num: '8', uid: 'practise_integration', image: practise_integration_image, questions: practise_integration_questions},
    {num: '9', uid: 'practise_deployment', image: practise_deployment_image, questions: practise_deployment_questions},
    {num: '10', uid: 'practise_release_strategy', image: practise_release_strategy_image, questions: practise_release_strategy_questions},
    {num: '11', uid: 'practise_requirements', image: practise_requirements_image, questions: practise_requirements_questions},
    {num: '12', uid: 'practise_docs_logs', image: practise_docs_logs_image, questions: practise_docs_logs_questions},
    {num: '13', uid: 'practise_non_functional', image: practise_nft_image, questions: practise_non_functional},
    {num: '14', uid: 'practise_sap', image: practise_sap_image, questions: practise_sap_questions},
    {num: '15', uid: 'practise_monitoring', image: monitoring_image, questions: practise_monitoring_questions},
    {num: '16', uid: 'practise_operation', image: operation_image, questions: practise_operation_questions},
    {num: '17', uid: 'practise_exploration', image: exploration_image, questions: practise_exploration_questions},
    {num: '18', uid: 'practise_release_on_demand', image: release_on_demand_image, questions: practise_release_on_demand_questions},
    {num: '19', uid: 'practise_robotics_and_ai', image: robotics_image, questions: practise_robotics_questions},
    {num: '20', uid: 'practise_safe_integration_questions', image: practise_safe_integration_image, questions: practise_safe_integration_questions},
    {num: '21', uid: 'practise_safe_deployment_questions', image: practise_safe_deployment_image, questions: practise_safe_deployment_questions},
];

export const practises_autotest = [
    {num: '1', uid: 'practise_automation', image: practise_automation_image, questions: practise_automation_questions},
    {num: '2', uid: 'practise_unit_test', image: practise_unit_test_image, questions: practise_unit_test_questions},
    {num: '3', uid: 'practise_component_test', image: practise_component_test_image, questions: practise_component_test_questions},
    {num: '4', uid: 'practise_smoke_regression', image: practise_smoke_regression_image, questions: practise_smoke_regression_questions},
    //{num: '6', uid: 'practise_testcase_management', image: practise_testcase_management_image, questions: practise_testcase_management_questions},
    //{num: '7', uid: 'practise_defect_management', image: practise_defect_management_image, questions: practise_defect_management_questions},
    //{num: '10', uid: 'practise_release_strategy', image: practise_release_strategy_image, questions: practise_release_strategy_questions},
    {num: '13', uid: 'practise_non_functional', image: practise_nft_image, questions: practise_non_functional},
    //{num: '14', uid: 'practise_sap', image: practise_sap_image, questions: practise_sap_questions},
];

export const practises_processes = [
    {num: '5', uid: 'practise_code_quality_and_review', image: practise_code_quality_image, questions: practise_code_quality_questions},
    {num: '6', uid: 'practise_testcase_management', image: practise_testcase_management_image, questions: practise_testcase_management_questions},
    {num: '7', uid: 'practise_defect_management', image: practise_defect_management_image, questions: practise_defect_management_questions},
    //{num: '10', uid: 'practise_release_strategy', image: practise_release_strategy_image, questions: practise_release_strategy_questions},
    {num: '11', uid: 'practise_requirements', image: practise_requirements_image, questions: practise_requirements_questions},
    //{num: '12', uid: 'practise_docs_logs', image: practise_docs_logs_image, questions: practise_docs_logs_questions},
    {num: '14', uid: 'practise_sap', image: practise_sap_image, questions: practise_sap_questions},
];

export const practises_autoops = [
    {num: '15', uid: 'practise_monitoring', image: monitoring_image, questions: practise_monitoring_questions},
    {num: '16', uid: 'practise_operation', image: operation_image, questions: practise_operation_questions},
    {num: '12', uid: 'practise_docs_logs', image: practise_docs_logs_image, questions: practise_docs_logs_questions},
    {num: '10', uid: 'practise_release_strategy', image: practise_release_strategy_image, questions: practise_release_strategy_questions},
];


export const practises_cicd = [
    {num: '8', uid: 'practise_integration', image: practise_integration_image, questions: practise_integration_questions},
    {num: '9', uid: 'practise_deployment', image: practise_deployment_image, questions: practise_deployment_questions},
    {num: '17', uid: 'practise_exploration', image: exploration_image, questions: practise_exploration_questions},
    {num: '18', uid: 'practise_release_on_demand', image: release_on_demand_image, questions: practise_release_on_demand_questions},
    {num: '20', uid: 'practise_safe_integration_questions', image: practise_safe_integration_image, questions: practise_safe_integration_questions},
    {num: '21', uid: 'practise_safe_deployment_questions', image: practise_safe_deployment_image, questions: practise_safe_deployment_questions},
];


export const practises_rai = [
    {num: '19', uid: 'practise_robotics_and_ai', image: robotics_image, questions: practise_robotics_questions},
];
