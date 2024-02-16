#!/usr/bin/env node

import { exec } from "child_process";
import { promisify } from "util";
import { createInterface } from "readline";
const execCommand = promisify(exec);

async function gitStatus() {
  try {
    const gitStatus = "git status";
    const { stdout, stderr } = await execCommand(gitStatus);
    console.log(stdout);
    if (stderr) {
      throw new Error(stderr);
    }
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
}

async function gitAddAll() {
  const gitStatus = "git add .";
  const { stdout, stderr } = await execCommand(gitStatus);
  if (stderr) {
    throw new Error(stderr);
  }

  if (stdout) {
    console.info(stdout);
  }
}

async function gitCommit() {
  const question = "Please Enter a commit message: ";
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(question, async (message: string) => {
    await gitAddAll();
    const command = `git commit -m '${message}'`;
    await execCommand(command)
      .then(({ stderr, stdout }) => {
        if (stderr) {
          console.error(stderr);
        }
        if (stdout) {
          console.log(stdout);
        }
      })
      .catch((err) => console.error(err));
    rl.close();
  });
}

gitCommit().catch((err) => console.error(err));
