import { combineReducers } from 'redux';
import { categories } from './categories';
import activeCategory from './activeCategory';

const reducers = combineReducers({
    activeCategory,
    categories,
});

export default reducers;
