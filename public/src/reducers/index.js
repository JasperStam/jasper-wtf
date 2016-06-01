import { combineReducers } from 'redux';
import categories from './categories';
import projects from './projects';
import activeCategory from './activeCategory';

const reducers = combineReducers({
    activeCategory,
    categories,
    projects,
});

export default reducers;
