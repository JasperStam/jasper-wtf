import _ from 'lodash';

const categoriesBase = [
    // Fontys rubrics
    // { name: 'Artwork', value: 50 },
    // { name: 'Technische haalbaarheid', value: 50 },
    // { name: 'Werking product', value: 50 },
    // { name: 'Product', value: 50 },
    // { name: 'Iteratief werken en reflectie', value: 50 },
    // { name: 'Onderzoek', value: 50 },
    // { name: 'Documentatie', value: 50 },
    // { name: 'Trends', value: 50 },
    // { name: 'Concept', value: 50 },
    // { name: 'Presentatie', value: 50 },
    // { name: 'Interface', value: 50 },
    // { name: 'UX', value: 50 },
    // { name: 'User testing', value: 50 },
    // Portfolio categories
    { name: 'Design', value: 40 },
    { name: 'Frontend', value: 40 },
    { name: 'Backend', value: 40 },
    { name: 'UI', value: 40 },
    { name: 'Algorithms', value: 40 },
];

const dummyProjects = [
    {
        categories: [
            {
                name: 'Frontend',
                progress: 20,
            },
        ],
    },
];

const categoriesResult = _.cloneDeep(categoriesBase);

dummyProjects.forEach(project => {
    project.categories.forEach(category => {
        const targetCategory = _.find(categoriesResult, (c) => c.name === category.name);
        targetCategory.value += category.progress;
    });
});

const categories = (state = []) => state;

export default categories;
