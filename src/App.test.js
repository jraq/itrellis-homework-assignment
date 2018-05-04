import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoStore from './store/TodoStore';
import { Provider  } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Provider todoStore={new TodoStore()}>
        <App />
    </Provider>
</BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
