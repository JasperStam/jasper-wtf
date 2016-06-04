const categoriesBase = [
    // Fontys rubrics
    { name: 'Artwork', start: 30 },
    { name: 'Technische haalbaarheid', start: 70 },
    { name: 'Werking product', start: 0 },
    { name: 'Product', start: 0 },
    { name: 'Trends', start: 0 },
    { name: 'Iteratief werken en reflectie', start: 40 },
    { name: 'Onderzoek', start: 30 },
    { name: 'Documentatie', start: 30 },
    { name: 'Concept', start: 40 },
    { name: 'Presentatie', start: 30 },
    { name: 'Interface', start: 60 },
    { name: 'UX', start: 30 },
    { name: 'User testing', start: 20 },
    // Portfolio categories
    // { name: 'Design', start: 40 },
    // { name: 'Frontend', start: 30 },
    // { name: 'Backend', start: 30 },
    // { name: 'UI', start: 30 },
    // { name: 'Algorithms', start: 40 },
];

const categories = (state = [], action) => {
    switch (action.type) {
        default:
            return categoriesBase;
    }
};

export default categories;
