#!/usr/bin/env node

import { exec } from "child_process";
import { createInterface } from "readline";
import { CreateMarkdownFile } from "./commitMdGen";

function gitCommit() {
  const question = "Please Enter a commit message: ";
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(question, (message: string) => {
    const command = `git commit -F $PWD/.git/commit_summary.md`;
    CreateMarkdownFile(message);
    exec(command, (error, stderr, stdout) => {
      if (error) console.info(error.message);
      if (stderr) console.error(stderr);
      if (stdout) console.info(stdout);
    });

    rl.close();
  });
}

gitCommit();
