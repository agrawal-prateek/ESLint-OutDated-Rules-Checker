class InvalidCommandLineArgumentsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidCommandLineArgumentsError';
    }
}

Array.prototype.unique = function () {
    let a = this.concat();
    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

let projectPath = process.argv[2];
try {
    if (projectPath === undefined)
        throw new InvalidCommandLineArgumentsError('Please enter the path of sample project as an argument');
}
catch (e) {
    console.log(e);
    process.exit(0);
}

const fs = require('fs'),
    path = require('path');

let latestRules = [];
let version;
let projectRules = [];
let eslintrc;

fs.readdirSync(path.join('node_modules', 'eslint', 'lib', 'rules')).forEach(file => {
    if (path.extname(file) === ".js") {
        latestRules.push(file.slice(0, -3));
    }
});

try {
    version = JSON.parse(fs.readFileSync(path.join(projectPath, 'package.json'), 'utf8'))['devDependencies']['eslint'];
    if (version === undefined) {
        console.log('Version of ESLint is undefined in package.json file in sample project');
        process.exit(0);
    }
    version = parseInt(version[version.match('[0-9].')['index']]);
    if (version === 1 || version === 2)
        eslintrc = JSON.parse(fs.readFileSync(path.join(projectPath, '.eslintrc'), 'utf8'));
    else
        eslintrc = JSON.parse(fs.readFileSync(path.join(projectPath, '.eslintrc.json'), 'utf8'));

    projectRules = Object.keys(eslintrc['rules']);
    if (eslintrc['extends'] === 'eslint:recommended') {
        if (version === 4 || version === 5)
            projectRules = projectRules.concat(Object.keys(require('./' + projectPath + '/node_modules/eslint/conf/eslint-recommended.js')['rules'])).unique();
        else {
            projectRules = projectRules.concat(Object.keys(JSON.parse(fs.readFileSync(path.join(projectPath, 'node_modules','eslint','conf','eslint.json'), 'utf8')))).unique();
        }
    }

    let deprecatedRules = [];
    for (let i = 0; i < projectRules.length; i++) {
        if (latestRules.indexOf(projectRules[i]) === -1)
            deprecatedRules.push(projectRules[i]);
    }
    if (deprecatedRules.length === 0)
        console.log('\nThere are no Deprecated Rules for current project\n');
    else {
        console.log('\n' + deprecatedRules.length + ' Deprecated Rules found:');
        for (let i = 0; i < deprecatedRules.length; i++) {
            console.log("\t" + deprecatedRules[i]);
        }
    }

}
catch (e) {
    console.log('Please make sure package.json file exist in the Project');
    process.exit(0);
}