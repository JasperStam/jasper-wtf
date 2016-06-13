export const showCategory = (name) => ({
    type: 'SHOW_CATEGORY',
    name,
});

export const showGallery = (images) => ({
    type: 'SHOW_GALLERY',
    images,
});

export const changeIndex = (images, index) => ({
    type: 'CHANGE_GALLERY_INDEX',
    images,
    index,
});

export const hideGallery = (images) => ({
    type: 'HIDE_GALLERY',
    images,
});
