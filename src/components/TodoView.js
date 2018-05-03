import React, { Component } from 'react';
import { Input, Row, Col, ListGroupItem, Badge, Button, Container, Label } from 'reactstrap';
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router';
class TodoView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        const { match: { params: { todoId } }, todoStore } = this.props;
        todoStore.getTodo(todoId)
    }
    deleteTodo = (e) => {
        const {  match: { params: { todoId } }, todoStore } = this.props;
        let todo = todoStore.getTodo(todoId);
        todoStore.deleteTodo(todo.id);

    }
    markComplete = (e) => {
        const { match: { params: { todoId } }, todoStore } = this.props;
        let todo = todoStore.getTodo(todoId);
        todoStore.markComplete(todo.id);
    }
    render() {
        const { match: { params: { todoId } }, todoStore } = this.props;
        let todo = todoStore.getTodo(todoId);
        console.log(todo);
        if (todo !== undefined) {
            return <Container><Row>
                <Col>
                    <Row>
                        <Col>
                            <h4> {todo.task} </h4>
                        </Col>
                        <Col>
                            <Button onClick={this.deleteTodo} size="sm" color="danger">Delete</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {todo.details}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            DueDate : {todo.deadlineDate.format('MM/DD/YYYY')}
                        </Col>
                    </Row>
                    <Row>
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
                </Col>
            </Row>
            </Container>;
        }
        return <Redirect to="/"/>
    }
}

export default (inject("todoStore"))(observer(TodoView));;