import { createInterface } from "readline";
import { CommitQuestions } from "../types";

export function askTitle(questions: CommitQuestions): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Please Enter a commit title: ", (ans) => {
      rl.close();
      resolve(ans);
    });
  });
}
