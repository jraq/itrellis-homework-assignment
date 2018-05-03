import moment from 'moment';
import { computed, observable, decorate } from 'mobx';
import TodoModel from './TodoModel';
import shortid from 'shortid';

class AddTodoModel extends TodoModel {
    constructor() {
        super()
        this.id = shortid.generate()
    }
}

export default decorate(AddTodoModel, {

})