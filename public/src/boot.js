import React from 'react';
import App from 'container/App';
import reducers from './reducers/index';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'style/variables.css';
import 'style/reset.css';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
