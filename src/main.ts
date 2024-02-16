#!/usr/bin/env node

import { exec } from "child_process";
import { promisify } from "util";
const execCommand = promisify(exec);

async function gitStatus() {
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

gitStatus().catch((err) => console.error(err));
