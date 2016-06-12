import { DEFAULT_CATEGORY } from '../constants';
import projectReducer from './projects';
import _ from 'lodash';

const projectsBase = projectReducer();

const getProjectForCategory = (name) => (
    _.filter(projectsBase, project => (
        _.find(project.categories, category => category.name === name)
    ))
);

const projects = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_CATEGORY':
            return getProjectForCategory(action.name);
        default:
            return getProjectForCategory(DEFAULT_CATEGORY);
    }
};

export default projects;
