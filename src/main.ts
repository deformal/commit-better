#!/usr/bin/env node

import { exec } from "child_process";
import { CreateMarkdownFile } from "./utils/commitMdGen";
import { CommitQuestions } from "./types";
import { askTitle } from "@utils/questions";

async function gitCommit() {
  const command = `git commit -F $PWD/.git/commit_summary.md`;
  const questions: CommitQuestions = {
    summay: "",
    featureLinks: [],
    issuesLinks: [],
    improvementsLinks: [],
  };
  questions.summay = await askTitle(questions);
  CreateMarkdownFile(questions);

  exec(command, (err, stderr, stdout) => {
    if (stderr) console.error(stderr);
    if (stdout) console.info(stdout);
  });
}

gitCommit();
