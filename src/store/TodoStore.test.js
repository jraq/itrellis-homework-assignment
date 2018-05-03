import TodoStore from './TodoStore';
import AddTodoModel from '../model/AddTodoModel';
import moment from 'moment';

it('AddTodosWithChild', () => {
    const todoStore = new TodoStore();
    
    let parentTodo = buildParentTodo();
    let childTodo = buildChildTodo();

    todoStore.addTodo(parentTodo);
    todoStore.addTodo(childTodo, parentTodo.id);

    let adddedParentTodo = todoStore.getTodos().find(x => x.id == parentTodo.id);

    let addedChildTodo = adddedParentTodo.children.find(x => x.id == childTodo.id);
    
    expect(adddedParentTodo.task).toBe(parentTodo.task);
    expect(adddedParentTodo.details).toBe(parentTodo.details);   
    expect(adddedParentTodo.deadlineDate).toBe(parentTodo.deadlineDate);  
    expect(adddedParentTodo.complete).toBe(parentTodo.complete);

    expect(addedChildTodo.task).toBe(childTodo.task);
    expect(addedChildTodo.details).toBe(childTodo.details);   
    expect(addedChildTodo.deadlineDate).toBe(childTodo.deadlineDate);  
    expect(addedChildTodo.complete).toBe(childTodo.complete);
    
});

it('GetTodo', () => {
    const todoStore = new TodoStore();
    let parentTodo = buildParentTodo();
    todoStore.addTodo(parentTodo);
    let adddedParentTodo = todoStore.getTodo(parentTodo.id);

    expect(adddedParentTodo.task).toBe(parentTodo.task);
    expect(adddedParentTodo.details).toBe(parentTodo.details);   
    expect(adddedParentTodo.deadlineDate).toBe(parentTodo.deadlineDate);  
    expect(adddedParentTodo.complete).toBe(parentTodo.complete);
});

it('MarkComplete', () => {
    const todoStore = new TodoStore();
    let parentTodo = buildParentTodo();
    let childTodo = buildChildTodo();

    todoStore.addTodo(parentTodo);
    todoStore.addTodo(childTodo, parentTodo.id);

    todoStore.markComplete(parentTodo.id);
    todoStore.markComplete(childTodo.id, parentTodo.id);

    let adddedParentTodo = todoStore.getTodo(parentTodo.id);
    let addedChildTodo = adddedParentTodo.children.find(x => x.id == childTodo.id);

    expect(adddedParentTodo.isComplete).toBe(true);
    expect(addedChildTodo.isComplete).toBe(true);


});

it('DeleteTodo', () => {
    const todoStore = new TodoStore();
    let parentTodo = buildParentTodo();
    let childTodo = buildChildTodo();

    todoStore.addTodo(parentTodo);
    todoStore.addTodo(childTodo, parentTodo.id);

    todoStore.deleteTodo(childTodo.id, parentTodo.id);

    let adddedParentTodo = todoStore.getTodo(parentTodo.id);

    todoStore.deleteTodo(parentTodo.Id);

    let todos = todoStore.getTodos();

    expect(adddedParentTodo.children.length).toBe(0);
    expect(todos.length).toBe(0);

});


const buildParentTodo = () => {
    let todo = new AddTodoModel();
    todo.task = "Test 1"
    todo.details = "Test 2"
    let oneDay = moment().add(1, "days")
    todo.deadlineDate = oneDay;
    todo.complete = false;
    return todo;
}

const buildChildTodo = () => {
    let childTodo = new AddTodoModel();
    childTodo.task = "Child 1"
    childTodo.details = "Child 2"
    let twoDays = moment().add(2, "days")
    childTodo.deadlineDate = twoDays;
    childTodo.complete = false;
    return childTodo;
}