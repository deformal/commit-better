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
  try {
    const gitStatus = "git add .";
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

async function gitCommit() {
  try {
    const question = "Please Enter a commit message: ";
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, async (message: string) => {
      await gitAddAll();
      const command = `git commit -m '${message}'`;
      const { stdout, stderr } = await execCommand(command);
      if (stderr) {
        console.info(stderr);
      }
      rl.close();
    });
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
    return error.message;
  }
}

gitCommit().catch((err) => console.error(err));
