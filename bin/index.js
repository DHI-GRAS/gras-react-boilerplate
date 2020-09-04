#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec, execSync } = require('child_process');
const chalk = require('chalk');
const packageJson = require('./../package.json');

const scripts = `"start": "react-scripts start",
    "build": "react-scripts build"`;
const browserList = `"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }`;
/**
 * we pass the object key dependency || devdependency to this function
 * @param {object} deps object key that we want to extract
 * @returns {string} a string of 'dependencies@version'
 * that we can attach to an `npm i {value}` to install
 * every dep the exact version speficied in package.json
 */

const getDeps = (deps) =>
  Object.entries(deps)
    .map((dep) => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/^/g, '')
    // exclude the plugin only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, '');

console.log(
  chalk.blue.bold('info ') + chalk.white.bold('Initializing project...')
);

if (!process.argv[2]) {
  console.error(
    chalk.red.bold('error ') +
      chalk.bold.white(
        "We can't create a project if you don't provide the name ;)"
      )
  );
  return;
}

console.log(
  chalk.blue.bold('info ') +
    chalk.white.bold(`Creating the app at "${process.argv[2]}"`)
);
// create folder and initialize npm
exec(
  `mkdir ${process.argv[2]} && cd ${process.argv[2]} && npm init --force`,
  (initErr) => {
    if (initErr) {
      console.error(
        chalk.red.bold('error') +
          chalk.white.bold(`Error when initializing the project: 
        ${initErr}`)
      );
      return;
    }

    const filesToCopy = [
      'README_to_copy.md',
      'tsconfig.json',
      '.prettierrc.js',
    ];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
        fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`)
      );
    }

    // npm will remove the .gitignore file when the package is installed, therefore it cannot be copied
    // locally and needs to be downloaded. See https://github.com/Kornil/simple-react-app/issues/12
    https.get(
      'https://raw.githubusercontent.com/DHI-GRAS/gras-react-boilerplate/master/.gitignore',
      (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (data) => {
          body += data;
        });
        res.on('end', () => {
          fs.writeFile(
            `${process.argv[2]}/.gitignore`,
            body,
            { encoding: 'utf-8' },
            (err) => {
              if (err) throw err;
            }
          );
        });
      }
    );

    console.log(
      chalk.green.bold('\nsuccess ') + chalk.white.bold('npm init -- done')
    );

    console.log(
      chalk.blue.bold('\ninfo ') + chalk.white.bold('Generating readme...')
    );

    execSync(
      `cd ${process.argv[2]} && rename README_to_copy.md README.md`,
      (err) => {
        if (err) throw err;
      }
    );

    console.log(
      chalk.green.bold('\nsuccess ') + chalk.white.bold('Readme generated!')
    );

    // installing dependencies
    console.log(
      chalk.blue.bold('\ninfo ') +
        'Installing dependencies. It might take a while...\n'
    );

    const deps = getDeps(packageJson.dependencies);
    execSync(`cd ${process.argv[2]} && npm install ${deps}`, {
      stdio: [0, 1, 2],
    });

    console.log(
      chalk.blue.bold('\ninfo ') +
        chalk.white.bold('Copying additional files..')
    );

    const packageJSON = `${process.argv[2]}/package.json`;

    // replace the default scripts, with the react scripts
    fs.readFile(packageJSON, (err, file) => {
      if (err) throw err;
      const data = file
        .toString()
        .replace(
          '"test": "echo \\"Error: no test specified\\" && exit 1"',
          scripts
        )
        .replace(`"keywords": []`, browserList);
      fs.writeFile(packageJSON, data, (err2) => err2 || true);
    });

    // copy additional source files
    fs.copy(path.join(__dirname, '../src'), `${process.argv[2]}/src`)
      .then(() =>
        fs
          .copy(path.join(__dirname, '../public'), `${process.argv[2]}/public`)
          .then(() => {
            console.log(
              chalk.green.bold('\nsuccess ') +
                chalk.white.bold(
                  `All done!\nYour project is now started at "${process.argv[2]}". Refer to the README to get started.\n\nHappy Coding!`
                )
            );
          })
          .catch((err) => console.error(chalk.red.bold('error ') + err))
      )
      .catch((err) => console.error(chalk.red.bold('error ') + err));
  }
);
