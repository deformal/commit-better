#!/usr/bin/env node

import { exec } from "child_process";
import { Interface, createInterface } from "readline";
import { CreateMarkdownFile } from "./commitMdGen";
import { CommitQuestions } from "./types";
import { promisify } from "util";

function gitCommit() {
  const command = `git commit -F $PWD/.git/commit_summary.md`;
  const questions: CommitQuestions = {
    summay: "",
    featureLinks: [],
    issuesLinks: [],
    improvementsLinks: [],
  };
  askSummary(questions);

  // const message = await asyncQuestions("Please Enter a commit message: ");
  // questions.summay = message;
  // rl.close();

  // rl.question(
  //   "If there are any feature done in this commit paste the link here : ",
  //   (message: string) => {
  //     questions.featureLinks = [message];
  //     rl.close();
  //   }
  // );

  // rl.question(
  //   "If there are any Issue Fixes done in this commit paste the link here : ",
  //   (message: string) => {
  //     questions.issuesLinks = [message];
  //     rl.close();
  //   }
  // );

  // rl.question(
  //   "If there are any Improvements done in this commit paste the link here : ",
  //   (message: string) => {
  //     questions.improvementsLinks = [message];
  //     rl.close();
  //   }
  // );

  CreateMarkdownFile(questions);

  if (questions.summay.length > 0) {
    exec(command, (err, stderr, stdout) => {
      // if (err) console.log(err);
      if (stderr) console.error(stderr);
      if (stdout) console.info(stdout);
    });
  }
}

function askSummary(questions: CommitQuestions): string {
  let message: string = "";
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please Enter a commit message: ", (ans) => {
    message = ans;
    rl.close();
  });
  return message;
}

gitCommit();
