// questions games translation
export const helpers = {
    // English
    'en': {
        'practise_automation_q1': 'You can answer Yes, if at least two dedicated levels are defined and test cases are organized accrodingly (for example, Unit and Component or Component and Integration). For more information, please follow below architecture example: https://martinfowler.com/articles/microservice-testing/',
        'practise_automation_q6': 'For example, automate tests development for found defects or risk based / management strategy. Please answer No, if found defects are not covered with automated tests to prevent regression.',

        'practise_unit_test_q1': 'N/A can be selected in case of Hub or Project is really specific (like some integrated Lib is used from third party vendor, where you have no control and visibility). It\'s quite specific case and should be discussed over the assesment. No means full absance of Unit tests and as well as generall practice of Unit tests development. Partially means Unit tests are developed by developers but not always and from process perspective its not mandatory.',
        'practise_unit_test_q3': 'Unit tests coverage is important metric to understand how well code is covered with unit tests. Ideal 100% coverage is not a goal because exact threshold depends on many parameters like technological stack, programming language, % of legacy code, etc.',
        'practise_unit_test_q4': 'Is your unit test coverage target different across components? Sometimes, various Scrum Teams setup different targets, in that case Unit tests coverage may have different levels.',
        'practise_unit_test_q6': 'Unit tests coverage information is useless if not gathered and analyzed on continuous basis. So CI/CD job is mandatory part of code coverage measurement. In addition, team members could either download code coverage report from CI/CD server to IDE or run unit tests in IDE with code coverage report. This information should be used to decide if all aspects are covered with unit tests and team target is met.',

        'practise_smokeregression_q1': 'Smoke Test is documented if you have written details of test scenario, where each test case includes exact test steps, necessary test data and expected result.',
        'practise_smokeregression_q2': '% of Smoke or Sanity test cases automated. All smoke tests are automated = 100%',
        'practise_smokeregression_q3': 'e.g. Automated smoke tests are executed after after each commit / each deployment',
        'practise_smokeregression_q5': 'The smoke tests say "pass" but the the right answer is "fail" or it says "fail" and right is "pass" (means the smoke tests gives the wrong answer). This means the smoketests have less quality and you can not trust them.',
        'practise_smokeregression_q6': 'Yes means that you have at least one collection of Regression test cases.',
        'practise_smokeregression_q7': 'Is Regression Test integrated to CI and executed regularly (e.g. nightly, several times a day, after each commit)?',
        'practise_smokeregression_q8': '% of Regression test cases automated (from whole regression scope). All Regression tests are automated = 100%',

        'practise_integration_q3': 'As dedicated server.',
        'practise_integration_q4': 'Build is a deliverable assembled from code',
        'practise_integration_q5': 'If you have two types of builds incremental and from scratch, please specify time that for the build you use in CI pipeline for commit, and in comment specify the time for another type of build.',
        'practise_integration_q6': 'For example, Nexus',
        'practise_integration_q7': 'For example: Nexus, Internal Appstore, FTP, HTTP',
        'practise_integration_q9': 'Green state means: passed code review, successed built, deployed and 100% passed tests...',
        'practise_integration_q10': 'Not green state of build requires all efforts to make it green and stop code development and committing. Please, specify you strategy the comment (rollback, "build cop" role, special notifications)',
        'practise_integration_q12': 'Please, specify in comments what thresholds do you have? (Static code analysis complexity, dependency, incremental unit test coverage etc.). For example: SonarQube',

        'practise_deployment_q1': 'Examples: Jenkins, Octopus, Team City',
        'practise_deployment_q2': 'There is a tool for deployment used',
        'practise_deployment_q3': 'No manual work at all and triggered by commit or by schedule.',
        'practise_deployment_q4': 'This is not applicable for Mobile apps, which have dependancy form stores',
        'practise_deployment_q6': 'Software versions, third party libraries, images, etc.',
        'practise_deployment_q7': 'Ask about ability developers to deploy on which environment? Expect that developers cannot deploy on Prod',

        'practise_releasestrategy_q1': 'How often do you release into Production to get a feedback from end-users (Full test cycle should be included)?',
        'practise_releasestrategy_q2': 'How fast can you have a new version of a shippable product (Full test cycle should be included)?',
        'practise_releasestrategy_q3': 'For example, Git branching model or GitFlow',
        'practise_releasestrategy_q9': 'Environment should be functionally identical. It can be Development, Test, Staging, Pre Production, Production etc.',
    },
    // Russian
    'ru': {
        'practise_automation_q1': 'You can answer Yes, if at least two dedicated levels are defined and test cases are organized accrodingly (for example, Unit and Component or Component and Integration). For more information, please follow below architecture example: https://martinfowler.com/articles/microservice-testing/',
        'practise_automation_q6': 'For example automate tests development for found defects. Please answer No, if found defects are not covered with automated tests to prevent regression.',

        'practise_unit_test_q1': 'N/A can be selected in case of Hub or Project is really specific (like some integrated Lib is used from third party vendor, where you have no control and visibility). It\'s quite specific case and should be discussed over the assesment. No means full absance of Unit tests and as well as generall practice of Unit tests development. Partially means Unit tests are developed by developers but not always and from process perspective its not mandatory.',
        'practise_unit_test_q3': 'Unit tests coverage is important metric to understand how well code is covered with unit tests. Ideal 100% coverage is not a goal because exact threshold depends on many parameters like technological stack, programming language, % of legacy code, etc.',
        'practise_unit_test_q4': 'Is your unit test coverage target different across components? Sometimes, various Scrum Teams setup different targets, in that case Unit tests coverage may have different levels.',
        'practise_unit_test_q6': 'Unit tests coverage information is useless if not gathered and analyzed on continuous basis. So CI/CD job is mandatory part of code coverage measurement. In addition, team members could either download code coverage report from CI/CD server to IDE or run unit tests in IDE with code coverage report. This information should be used to decide if all aspects are covered with unit tests and team target is met.',

        'practise_smokeregression_q1': 'Smoke Test is documented if you have written details of test scenario, where each test case includes exact test steps, necessary test data and expected result.',
        'practise_smokeregression_q2': '% of Smoke or Sanity test cases automated. All smoke tests are automated = 100%',
        'practise_smokeregression_q3': 'e.g. Automated smoke tests are executed after after each commit / each deployment',
        'practise_smokeregression_q5': 'What is the Smoke Test execution time for remaining not automated manual part. Select option "0 (All Automated)", if All Smokes tests are Automated. ',
        'practise_smokeregression_q6': '"<90%" means more than 10% of Automated tests regularly failed (without being properly fixed), "100%" means all Automated Smoke tests always passed (or in case of fails, immediatly fixed or excluded for future analyses to address root cause).',
        'practise_smokeregression_q7': 'Yes means that you have at least one collection of Regression test cases.',
        'practise_smokeregression_q8': 'Is Regression Test integrated to CI and executed regularly (e.g. nightly, several times a day, after each commit)?',
        'practise_smokeregression_q9': '% of Regression test cases automated (from whole regression scope). All Regression tests are automated = 100%',

        'practise_integration_q3': 'As dedicated server.',
        'practise_integration_q4': 'Build is a deliverable assembled from code',
        'practise_integration_q5': 'If you have two types of builds incremental and from scratch, please specify time that for the build you use in CI pipeline for commit, and in comment specify the time for another type of build.',
        'practise_integration_q6': 'For example, Nexus',
        'practise_integration_q7': 'For example: Nexus, Internal Appstore, FTP, HTTP',
        'practise_integration_q9': 'Green state means: passed code review, successed built, deployed and 100% passed tests...',
        'practise_integration_q10': 'Not green state of build requires all efforts to make it green and stop code development and committing. Please, specify you strategy the comment (rollback, "build cop" role, special notifications)',
        'practise_integration_q12': 'Please, specify in comments what thresholds do you have? (Static code analysis complexity, dependency, incremental unit test coverage etc.). For example: SonarQube',

        'practise_deployment_q1': 'Examples: Jenkins, Octopus, Team City',
        'practise_deployment_q2': 'There is a tool for deployment used',
        'practise_deployment_q3': 'No manual work at all and triggered by commit or by schedule.',
        'practise_deployment_q4': 'This is not applicable for Mobile apps, which have dependancy form stores',
        'practise_deployment_q6': 'Software versions, third party libraries, images, etc.',
        'practise_deployment_q7': 'Ask about ability developers to deploy on which environment? Expect that developers cannot deploy on Prod',

        'practise_releasestrategy_q1': 'How often do you release into Production to get a feedback from end-users (Full test cycle should be included)?',
        'practise_releasestrategy_q2': 'How fast can you have a new version of a shippable product (Full test cycle should be included)?',
        'practise_releasestrategy_q3': 'For example, Git branching model or GitFlow',
        'practise_releasestrategy_q9': 'Environment should be functionally identical. It can be Development, Test, Staging, Pre Production, Production etc.',
    },
    // German
    'de' : {
        'practise_automation_q1': 'You can answer Yes, if at least two dedicated levels are defined and test cases are organized accrodingly (for example, Unit and Component or Component and Integration). For more information, please follow below architecture example: https://martinfowler.com/articles/microservice-testing/',
        'practise_automation_q6': 'For example automate tests development for found defects. Please answer No, if found defects are not covered with automated tests to prevent regression.',

        'practise_unit_test_q1': 'N/A can be selected in case of Hub or Project is really specific (like some integrated Lib is used from third party vendor, where you have no control and visibility). It\'s quite specific case and should be discussed over the assesment. No means full absance of Unit tests and as well as generall practice of Unit tests development. Partially means Unit tests are developed by developers but not always and from process perspective its not mandatory.',
        'practise_unit_test_q3': 'Unit tests coverage is important metric to understand how well code is covered with unit tests. Ideal 100% coverage is not a goal because exact threshold depends on many parameters like technological stack, programming language, % of legacy code, etc.',
        'practise_unit_test_q4': 'Is your unit test coverage target different across components? Sometimes, various Scrum Teams setup different targets, in that case Unit tests coverage may have different levels.',
        'practise_unit_test_q6': 'Unit tests coverage information is useless if not gathered and analyzed on continuous basis. So CI/CD job is mandatory part of code coverage measurement. In addition, team members could either download code coverage report from CI/CD server to IDE or run unit tests in IDE with code coverage report. This information should be used to decide if all aspects are covered with unit tests and team target is met.',

        'practise_smokeregression_q1': 'Smoke Test is documented if you have written details of test scenario, where each test case includes exact test steps, necessary test data and expected result.',
        'practise_smokeregression_q2': '% of Smoke or Sanity test cases automated. All smoke tests are automated = 100%',
        'practise_smokeregression_q3': 'e.g. Automated smoke tests are executed after after each commit / each deployment',
        'practise_smokeregression_q5': 'What is the Smoke Test execution time for remaining not automated manual part. Select option "0 (All Automated)", if All Smokes tests are Automated. ',
        'practise_smokeregression_q6': '"<90%" means more than 10% of Automated tests regularly failed (without being properly fixed), "100%" means all Automated Smoke tests always passed (or in case of fails, immediatly fixed or excluded for future analyses to address root cause).',
        'practise_smokeregression_q7': 'Yes means that you have at least one collection of Regression test cases.',
        'practise_smokeregression_q8': 'Is Regression Test integrated to CI and executed regularly (e.g. nightly, several times a day, after each commit)?',
        'practise_smokeregression_q9': '% of Regression test cases automated (from whole regression scope). All Regression tests are automated = 100%',

        'practise_integration_q3': 'As dedicated server.',
        'practise_integration_q4': 'Build is a deliverable assembled from code',
        'practise_integration_q5': 'If you have two types of builds incremental and from scratch, please specify time that for the build you use in CI pipeline for commit, and in comment specify the time for another type of build.',
        'practise_integration_q6': 'For example, Nexus',
        'practise_integration_q7': 'For example: Nexus, Internal Appstore, FTP, HTTP',
        'practise_integration_q9': 'Green state means: passed code review, successed built, deployed and 100% passed tests...',
        'practise_integration_q10': 'Not green state of build requires all efforts to make it green and stop code development and committing. Please, specify you strategy the comment (rollback, "build cop" role, special notifications)',
        'practise_integration_q12': 'Please, specify in comments what thresholds do you have? (Static code analysis complexity, dependency, incremental unit test coverage etc.). For example: SonarQube',

        'practise_deployment_q1': 'Examples: Jenkins, Octopus, Team City',
        'practise_deployment_q2': 'There is a tool for deployment used',
        'practise_deployment_q3': 'No manual work at all and triggered by commit or by schedule.',
        'practise_deployment_q4': 'This is not applicable for Mobile apps, which have dependancy form stores',
        'practise_deployment_q6': 'Software versions, third party libraries, images, etc.',
        'practise_deployment_q7': 'Ask about ability developers to deploy on which environment? Expect that developers cannot deploy on Prod',

        'practise_releasestrategy_q1': 'How often do you release into Production to get a feedback from end-users (Full test cycle should be included)?',
        'practise_releasestrategy_q2': 'How fast can you have a new version of a shippable product (Full test cycle should be included)?',
        'practise_releasestrategy_q3': 'For example, Git branching model or GitFlow',
        'practise_releasestrategy_q9': 'Environment should be functionally identical. It can be Development, Test, Staging, Pre Production, Production etc.',
    },
};

