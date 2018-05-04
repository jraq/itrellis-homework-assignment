import { computed, observable, decorate } from 'mobx';
import TodoModel from './TodoModel';

class ParentTodoModel extends TodoModel {
    constructor(todo) {
        super();
        this.id = todo.id;
        this.task = todo.task;
        this.details = todo.details
        this.deadlineDate = todo.deadlineDate;
        this.complete = todo.complete;
        this.children = todo.children === undefined ? [] : todo.children;
    }
    children = []
    get isComplete() {

        let childComplete = true;
        if (this.children.length > 0) {
            this.children.forEach(child => {
                if (!child.isComplete) {
                    childComplete = false;
                }
            });
        } else {
            childComplete = false;
        }
        return this.complete || childComplete;
    }
}

export default decorate(ParentTodoModel, {
    children: observable,
    isComplete: computed
})