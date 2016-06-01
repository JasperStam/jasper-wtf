import _ from 'lodash';

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

const dummyProjects = [
    {
        categories: [
            {
                name: 'Design',
                progress: 20,
            },
            {
                name: 'Frontend',
                progress: 60,
            },
            {
                name: 'Backend',
                progress: 50,
            },
            {
                name: 'UI',
                progress: 40,
            },
            {
                name: 'Algorithms',
                progress: 30,
            },
        ],
    },
];

dummyProjects.forEach(project => {
    project.categories.forEach(category => {
        const targetCategory = _.find(categoriesBase, (c) => c.name === category.name);
        targetCategory.result = targetCategory.result || targetCategory.start;
        targetCategory.result += category.progress;
    });
});

const categories = (state = [], action) => {
    switch (action.type) {
        default:
            return categoriesBase;
    }
};

export default categories;
