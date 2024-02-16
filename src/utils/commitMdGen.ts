import * as fs from "fs";
import { CommitQuestions } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const commitTexts = new CommitQuestions();
  const content: string = `
${commitTexts.getTitle().trim()}
____

Features
${commitTexts.getFeature().trim()}
____

Issues Fixed
${commitTexts.getIssue().trim()}
____

Improvements
${commitTexts.getImprovement().trim()}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
