export const showCategory = (name) => ({
    type: 'SHOW_CATEGORY',
    name,
});

export const showGallery = (images) => ({
    type: 'SHOW_GALLERY',
    images,
});

export const previousImage = () => ({
    type: 'PREVIOUS_IMAGE',
});

export const nextImage = () => ({
    type: 'NEXT_IMAGE',
});

export const hideGallery = (images) => ({
    type: 'HIDE_GALLERY',
    images,
});
