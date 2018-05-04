import React, { Component } from 'react';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';
import AddTodoModel from '../model/AddTodoModel';
import moment from 'moment';
import { observer, inject } from 'mobx-react';

class AddTodo extends Component {
    state = {
        task: "",
        details: "",
        deadlineDate: ""
    }
    handleChange = (event) => {
        switch (event.target.name) {
            case "title":
                this.setState({ task: event.target.value });
                break;
            case "details": 
                this.setState({ details: event.target.value });
                break;
            case "deadlineDate": 
                this.setState({ deadlineDate: event.target.value });
                break;
            default: 
                break;
        }
    }
    submitTodo = (e) => {

        e.preventDefault();
        const { task, details, deadlineDate } = this.state
        const { history, todoStore } = this.props;

        let submitTodo = new AddTodoModel();
        submitTodo.task = task;
        submitTodo.details = details;
        submitTodo.deadlineDate = moment(deadlineDate);

        let todoId = todoStore.addTodo(submitTodo);

        history.push(`/todo/${todoId}`);

    }

    render() {
        const { task, details, deadlineDate } = this.state;
        return (<Form onSubmit={this.submitTodo}>
            <h4>Add To-do</h4>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" required={true} onChange={this.handleChange} name="title" value={task} placeholder="Task" />
            </FormGroup>
            <FormGroup>
                <Label for="details">Details</Label>
                <Input type="textarea" onChange={this.handleChange} name="details" value={details} placeholder="Details" />
            </FormGroup>
            <FormGroup>
                <Label for="deadlineDate">Due Date</Label>
                <Input type="date" required={true} onChange={this.handleChange} name="deadlineDate" value={deadlineDate} placeholder="Due Date" />
            </FormGroup>
            <Button className="float-right" color="info" type="submit">Submit</Button>
        </Form>)
    }
}

export default (inject("todoStore"))(observer(AddTodo));