const base = [
    {
        name: 'Address Based',
        categories: [
            { name: 'Design', progress: 20 },
            { name: 'Frontend', progress: 60 },
            { name: 'Backend', progress: 50 },
            { name: 'UI', progress: 40 },
            { name: 'Algorithms', progress: 30 },
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
