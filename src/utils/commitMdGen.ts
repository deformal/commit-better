import * as fs from "fs";
import { commitQuestion } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const content: string = `
${commitQuestion.getTitle().trim()}

a. Features

${commitQuestion.getFeature().split(",").join("\n")}

b. Fixes

${commitQuestion.getIssue().split(",").join("\n")}

c. Improvements

${commitQuestion.getImprovement().split(",").join("\n")}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
