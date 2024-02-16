import * as fs from "fs";
import { commitQuestion } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const content: string = `
${commitQuestion.getTitle().trim()}

Features
  a. ${commitQuestion.getFeature().trim()}

Issues Fixed
  a. ${commitQuestion.getIssue().trim()}

Improvements
  a. ${commitQuestion.getImprovement().trim()}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
