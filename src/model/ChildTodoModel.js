import moment from 'moment';
import { computed, observable, decorate } from 'mobx';
import TodoModel from './TodoModel';

class ChildTodoModel extends TodoModel {
    constructor(todo){
        super();
        this.id = todo.id;
        this.task = todo.task;
        this.details = todo.details
        this.deadlineDate = todo.deadlineDate;
        this.complete = todo.complete;
    }
   get isComplete() {
      return this.complete;
   }
}

export default decorate(ChildTodoModel, {
    isComplete : computed
})