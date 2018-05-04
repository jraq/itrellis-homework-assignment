import React, { Component } from 'react';
import { Input, Row, Col, ListGroupItem, Button, Container, Label, ListGroup, Form, FormGroup } from 'reactstrap';
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router';
import TodoListItem from './TodoListItem';
import AddTodoModel from '../model/AddTodoModel';
import moment from 'moment';

class TodoView extends Component {
    state = {
        task: "",
        details: "",
        deadlineDate: ""
    }
    componentDidMount() {
        const { match: { params: { todoId } }, todoStore } = this.props;
        todoStore.getTodo(todoId)
    }
    deleteTodo = (e) => {
        const { match: { params: { todoId } }, todoStore } = this.props;
        todoStore.deleteTodo(todoId);

    }
    markComplete = (e) => {
        const { match: { params: { todoId } }, todoStore } = this.props;
        todoStore.markComplete(todoId);
    }
    deleteChildTodo = (childId) => {
        const { match: { params: { todoId } }, todoStore } = this.props;

        todoStore.deleteTodo(childId, todoId);

    }
    markChildComplete = (childId) => {
        const { match: { params: { todoId } }, todoStore } = this.props;
        todoStore.markComplete(childId, todoId);
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
    submitSubTask = (e) => {
        e.preventDefault();
        const { task, details, deadlineDate } = this.state
        const { todoStore, match: { params: { todoId } } } = this.props;

        let todo = todoStore.getTodo(todoId);

        let submitTodo = new AddTodoModel();

        submitTodo.task = task;
        submitTodo.details = details;
        submitTodo.complete = todo.complete;
        submitTodo.deadlineDate = moment(deadlineDate);

        todoStore.addTodo(submitTodo, todoId);

        this.setState({
            task: "",
            details: "",
            deadlineDate: ""
        })
    }
    render() {
        const { match: { params: { todoId } }, todoStore } = this.props;
        const { task, details, deadlineDate } = this.state;
        let todo = todoStore.getTodo(todoId);
        if (todo !== undefined) {
            let overDue = todo.isOverDue ? "text-danger" : ""
            return <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h4 className={overDue}>Task: {todo.task} </h4>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                Details:  {todo.details === "" ? "None" : todo.details}
                            </Col>
                        </Row>
                        <Row>

                            <Col className={overDue}>
                                DueDate : {todo.deadlineDate.format('MM/DD/YYYY')}
                            </Col>
                            <Col>
                                <Label check>
                                    <Input
                                        checked={todo.isComplete}
                                        type="checkbox"
                                        onChange={this.markComplete} />{' '}
                                    Complete
                                </Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={this.deleteTodo} size="sm" color="danger">Delete</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="marginTop10">
                    <Col>
                        <h4>Children</h4>
                        <hr />
                        <ListGroup>
                            {todo.children.length === 0 && <ListGroupItem>None</ListGroupItem>}
                            { todo.children.length > 0 && todo.children.map((item, index) => {
                                return <TodoListItem key={index} isParentTodo={false} todo={item} deleteTodo={this.deleteChildTodo} markComplete={this.markChildComplete} />;
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="marginTop10">
                    <Col>
                        <Form onSubmit={this.submitSubTask}>
                            <h4>Add Sub Task</h4>
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
                        </Form>
                    </Col>
                </Row>
            </Container>;
        }
        return <Redirect to="/" />
    }
}

export default (inject("todoStore"))(observer(TodoView));;