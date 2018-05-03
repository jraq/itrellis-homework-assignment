import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './store/TodoStore';
import { Provider  } from 'mobx-react';

ReactDOM.render(<Provider todoStore={new TodoStore()}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
