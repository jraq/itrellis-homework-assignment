import { observable, action, decorate } from "mobx"
import ParentTodoModel from "../model/ParentTodoModel";

export class TodoStore {
    todos = []
    getTodos = () => {
        return this.todos;
    }
    addTodo = (todo) =>{
        let addedTodo = new ParentTodoModel(todo);
        this.todos.push(addedTodo);
        
    }
}
export default decorate(TodoStore, {
    todos: observable,
    getTodos: action,
})