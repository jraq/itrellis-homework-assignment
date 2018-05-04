import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem,  } from 'reactstrap';
import { observer, inject } from 'mobx-react';
import TodoListItem from './TodoListItem';
import {Link} from 'react-router-dom';
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
                    <h2>To-dos</h2>
                    <Row>
                        <Col>
                            <ListGroup>
                                {todoStore.todos.map((item, index) =>{
                                    return <TodoListItem key={index} isParentTodo={true}  todo={item} deleteTodo={this.deleteTodo} markComplete={this.markComplete} />;
                                })}
                                {todoStore.todos.length === 0 && <ListGroupItem>
                                    <Link to="/add">Add a to-do</Link>
                                </ListGroupItem>}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default (inject("todoStore"))(observer(TodoListView));