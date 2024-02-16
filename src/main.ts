#!/usr/bin/env node

import { exec } from "child_process";
import { createInterface } from "readline";

function gitStatus() {
  const gitStatus = "git status";
  exec(gitStatus, (stderr, stdout) => {
    if (stderr) {
      console.error(stderr);
    }
    if (stdout) {
      console.log(stdout);
    }
  });
}

function gitAddAll() {
  const command = "git add .";
  exec(command, (stderr, stdout) => {
    if (stderr) {
      console.log(stderr);
    }
    if (stdout) {
      console.log(stdout);
    }
  });
}

async function gitCommit() {
  const question = "Please Enter a commit message: ";
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(question, (message: string) => {
    const command = `git commit -m '${message}'`;
    exec(command, (stderr, stdout) => {
      if (stderr) {
        console.error(stderr);
      }
      if (stdout) {
        console.log(stdout);
      }
    });
    rl.close();
  });
}

gitCommit().catch((err) => console.error(err));
