const { writeFile} = require('./utils/generateHtml.js');
const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
// array of questions for user
const promptMgr = () => {

    console.log(`
    =====================================
    Welcome to the Team Profile Generator
    =====================================
    `);

    console.log(`
    Let's build your team starting with the manager.
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: 'What is the name of the team manager? (Required)',
            validate: mgrNameInput => {
                if (mgrNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'mgrId',
            message: 'What is the employee ID of the team manager? (Required)',
            validate: mgrIdInput => {
                if (mgrIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: 'What is the email address of the team manager? (Required)',
            validate: mgrEmailInput => {
                if (mgrEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'mgrOfficeNum',
            message: 'What is the office number for the team manager? (Required)',
            validate: mgrOfficeNumInput => {
                if (mgrOfficeNumInput) {
                    return true;
                } else {
                    console.log('Please enter the office number for the team manager.');
                    return false;
                }
            }
        }
    ]);
};

const promptMember = teamData => {
    console.log(`
    Now let's add a team member.
    `);

    // If there's no 'members' array property, create one
    if (!teamData.members) {
        teamData.members = [];
    }

    return inquirer.prompt([
        {
            type: 'list',
            name: 'memberRole',
            message: 'Which type of team member would you like to add. (Required)',
            choices: ['Engineer', 'Intern', 'None, I am finished building the team']
        }
    ])
    .then(chosen => {
        switch (chosen.memberRole) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'None, I am finished building the team':
                buildTeam();
                break;
        }
    });
};

// if user selects to add an Engineer
const promptEngineer = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'What is the name of the engineer? (Required)', 
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engId',
            message: 'What is the employee ID of the engineer? (Required)',
            validate: engIdInput => {
                if (engIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is the email address of the engineer? (Required)',
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engGithub',
            message: 'What is the GitHub username of the engineer? (Required)',
            validate: engGithubInput => {
                if (engGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub username of the engineer.');
                    return false;
                }
            }
        }
    ])
    .then(promptMember);
};

// if user selects to add an Intern
const promptIntern = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is the name of the intern? (Required)', 
            validate: intNameInput => {
                if (intNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intId',
            message: 'What is the employee ID of the intern? (Required)',
            validate: intIdInput => {
                if (intIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'What is the email address of the intern? (Required)',
            validate: intEmailInput => {
                if (intEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: 'What is the name of the school the intern is attending? (Required)',
            validate: intSchoolInput => {
                if (intSchoolInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the school the intern is attending.');
                    return false;
                }
            }
        }
    ])
    .then(promptMember);
};

const buildTeam = () => {

    console.log(`The prompts were successful.`);
};

// Promise that takes answers to the questions and calls functions to generate the README file
promptMgr()
    .then(promptMember)
//    .then(teamData => {
//         return generatePage(teamData);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });