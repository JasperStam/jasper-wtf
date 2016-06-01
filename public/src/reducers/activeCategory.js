const activeCategory = (state = 'Frontend', action) => {
    switch (action.type) {
        case 'SHOW_CATEGORY':
            return action.name;
        default:
            return state;
    }
};

export default activeCategory;
