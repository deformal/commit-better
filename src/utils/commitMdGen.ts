import * as fs from "fs";
import { commitQuestion } from "@utils/commitQuestions";

export function CreateMarkdownFile() {
  const content: string = `


${commitQuestion.getTitle().trim()}

I. Features

${commitQuestion.getFeature().split(",").join("\n")}

II. Fixes

${commitQuestion.getIssue().split(",").join("\n")}

III. Improvements

${commitQuestion.getImprovement().split(",").join("\n")}
`;

  fs.writeFileSync(".git/commit_summary.md", content);
}
