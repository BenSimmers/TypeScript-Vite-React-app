#!/usr/bin/env node

import { execSync } from 'child_process';


const runCommand = (command) => {
  try {
    execSync.execSync(command, { stdio: 'inherit' });
  }
  catch (error) {
    console.error(`Error Found: ${error}`);
    return 1;
  }
  return 0;
}




const repoName = process.argv[2];

const gitCheckoutCommand = `git clone https://github.com/BenSimmers/TypeScript-Vite-React-app.git ${repoName}`;

const installDepsCommand = `cd ${repoName} && npm install`;

console.log("Cloning repo...  This may take a while...");

const checkedOut = runCommand(gitCheckoutCommand);


if(!checkedOut) process.exit(code, -1);

console.log(`Installing dependencies... for ${repoName}"`);
const installedDepsCommand = runCommand(installDepsCommand);

if(!installedDepsCommand){
  process.exit(code, -1);
}

console.log(`${repoName} is ready to go!`);
console.log(`To start the app, run: cd ${repoName} && npm start`);




