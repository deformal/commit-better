export class CommitQuestions {
  private title: string = "";
  private feature: string = "";
  private issues: string = "";
  private improvement: string = "";
  constructor() {}
  setTitle(summary: string) {
    this.title = summary.toUpperCase();
    return this;
  }

  setIssue(issue: string) {
    this.issues = issue;
    return this;
  }

  setFeature(feature: string) {
    this.feature = feature;
    return this;
  }

  setImporovement(imp: string) {
    this.improvement = imp;
    return this;
  }

  getTitle(): string {
    return this.title;
  }

  getFeature(): string {
    return this.feature;
  }

  getIssue(): string {
    return this.issues;
  }

  getImprovement(): string {
    return this.improvement;
  }
}
