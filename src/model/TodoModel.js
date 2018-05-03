import moment from 'moment';
import { computed, observable, decorate } from 'mobx';
import shortid from 'shortid';
class TodoModel {
    constructor(){
        
        this.id = shortid.generate()
    }
    
    id = ""
    task = ""
    details = ""
    deadlineDate = moment().add(1, "days")
    completed = false;
    get overDue() {
        return moment(this.deadlineDate).isSameOrAfter(moment())
    }
}

export default decorate(TodoModel, {
    task :observable,
    details: observable,
    deadlineDate: observable,
    completed: observable,
    overDue : computed
})