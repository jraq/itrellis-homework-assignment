import { observable, action, decorate } from "mobx"
import ParentTodoModel from "../model/ParentTodoModel";
import ChildTodoModel from "../model/ChildTodoModel";
import AddTodoModel from '../model/AddTodoModel'
import moment from 'moment';

export class TodoStore {
    constructor(){

        //Create some dummy data
        let todo = new AddTodoModel();
        todo.task = "Finish the homework"
        todo.details = "Work on a coding project"
        todo.deadlineDate = moment().add(1, "days");
        todo.complete = false;

        let lateTodo = new AddTodoModel();
        lateTodo.task = "Wash the car"
        lateTodo.details = ""
        lateTodo.deadlineDate = moment().add(-2, "days");
        lateTodo.complete = false;

        this.todos.push(new ParentTodoModel(todo), new ParentTodoModel(lateTodo));

    }
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
            todo.complete = !todo.complete;
        } else {
            let parentTodo = this.todos.find(x => x.id === parentId);
            let childTodo = parentTodo.children.find(x=>x.id === todoId);     
            childTodo.complete = !childTodo.complete;
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