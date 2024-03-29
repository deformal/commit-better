class CommitQuestions {
  private title: string = '';
  private feature: string = 'none';
  private issues: string = 'none';
  private improvement: string = 'none';
  constructor() {}
  setTitle(summary: string) {
    this.title = summary;
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
export const commitQuestion = new CommitQuestions();
