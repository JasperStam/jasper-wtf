import { combineReducers } from 'redux';
import { categories } from './categories';
import activeRubric from './activeRubric';

const reducers = combineReducers({
    activeRubric,
    categories,
});

export default reducers;
