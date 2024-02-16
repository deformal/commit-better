import * as fs from "fs";
import { commitQuestion } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const content: string = `
${commitQuestion.getTitle().trim()}

Features

${commitQuestion.getFeature().trim()}


Issues Fixed

${commitQuestion.getIssue().trim()}


Improvements

${commitQuestion.getImprovement().trim()}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
