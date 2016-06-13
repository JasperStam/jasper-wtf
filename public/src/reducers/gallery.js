const defaultState = {
    show: false,
    images: [],
    index: 0,
};

const gallery = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_GALLERY':
            return {
                show: true,
                images: action.images,
                index: 0,
            };
        case 'NEXT_IMAGE':
            return {
                show: true,
                images: state.images,
                index: state.index + 1,
            };
        case 'PREVIOUS_IMAGE':
            return {
                show: true,
                images: state.images,
                index: state.index + 1,
            };
        case 'HIDE_GALLERY':
        default:
            return defaultState;
    }
};

export default gallery;
