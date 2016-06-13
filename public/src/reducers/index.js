import { combineReducers } from 'redux';
import categories from './categories';
import projects from './projects';
import activeCategory from './activeCategory';
import gallery from './gallery';

const reducers = combineReducers({
    categories,
    projects,
    gallery,
    activeCategory,
});

export default reducers;
