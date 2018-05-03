import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoStore from './store/TodoStore';
import { Provider  } from 'mobx-react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider todoStore={new TodoStore()}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
