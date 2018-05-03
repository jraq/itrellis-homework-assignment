import TodoStore from './TodoStore';
import AddTodoModel from '../model/AddTodoModel';
import moment from 'moment';
it('GetTodos', () => {
    const todoStore = new TodoStore();
    expect(todoStore.getTodos().length).toBe(0);    
});

it('AddTodos', () => {
    const todoStore = new TodoStore();
    let todo = new AddTodoModel();
    todo.task = "Test 1"
    todo.details = "Test 2"
    let date = moment().add(1, "days")
    todo.deadlineDate = date;
    todo.completed = false;
    todoStore.addTodo(todo);

    let todos = todoStore.getTodos().find(x => x.id == todo.id);
    expect(todos.task).toBe("Test 1");
    expect(todos.details).toBe("Test 2");   
    expect(todos.deadlineDate).toBe(date);  
    expect(todos.completed).toBe(false); 
     
});