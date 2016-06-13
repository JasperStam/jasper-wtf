const defaultState = {
    show: false,
    images: [],
    index: 1,
};

const gallery = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_GALLERY':
            return {
                show: true,
                images: action.images,
                index: 1,
            };
        case 'CHANGE_GALLERY_INDEX':
            return {
                show: true,
                images: action.images,
                index: action.index,
            };
        case 'HIDE_GALLERY':
        default:
            return state;
    }
};

export default gallery;
