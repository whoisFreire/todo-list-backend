export class TodoNotFound extends Error {
  constructor() {
    super('Todo not found!');
  }
}
