import { createInterface } from "readline";
import { CommitQuestions } from "@utils/commitQuestions";

export class AskQuestions {
  private commitQuestion = new CommitQuestions();

  public async askTitle(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question("Please Enter a commit title: ", (ans) => {
        rl.close();
        this.commitQuestion.setTitle(ans);
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
          this.commitQuestion.setFeature(ans);
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
          this.commitQuestion.setIssue(ans);
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
          this.commitQuestion.setImporovement(ans);
          resolve(ans);
        }
      );
    });
  }
}
