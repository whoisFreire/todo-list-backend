import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

interface TodoProps {
  title: string;
  userId: string;
  isDone?: Date;
  createdAt: Date;
}

export class Todo {
  private _id: string;
  private props: TodoProps;

  constructor(props: Replace<TodoProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(value: string) {
    this.props.title = value;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public get isDone(): Date | null | undefined {
    return this.props.isDone;
  }

  public done() {
    this.props.isDone = new Date();
  }

  public undone() {
    this.props.isDone = null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
