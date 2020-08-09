export class Message {
  public authorId: string;
  public text: string;

  constructor(authorId: string, text: string) {
    this.authorId = authorId;
    this.text = text;
  }
}
