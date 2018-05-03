import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './store/TodoStore';
import { Provider } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


ReactDOM.render(<BrowserRouter>
    <Provider todoStore={new TodoStore()}>
        <App />
    </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
