import moment from 'moment';
import { computed, observable, decorate } from 'mobx';

class TodoModel {
    constructor(){
    
    }
    
    id = 0
    task = ""
    details = ""
    deadlineDate = moment().add(1, "days")
    complete = false;
    get isOverDue() {
        return moment(this.deadlineDate).isSameOrAfter(moment())
    }
}

export default decorate(TodoModel, {
    task :observable,
    details: observable,
    deadlineDate: observable,
    complete: observable,
    isOverDue : computed
})