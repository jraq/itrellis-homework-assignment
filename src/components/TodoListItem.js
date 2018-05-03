import React, { Component } from 'react';
import { Input, Row, Col, ListGroupItem, Badge, Button, Container, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {observer } from 'mobx-react';
class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    delete = (e) => {
        //TODO: Pass this up and delete the todo
        const {todo} =this.props;
        this.props.deleteTodo(todo.id);
    }
    handleCompleteChange = (e) =>{
        const {todo} =this.props;
        this.props.markComplete(todo.id);
    }
    render() {
        const { todo } = this.props;
        return (<ListGroupItem color={todo.isOverDue ? "danger" : ""}>
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        <Label check>
                            <Input
                            checked={todo.isComplete}
                            type="checkbox"
                            onChange={this.handleCompleteChange} />{' '}
                            Complete
                        </Label>
                    </Col>
                    <Col>
                     <Link to={`/todo/${todo.id}`}> {todo.task} </Link>
                    </Col>
                    <Col>
                        {todo.details === "" ? "None" : todo.details}
                    </Col>
                    <Col className="justify-content-between">
                        DueDate : {todo.deadlineDate.format('MM/DD/YYYY')}
                    </Col>
                    <Col className="justify-content-between">
                        <Button onClick={this.delete} size="sm" color="danger">Delete</Button>
                    </Col>
                </Row>
            </Container>
        </ListGroupItem>)
    }
}

export default observer(TodoListItem);