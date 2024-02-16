import { createInterface } from "readline";
import { commitQuestion } from "@utils/commitQuestions";

export class AskQuestions {
  public async askTitle(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("Please Enter a commit title: ", (ans) => {
        rl.close();
        commitQuestion.setTitle(ans);
        resolve(ans);
      });
    });
  }

  public async askFeatureLinks(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(
        "Features resolved enter description or paste a link: ",
        (ans) => {
          rl.close();
          commitQuestion.setFeature(ans);
          resolve(ans);
        }
      );
    });
  }

  public async askIssueLinks(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(
        "Issues resolved enter description or paste a link: ",
        (ans) => {
          rl.close();
          commitQuestion.setIssue(ans);
          resolve(ans);
        }
      );
    });
  }

  public async askImprovementLinks(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(
        "Improvements resolved enter description or paste a link: ",
        (ans) => {
          rl.close();
          commitQuestion.setImporovement(ans);
          resolve(ans);
        }
      );
    });
  }
}
