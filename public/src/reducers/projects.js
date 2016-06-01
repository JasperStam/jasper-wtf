const projectsBase = [
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

const projects = (state = [], action) => {
    switch (action.type) {
        default:
            return projectsBase;
    }
};

export default projects;
