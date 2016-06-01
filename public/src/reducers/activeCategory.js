import { DEFAULT_CATEGORY } from 'constant/index';

const activeCategory = (state = DEFAULT_CATEGORY, action) => {
    switch (action.type) {
        case 'SHOW_CATEGORY':
            return action.name;
        default:
            return state;
    }
};

export default activeCategory;
