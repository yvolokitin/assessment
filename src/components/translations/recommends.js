// recommends translation
export const recommends = {
    // English
    'en': {
        'practise_unit_test_q1': 'The following steps are needed to introduce unit testing in the team: 1. Choose and discuss appropriate unit testing toolset with the team 2. Add unit tests as mandatory artifact in Definition of Done (DoD) 3. Extend code review checklist to verify unit tests presence and enough coverage is there for every task 4. Add unit tests as quality gateway to CI/CD pipeline, make sure developers run them as a part of local check that task is done and ready for integration',
        'practise_unit_test_q2': '1. Create job to run all unit tests and make this job a part of CI/CD pipeline running on every code change 2. Make sure tests run really quickly (5 minutes is already big enough to start worrying) 3. Configure detailed reporting for tests execution with set of important metrics for each test like running time and failures frequency 4. If code review tool is used or pre-commit quality gates like static code analysis, add unit tests there as an additional verification step 5. Make sure every developer in the team shares responsibility for unit tests to remain green on CI/CD pipeline and knows how to run and fix them in case of failures',
        'practise_unit_test_q3': 'To introduce code coverage these steps are recommended: 1. Configure build tool to gather code coverage during tests execution on continuous basis (usually on CI/CD pipeline) 2. Educate team members how to run unit tests from IDE with coverage analysis and how to use this data in practice 3. Monitor and discuss trends in code coverage on a regular basis with the team',
        'practise_unit_test_q4': 'Action items on Code coverage target: 1. Discuss and agree on code coverage target with the team and define test coverage target you don’t want to be lower than. This target must be based on application complexity and amount of code for critical and important functionality. It’s recommended to use 70-80% as a reference. 2. Add this threshold to Definition of Done (DoD) for unit tests 3. Add quality gate to SonarQube and set up Build Breaker to fail the build if code coverage of the new code is lower than agreed target. 4. Use the quality gate for all appropriate verifications like Merge Request, Merge Queue and Mainline Branch verification.',
        'practise_unit_test_q5': '',
        'practise_unit_test_q6': '',
        'practise_unit_test_q7': '',
    },
    // Russian
    'ru': {

    },
    // German
    'de' : {

    },
};

