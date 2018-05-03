import { observable, action, decorate } from "mobx"

export class TodoStore {
    todos = []

    getTodos() {
        return this.todos;
    }
}
export default decorate(TodoStore, {
    todos: observable,
    getTodos: action,
    getTodo: action,
    insertTodo: action
})