// const flock = require('posts/flock.md');
// const wkdz = require('posts/wkdz.md');
// const addressBased = require('posts/addressBased.md');
// const rvi = require('posts/rvi.md');
// const rex = require('posts/rex.md');
// const dashboard = require('posts/dashboard.md');
// const modus = require('posts/modus.md');

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

const base = [
    {
        id: 1,
        name: 'Klant brainstorm',
        description: '',
        completed: true,
        categories: [
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 2,
        name: 'Beneficial Intelligence',
        description: '',
        completed: true,
        categories: [
            { name: 'Trends', progress: 10 },
        ],
    }, {
        id: 3,
        name: 'VR Trendwatch',
        description: '',
        completed: true,
        categories: [
            { name: 'Trends', progress: 5 },
        ],
    }, {
        id: 4,
        name: 'Lego usertest',
        description: '',
        completed: true,
        categories: [
            { name: 'User testing', progress: 10 },
            { name: 'Iteratief werken en reflectie', progress: 10 },
        ],
    }, {
        id: 5,
        name: 'Planning concept',
        description: '',
        completed: true,
        categories: [
            { name: 'Trends', progress: 5 },
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 6,
        name: 'RocketKitz presentatie',
        description: '',
        completed: true,
        categories: [
            { name: 'Presentatie', progress: 20 },
        ],
    }, {
        id: 7,
        name: 'Modus NodeJS',
        description: '',
        completed: true,
        categories: [
            { name: 'Werking product', progress: 20 },
            { name: 'Technische haalbaarheid', progress: 5 },
            { name: 'Product', progress: 20 },
            { name: 'Iteratief werken en reflectie', progress: 5 },
        ],
    }, {
        id: 8,
        name: 'Concept verbetering',
        description: '',
        completed: true,
        categories: [
            { name: 'Concept', progress: 10 },
        ],
    }, {
        id: 9,
        name: 'Modus renders',
        description: '',
        completed: true,
        categories: [
            { name: 'Artwork', progress: 10 },
            { name: 'Onderzoek', progress: 15 },
        ],
    }, {
        id: 10,
        name: 'Modus Python',
        description: '',
        completed: true,
        categories: [
            { name: 'Werking product', progress: 30 },
            { name: 'Technische haalbaarheid', progress: 20 },
            { name: 'Product', progress: 20 },
            { name: 'Onderzoek', progress: 15 },
            { name: 'Iteratief werken en reflectie', progress: 10 },
        ],
    }, {
        id: 11,
        name: 'RocketKitz arduino',
        description: '',
        completed: true,
        categories: [
            { name: 'Werking product', progress: 10 },
            { name: 'Artwork', progress: 20 },
            { name: 'Onderzoek', progress: 15 },
        ],
    }, {
        id: 12,
        name: 'Usertest Less or More 1',
        description: '',
        completed: true,
        categories: [
            { name: 'User testing', progress: 20 },
            { name: 'Presentatie', progress: 15 },
            { name: 'Iteratief werken en reflectie', progress: 10 },
        ],
    }, {
        id: 13,
        name: 'Usertest Less or More 2',
        description: '',
        completed: true,
        categories: [
            { name: 'User testing', progress: 20 },
            { name: 'Presentatie', progress: 15 },
            { name: 'Iteratief werken en reflectie', progress: 3 },
        ],
    }, {
        id: 14,
        name: 'Onderzoek tags',
        description: 'Met klei',
        completed: true,
        categories: [
            { name: 'Onderzoek', progress: 10 },
            { name: 'UX', progress: 30 },
            { name: 'Iteratief werken en reflectie', progress: 5 },
            { name: 'User testing', progress: 10 },
            { name: 'Concept', progress: 10 },
            { name: 'Documentatie', progress: 30 },
        ],
    }, {
        id: 15,
        name: '3d printen tags',
        description: '3d printen, meerdere iteraties',
        completed: true,
        categories: [
            { name: 'Onderzoek', progress: 10 },
            { name: 'UX', progress: 5 },
            { name: 'Iteratief werken en reflectie', progress: 5 },
            { name: 'Product', progress: 10 },
        ],
    }, {
        id: 16,
        name: 'Poster',
        description: '',
        completed: true,
        categories: [
            { name: 'Artwork', progress: 20 },
        ],
    },
];

const projects = (state = [], action = { type: '' }) => {
    switch (action.type) {
        default:
            return base;
    }
};

export default projects;
