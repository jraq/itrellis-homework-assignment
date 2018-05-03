import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topic : "",
            details : "",
            

         }
    }
    render() { 
        return (<div>Add Todo</div>)
    }
}
 
export default AddTodo;