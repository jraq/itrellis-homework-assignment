import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import TodoListView from './components/TodoListView';
import TodoView from './components/TodoView';
import AddTodo from './components/AddTodo';
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/add">Add Todo</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route path={`/`} exact component={TodoListView} />
                <Route path={`/todo/:todoId`} component={TodoView} />
                <Route path={`/add`} component={AddTodo} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter((observer(App)));
