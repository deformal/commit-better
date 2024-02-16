import * as fs from "fs";

export function CreateMarkdownFile(summary: string): void {
  const content: string = `
# Commit Summary
${summary}
## Features
## Issues Fixed
## Improvements
`;

  fs.writeFileSync(".git/commit_summary.md", content);
  console.log("Content appended to Markdown file successfully.");
}

const exampleSummary: string = `
- Added feature X
- Fixed issue Y
- Refactored code for better readability
`;
