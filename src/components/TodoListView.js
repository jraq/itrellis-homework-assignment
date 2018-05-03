import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { observer, inject } from 'mobx-react';
import TodoListItem from './TodoListItem';
class TodoListView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        const { todoStore } =this.props;

        //This is where the ajax call would be to populate the store
        todoStore.getTodos();
    }
    deleteTodo = (itemId, parentId = null) => {
        const {todoStore } = this.props;
        todoStore.deleteTodo(itemId, parentId);
    }
    markComplete = (itemId, parentId = null) => {
        const {todoStore } = this.props;
        
        todoStore.markComplete(itemId, parentId);
    }
    render() {
        const{ todoStore} = this.props;
        return (
            <Row>
                <Col>
                    <h2>Todos</h2>
                    <Row>
                        <Col>
                            <ListGroup>
                                {todoStore.todos.map((item, index) =>{
                                    return <TodoListItem key={index} todo={item} deleteTodo={this.deleteTodo} markComplete={this.markComplete} />;
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default (inject("todoStore"))(observer(TodoListView));