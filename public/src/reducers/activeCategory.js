import { DEFAULT_CATEGORY } from '../constants';

const activeCategory = (state = DEFAULT_CATEGORY, action) => {
    switch (action.type) {
        case 'SHOW_CATEGORY':
            return action.name;
        default:
            return state;
    }
};

export default activeCategory;
