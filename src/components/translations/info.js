// info games translation
export const info = {
    // English
    'en': {
        'close': 'close',
        'discover': 'discover',

        'practise_automation': 'There are many good reasons for doing test automation, and so existing scope and facilities should be accurately analyzed in order to assure that desired benefits are achievable within existing resources and timeline. Ideally we should introduce the software testing pyramid on a project.',
        'practise_automation_ext': 'The best approaches and balance among different automated testing types should be selected to minimize frequent script updates due to new functionality and changes. Prior to start working on Automation scope definition it’s worth thinking about common goals and benefits that you may want to receive, and analyze whether Automation is applicable on the project considering specifics, timing, planned scope of works and available resources.',

        'practise_unit_test': 'Unit testing is one of the software testing types which includes the initial testing phase where the smallest components or the modules of a software are tested individually. Unit tests should be written fully automated and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.',
        'practise_unit_test_ext': 'Unit testing alone doesn\'t provide guarantees about the behaviour and quality of the system. What are the benefits of Unit Testing? 1. Isolates a section of code and validates its correctness 2. Helps in identifying and fixing the bugs at the early stage of the SDLC process 3. Assures to reduce the cost as bugs are resolved at the earliest 4. Helps the developers to improve the design by allowing refactoring of the code 5. Assures in simplifying the debugging process 6. With the proper unit testing practice, components that are integrated after the build can assure in achieving a quality product',

        'practise_component_test': 'A component test limits the scope of the exercised software to a portion of the system under test, manipulating the system through internal code interfaces and using test doubles to isolate the code under test from other components. ',
        'practise_component_test_ext': 'A component is any well-encapsulated, coherent and independently replaceable part of a larger system. Testing such components in isolation provides a number of benefits. Isolating the component from its peers using test doubles avoids any complex behaviour they may have. It also helps to provide a controlled testing environment for the component, triggering any applicable error cases in a repeatable manner.',

        'practise_smoke_regression': 'Smoke testing is the initial level of software testing performed on the just developed software build. This testing is important as it establishes the critical functionalities of a software application and confirms the smooth working of the application.',
        'practise_smoke_regression_ext': 'Regression testing is defined as a type of software testing to confirm that a recent program or code change has not adversely affected existing features. This testing is done to make sure that new code changes should not have side effects on the existing functionalities. It ensures that the old code still works once the latest code changes are done.',

        'practise_code_quality_and_review': 'Code quality defines code that is good (high quality) — and code that is bad (low quality). It is important, as it impacts the overall software quality. And quality impacts how safe, secure, and reliable your codebase is.',
        'practise_code_quality_and_review_ext': 'Code quality can be measured in a number of different ways, but some of the most important aspects are: Readability, consistency — how easy it is to read and understand sections of the code; this includes code clarity, simplicity, and documentation. Predictability, reliability, and robustness — software behavior should be predictable, and not prone to hidden bugs. Maintainability and extensibility — fixing, updating and improving software should be as simple as possible, not inherently complex.',

        'practise_requirements': 'Requirements management is the process of collecting, analyzing, refining, and prioritizing product requirements and then planning for their delivery.',
        'practise_requirements_ext': 'The purpose of requirements management is to ensure that the organization validates and meets the needs of its customers and external and internal stakeholders. Requirements management involves communication between the project team members and stakeholders, and adjustment to requirements changes throughout the course of the project. To prevent one class of requirements from overriding another, constant communication among members of the development team is critical. Requirements management does not end with product release. From that point on, the data coming in about the application’s acceptability is gathered and fed into the Investigation phase of the next generation or release. Thus the process begins again.',

        'practise_release_strategy': 'A term used to refer to all types of Release Planning, Release Monitoring, and the like. It is often needed with Scrum - in part to decide what work will be left UnDone until the Release Sprint.',
        'practise_release_strategy_ext': 'Release Strategy',

        'practise_testcase_management': 'Test Case Management is a single workspace for manual and automated tests, which is used by QA and Dev Teams and helps to boost software testing efforts',
        'practise_testcase_management_ext': 'Test Case Management',

        'practise_defect_management': 'Defect Management is a systematic process to identify and fix bugs. A defect management cycle contains the following stages 1) Discovery of Defect, 2) Defect Categorization 3) Fixing of Defect by developers 4) Verification by Testers, 5) Defect Closure 6) Defect Reports at the end of project',
        'practise_defect_management_ext': 'Defect Management',

        'practise_integration': 'Continuous Integration',
        'practise_integration_ext': 'Continuous Integration',

        'practise_deployment': 'Continuous Deployment',
        'practise_deployment_ext': 'Continuous Deployment',

        'practise_config': 'Configuration Management',
        'practise_config_ext': 'Configuration Management',

        'practise_docs_logs': 'Architecture Aspects',
        'practise_docs_logs_ext': 'Architecture Aspects',

        'practise_performance': 'Performance and Stress Testing',
        'practise_performance_ext': 'Performance and Stress Testing',

        'practise_security': 'Security Test Automation',
        'practise_security_ext': 'Security Test Automation',
    },
    // Russian
    'ru': {
        'close': 'закрыть',
        'discover': 'подробнее',

        'practise_requirements': 'Requirements management is the process of collecting, analyzing, refining, and prioritizing product requirements and then planning for their delivery.',
        'practise_requirements_ext': 'The purpose of requirements management is to ensure that the organization validates and meets the needs of its customers and external and internal stakeholders. Requirements management involves communication between the project team members and stakeholders, and adjustment to requirements changes throughout the course of the project. To prevent one class of requirements from overriding another, constant communication among members of the development team is critical. Requirements management does not end with product release. From that point on, the data coming in about the application’s acceptability is gathered and fed into the Investigation phase of the next generation or release. Thus the process begins again.',

        'practise_code_quality': 'Code quality and review (sometimes referred to as peer review) is a software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code, and they do so after implementation or as an interruption of implementation. At least one of the persons must not be the code\'s author. The persons performing the checking, excluding the author, are called reviewers',
        'practise_code_quality_ext': 'Software projects can be subject to different constraints at different stages (from requirements to analysis, development, testing, deployment, and maintenance) which can sometimes lead to the code itself being handled as the least important aspect (function over form). However, one of the most important — and often forgotten — properties of good software is its code quality. Code quality can be measured in a number of different ways, but some of the most important aspects are: Readability, consistency — how easy it is to read and understand sections of the code; this includes code clarity, simplicity, and documentation. Predictability, reliability, and robustness — software behavior should be predictable, and not prone to hidden bugs. Maintainability and extensibility — fixing, updating and improving software should be as simple as possible, not inherently complex.',

        'practise_release_strategy': 'A term used to refer to all types of Release Planning, Release Monitoring, and the like. It is often needed with Scrum - in part to decide what work will be left UnDone until the Release Sprint.',
        'practise_release_strategy_ext': 'Release Strategy',

        'practise_testcase_management': 'Test Case Management is a single workspace for manual and automated tests, which is used by QA and Dev Teams and helps to boost software testing efforts',
        'practise_testcase_management_ext': 'Test Case Management',

        'practise_defect_management': 'Defect Management is a systematic process to identify and fix bugs. A defect management cycle contains the following stages 1) Discovery of Defect, 2) Defect Categorization 3) Fixing of Defect by developers 4) Verification by Testers, 5) Defect Closure 6) Defect Reports at the end of project',
        'practise_defect_management_ext': 'Defect Management',

        'practise_integration': 'Continuous Integration',
        'practise_integration_ext': 'Continuous Integration',

        'practise_deployment': 'Continuous Deployment',
        'practise_deployment_ext': 'Continuous Deployment',

        'practise_config': 'Configuration Management',
        'practise_config_ext': 'Configuration Management',

        'practise_docs_logs': 'Architecture Aspects',
        'practise_docs_logs_ext': 'Architecture Aspects',

        'practise_automation': 'Test Automation Approach',
        'practise_automation_ext': 'Test Automation Approach',

        'practise_unit_test': 'Unit testing',
        'practise_unit_test_ext': 'Unit testing',

        'practise_component_test': 'Integration/Component Testing',
        'practise_component_test_ext': 'Integration/Component Testing',

        'practise_system_test': 'System testing',
        'practise_system_test_ext': 'System testing',

        'practise_performance': 'Performance and Stress Testing',
        'practise_performance_ext': 'Performance and Stress Testing',

        'practise_security': 'Security Test Automation',
        'practise_security_ext': 'Security Test Automation',
    },
    // German
    'de' : {
        'close': 'schließen',
        'discover': 'discover',

        'practise_requirements': 'Requirements management is the process of collecting, analyzing, refining, and prioritizing product requirements and then planning for their delivery.',
        'practise_requirements_ext': 'The purpose of requirements management is to ensure that the organization validates and meets the needs of its customers and external and internal stakeholders. Requirements management involves communication between the project team members and stakeholders, and adjustment to requirements changes throughout the course of the project. To prevent one class of requirements from overriding another, constant communication among members of the development team is critical. Requirements management does not end with product release. From that point on, the data coming in about the application’s acceptability is gathered and fed into the Investigation phase of the next generation or release. Thus the process begins again.',

        'practise_code_quality': 'Code quality and review (sometimes referred to as peer review) is a software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code, and they do so after implementation or as an interruption of implementation. At least one of the persons must not be the code\'s author. The persons performing the checking, excluding the author, are called reviewers',
        'practise_code_quality_ext': 'Software projects can be subject to different constraints at different stages (from requirements to analysis, development, testing, deployment, and maintenance) which can sometimes lead to the code itself being handled as the least important aspect (function over form). However, one of the most important — and often forgotten — properties of good software is its code quality. Code quality can be measured in a number of different ways, but some of the most important aspects are: Readability, consistency — how easy it is to read and understand sections of the code; this includes code clarity, simplicity, and documentation. Predictability, reliability, and robustness — software behavior should be predictable, and not prone to hidden bugs. Maintainability and extensibility — fixing, updating and improving software should be as simple as possible, not inherently complex.',

        'practise_release_strategy': 'A term used to refer to all types of Release Planning, Release Monitoring, and the like. It is often needed with Scrum - in part to decide what work will be left UnDone until the Release Sprint.',
        'practise_release_strategy_ext': 'Release Strategy',

        'practise_testcase_management': 'Test Case Management is a single workspace for manual and automated tests, which is used by QA and Dev Teams and helps to boost software testing efforts',
        'practise_testcase_management_ext': 'Test Case Management',

        'practise_defect_management': 'Defect Management is a systematic process to identify and fix bugs. A defect management cycle contains the following stages 1) Discovery of Defect, 2) Defect Categorization 3) Fixing of Defect by developers 4) Verification by Testers, 5) Defect Closure 6) Defect Reports at the end of project',
        'practise_defect_management_ext': 'Defect Management',

        'practise_integration': 'Continuous Integration',
        'practise_integration_ext': 'Continuous Integration',

        'practise_deployment': 'Continuous Deployment',
        'practise_deployment_ext': 'Continuous Deployment',

        'practise_config': 'Configuration Management',
        'practise_config_ext': 'Configuration Management',

        'practise_docs_logs': 'Architecture Aspects',
        'practise_docs_logs_ext': 'Architecture Aspects',

        'practise_automation': 'Test Automation Approach',
        'practise_automation_ext': 'Test Automation Approach',

        'practise_unit_test': 'Unit testing',
        'practise_unit_test_ext': 'Unit testing',

        'practise_component_test': 'Integration/Component Testing',
        'practise_component_test_ext': 'Integration/Component Testing',

        'practise_system_test': 'System testing',
        'practise_system_test_ext': 'System testing',

        'practise_performance': 'Performance and Stress Testing',
        'practise_performance_ext': 'Performance and Stress Testing',

        'practise_security': 'Security Test Automation',
        'practise_security_ext': 'Security Test Automation',
    },
};
