#!/usr/bin/env node

import { exec } from "child_process";
import { CreateMarkdownFile } from "./utils/commitMdGen";
import { AskQuestions } from "@utils/questions";
import { CommitQuestions } from "@utils/commitQuestions";

async function gitCommit() {
  const askQuestion = new AskQuestions();
  const command = `git commit -F $PWD/.git/commit_summary.md`;
  await askQuestion.askTitle();
  await askQuestion.askFeatureLinks();
  await askQuestion.askIssueLinks();
  await askQuestion.askImprovementLinks();
  const commitMessages = new CommitQuestions();
  console.log(commitMessages.getTitle);
  CreateMarkdownFile();
  exec(command, (err, stderr, stdout) => {
    if (stderr) console.error(stderr);
    if (stdout) console.info(stdout);
  });
}

gitCommit();
