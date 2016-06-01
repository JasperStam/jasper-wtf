const categoriesBase = [
    // Fontys rubrics
    // { name: 'Artwork', start: 50 },
    // { name: 'Technische haalbaarheid', start: 50 },
    // { name: 'Werking product', start: 50 },
    // { name: 'Product', start: 50 },
    // { name: 'Iteratief werken en reflectie', start: 50 },
    // { name: 'Onderzoek', start: 50 },
    // { name: 'Documentatie', start: 50 },
    // { name: 'Trends', start: 50 },
    // { name: 'Concept', start: 50 },
    // { name: 'Presentatie', start: 50 },
    // { name: 'Interface', start: 50 },
    // { name: 'UX', start: 50 },
    // { name: 'User testing', start: 50 },
    // Portfolio categories
    { name: 'Design', start: 40 },
    { name: 'Frontend', start: 30 },
    { name: 'Backend', start: 30 },
    { name: 'UI', start: 30 },
    { name: 'Algorithms', start: 40 },
];

const categories = (state = [], action) => {
    switch (action.type) {
        default:
            return categoriesBase;
    }
};

export default categories;
