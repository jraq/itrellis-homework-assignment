import moment from 'moment';
import { computed, observable, decorate } from 'mobx';

class TodoModel {
    id = 0
    task = ""
    details = ""
    deadlineDate = moment().add(1, "days")
    complete = false;
    get isOverDue() {
        return moment(this.deadlineDate).isBefore(moment())
    }
}

export default decorate(TodoModel, {
    task :observable,
    details: observable,
    deadlineDate: observable,
    complete: observable,
    isOverDue : computed
})