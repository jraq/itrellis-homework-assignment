import { observable, action, decorate } from "mobx"
import ParentTodoModel from "../model/ParentTodoModel";
import ChildTodoModel from "../model/ChildTodoModel";

export class TodoStore {
    todos = []
    getTodos = () => {
        return this.todos;
    }

    getTodo = (todoId) => {
        return this.todos.find(x => x.id === todoId)
    }

    addTodo = (todo, parentId = null) => {
        if(parentId === null){
            let addedTodo = new ParentTodoModel(todo);
            this.todos.push(addedTodo);
        } else {
            let parentTodo = this.todos.find(x => x.id === parentId);
            let childTodo = new ChildTodoModel(todo);
            parentTodo.children.push(childTodo);
        }
    }

    markComplete = (todoId, parentId = null) => {
        if(parentId === null){
            let todo = this.todos.find(x => x.id === todoId);
            todo.complete= true;
        } else {
            let parentTodo = this.todos.find(x => x.id === parentId);
            let childTodo = parentTodo.children.find(x=>x.id === todoId);     
            childTodo.complete = true;
        }
    }

    deleteTodo = (todoId, parentId = null) => {
        if(parentId === null){
            let todoIndex = this.todos.findIndex(x => x.id === todoId);
            this.todos.splice(todoIndex, 1);
        } else {
            let parentTodo = this.todos.find(x => x.id === parentId);
            let childIndex = parentTodo.children.findIndex(x=>x.id === todoId);
            parentTodo.children.splice(childIndex,1);
        }

    }
}
export default decorate(TodoStore, {
    todos: observable,
    getTodos: action,
})