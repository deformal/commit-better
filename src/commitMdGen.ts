import * as fs from "fs";
import { CommitQuestions } from "./types";

export function CreateMarkdownFile(data: CommitQuestions) {
  const content: string = `
Commit Summary
${data.summay}
____

Features
${data.featureLinks}
____

Issues Fixed
${data.issuesLinks}
____

Improvements
${data.improvementsLinks}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
