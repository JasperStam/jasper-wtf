import React from 'react';
import App from 'container/App';
import reducers from './reducers/index';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Chart from 'chart.js';

import 'style/variables.css';
import 'style/reset.css';

Chart.defaults.global.responsive = true;

let store = createStore(reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
