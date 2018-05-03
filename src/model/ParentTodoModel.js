import moment from 'moment';
import { computed, observable, decorate } from 'mobx';
import TodoModel from './TodoModel';

class ParentTodoModel extends TodoModel {
    constructor(todo){
        super();
        this.id = todo.id;
        this.task = todo.task;
        this.details = todo.details
        this.deadlineDate = todo.deadlineDate;
        this.completed = todo.completed;
        this.children = todo.children;
    }
   children =  []
   get isComplete() {
       //Check the marked completed and if all children are marked
   }
}

export default decorate(ParentTodoModel, {
    children :observable,
    isComplete : computed
})