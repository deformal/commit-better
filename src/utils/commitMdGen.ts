import * as fs from "fs";
import { commitQuestion } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const content: string = `
${commitQuestion.getTitle().trim()}
____

Features
${commitQuestion.getFeature().trim()}
____

Issues Fixed
${commitQuestion.getIssue().trim()}
____

Improvements
${commitQuestion.getImprovement().trim()}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
