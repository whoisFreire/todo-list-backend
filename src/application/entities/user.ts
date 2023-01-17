import { Todo } from './todo';
import { Replace } from 'src/helpers/replace';
import { randomUUID } from 'crypto';
interface UserProps {
  name: string;
  email: string;
  password: string;
  todos: Todo[];
  createdAt: Date;
  updatedAt?: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(
    props: Replace<UserProps, { createdAt?: Date; todos?: Todo[] }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      todos: props.todos ?? ([] as Todo[]),
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(value: string) {
    this.props.name = value;
  }

  public get email(): string {
    return this.props.email;
  }

  public set email(value: string) {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
      this.props.email = value;
    }
  }

  public get password(): string {
    return this.props.password;
  }

  public set password(value: string) {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(
        value,
      )
    ) {
      this.props.password = value;
    }
  }

  public get todos(): Todo[] {
    return this.props.todos;
  }

  public set todos(value: Todo[]) {
    this.props.todos = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
  public get updatedAt(): Date | null | undefined {
    return this.props.updatedAt;
  }
}
