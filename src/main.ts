#!/usr/bin/env node

import { exec } from "child_process";
import { Interface, createInterface } from "readline";
import { CreateMarkdownFile } from "./commitMdGen";
import { CommitQuestions } from "./types";
import { promisify } from "util";

async function gitCommit() {
  const command = `git commit -F $PWD/.git/commit_summary.md`;
  const questions: CommitQuestions = {
    summay: "",
    featureLinks: [],
    issuesLinks: [],
    improvementsLinks: [],
  };
  await askSummary(questions);

  CreateMarkdownFile(questions);

  exec(command, (err, stderr, stdout) => {
    if (stderr) console.error(stderr);
    if (stdout) console.info(stdout);
  });
}

function askSummary(questions: CommitQuestions): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Please Enter a commit message: ", (ans) => {
      rl.close();
      resolve(ans);
    });
  });
}

gitCommit();
