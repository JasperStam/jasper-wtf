const base = [
    {
        id: 1,
        name: 'Flock',
        description: '',
        completed: true,
        categories: [
            { name: 'Design', progress: 5 },
            { name: 'UI', progress: 5 },
        ],
    }, {
        id: 2,
        name: 'WKdZ',
        description: '',
        completed: true,
        categories: [
            { name: 'Design', progress: 3 },
            { name: 'Backend', progress: 5 },
            { name: 'UI', progress: 5 },
        ],
    }, {
        id: 3,
        name: 'Address Based',
        description: '',
        completed: true,
        categories: [
            { name: 'Design', progress: 8 },
            { name: 'Frontend', progress: 20 },
            { name: 'Backend', progress: 10 },
            { name: 'UI', progress: 10 },
            { name: 'Algorithms', progress: 20 },
        ],
    }, {
        id: 4,
        name: 'RVI',
        description: '',
        completed: false,
        categories: [
            { name: 'Design', progress: 5 },
            { name: 'Frontend', progress: 25 },
            { name: 'Backend', progress: 3 },
            { name: 'UI', progress: 10 },
        ],
    }, {
        id: 5,
        name: 'Rex',
        description: '',
        completed: true,
        categories: [
            { name: 'Frontend', progress: 5 },
            { name: 'Backend', progress: 5 },
        ],
    }, {
        id: 6,
        description: '',
        completed: false,
        name: 'Dashboard',
        categories: [
            { name: 'Backend', progress: 5 },
        ],
    }, {
        id: 7,
        description: '',
        completed: false,
        name: 'Modus',
        categories: [
            { name: 'Backend', progress: 3 },
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
