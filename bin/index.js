#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const https = require("https");
const { exec } = require("child_process");
const chalk = require("chalk");
const packageJson = require("./../package.json");
const getSize = require("get-folder-size");
const ProgressBar = require("progress");
const scripts = `"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"`;

/**
 * we pass the object key dependency || devdependency to this function
 * @param {object} deps object key that we want to extract
 * @returns {string} a string of 'dependencies@version'
 * that we can attach to an `npm i {value}` to install
 * every dep the exact version speficied in package.json
 */
let currentBaseSize = 0;
let currentMaxSize = 0;
let barMessage = "Installing dependencies";
const getDeps = (deps) =>
  Object.entries(deps)
    .map((dep) => `${dep[0]}@${dep[1]}`)
    .toString()
    .replace(/,/g, " ")
    .replace(/^/g, "")
    // exclude the plugin only used in this file, nor relevant to the boilerplate
    .replace(/fs-extra[^\s]+/g, "");

//currentMax = 235212577

console.log(
  chalk.blue.bold("info ") + chalk.white.bold("Initializing project...")
);
if (!process.argv[2]) {
  console.error(
    chalk.red.bold("error ") +
      chalk.bold.white(
        "We can't create a project if you don't provide the name ;)"
      )
  );
  return;
}
console.log(
  chalk.blue.bold("info ") +
    chalk.white.bold(`Creating the app at /${process.argv[2]}`)
);
// create folder and initialize yarn
exec(
  `mkdir ${process.argv[2]} && cd ${process.argv[2]} && yarn init -y`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(
        chalk.red.bold("error") +
          chalk.white.bold(`Error when initializing the project: 
        ${initErr}`)
      );
      return;
    }
    const packageJSON = `${process.argv[2]}/package.json`;
    // replace the default scripts, with the react scripts
    fs.readFile(packageJSON, (err, file) => {
      if (err) throw err;
      const data = file
        .toString()
        .replace(
          '"test": "echo \\"Error: no test specified\\" && exit 1"',
          scripts
        );
      fs.writeFile(packageJSON, data, (err2) => err2 || true);
    });

    const filesToCopy = ["README.md", "tsconfig.json"];

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`)).pipe(
        fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`)
      );
    }

    // npm will remove the .gitignore file when the package is installed, therefore it cannot be copied
    // locally and needs to be downloaded. See https://github.com/Kornil/simple-react-app/issues/12
    https.get(
      "https://raw.githubusercontent.com/DHI-GRAS/gras-react-boilerplate/master/.gitignore",
      (res) => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", (data) => {
          body += data;
        });
        res.on("end", () => {
          fs.writeFile(
            `${process.argv[2]}/.gitignore`,
            body,
            { encoding: "utf-8" },
            (err) => {
              if (err) throw err;
            }
          );
        });
      }
    );

    console.log(
      chalk.green.bold("\nsuccess ") + chalk.white.bold("yarn init -- done\n")
    );

    // installing dependencies
    console.log(
      chalk.blue.bold("info ") +
        "Installing dependencies. It might take a few minutes..\n"
    );
    let barDep = new ProgressBar(`${barMessage} [:bar] :percent`, {
      total: 235819251 / 2048, //kb // 238933996 //236074955
      complete: "=",
    });

    const deps = getDeps(packageJson.dependencies);

    exec(
      `cd ${process.argv[2]} && yarn add ${deps}`,
      (yarnErr, yarnStdout, yarnStderr) => {
        if (yarnErr) {
          console.error(
            chalk.red.bold("error ") +
              chalk.white.bold(`An yarn error was thrown.
      ${yarnErr}`)
          );
          return;
        }

        // console.log(yarnStdout);
        barDep.interrupt(
          chalk.green.bold("\nsuccess ") +
            chalk.white.bold("Dependencies installed")
        );
      }
    );

    // bar.interrupt(
    //   chalk.blue.bold("\ninfo ") +
    //     chalk.white.bold("Copying additional files..")
    // );
    // barMessage = "Copying additional files";
    // // copy additional source files
    // fs.copy(path.join(__dirname, "../src"), `${process.argv[2]}/src`)
    //   .then(() =>
    //     console.log(
    //       chalk.green.bold("\nsuccess ") +
    //         chalk.white.bold(
    //           `All done!\nYour project is now started into /${process.argv[2]} folder, refer to the README for the project structure.\n\nHappy Coding!`
    //         )
    //     )
    //   )
    //   .catch((err) => console.error(chalk.red.bold("error ") + err));

    let interval = setInterval(() => {
      if (fs.existsSync(`./${process.argv[2]}/node_modules`))
        getSize(`./${process.argv[2]}/node_modules`, (err, size) => {
          if (err) {
            console.log(err);
            return;
          }
          barDep.interrupt(`${size / 2048}mb`);
          if (barDep.complete) {
            clearInterval(interval);
          }
          size = size / 2048;
          barDep.tick(size);
          return;
        });
    }, 50);
  }
);
