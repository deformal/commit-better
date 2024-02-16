import * as fs from "fs";
import { commitQuestion } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const content: string = `
${commitQuestion.getTitle().trim()}


Features
  1. ${commitQuestion.getFeature().trim()}


Issues Fixed
  1. ${commitQuestion.getIssue().trim()}


Improvements
  1. ${commitQuestion.getImprovement().trim()}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
