import moment from 'moment';
import { computed, observable, decorate } from 'mobx';
import TodoModel from './TodoModel';

class AddTodoModel extends TodoModel {
}

export default decorate(AddTodoModel, {

})