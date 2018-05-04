import React, { Component } from 'react';
import { Input, Row, Col, ListGroupItem, Button, Container, Label, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    delete = (e) => {
        //TODO: Pass this up and delete the todo
        const { todo } = this.props;
        this.props.deleteTodo(todo.id);
    }
    handleCompleteChange = (e) => {
        const { todo } = this.props;
        this.props.markComplete(todo.id);
    }
    deleteChildTodo = (childId) => {
        const { todo, todoStore } = this.props;
        todoStore.deleteTodo(childId, todo.id);

    }
    markChildComplete = (childId) => {
        const { todo, todoStore } = this.props;
        todoStore.markComplete(childId, todo.id);
    }
    render() {
        const { todo, isParentTodo } = this.props;
        return (<ListGroupItem color={todo.isOverDue ? "danger" : ""}>
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        {isParentTodo ? <Link to={`/todo/${todo.id}`}> {todo.task} </Link> : todo.task}
                    </Col>
                    <Col>
                        {todo.details === "" ? "None" : todo.details}
                    </Col>
                    <Col className="justify-content-between">
                        DueDate : {todo.deadlineDate.format('MM/DD/YYYY')}
                    </Col>
                    <Col>
                        <Label check>
                            <Input
                                checked={todo.isComplete}
                                type="checkbox"
                                onChange={this.handleCompleteChange} />
                            Complete
                        </Label>
                    </Col>
                    <Col className="justify-content-between">
                        <Button onClick={this.delete} size="sm" color="danger">Delete</Button>
                    </Col>
                </Row>
                {isParentTodo && todo.children.length > 0 && <Row>
                    <Col>
                        <p>Children</p>
                        <hr />
                        <ListGroup>
                            {todo.children.map((item, index) => {
                                return <TodoListItem key={index} isParentTodo={false} todo={item} deleteTodo={this.deleteChildTodo} markComplete={this.markChildComplete} />;
                            })}
                        </ListGroup>
                    </Col>
                </Row>}
            </Container>
        </ListGroupItem>)
    }
}

export default (inject("todoStore"))(observer(TodoListItem));