const dummyProjects = [
    {
        rubrics: [
            {
                name: 'Artwork',
                progress: 20,
            },
        ],
    },
];

const activeRubric = (state = 'HIDE_RUBRIC', action) => {
    switch (action.type) {
        case 'SHOW_RUBRIC':
            return action.name;
        default:
            return state;
    }
};

export default activeRubric;
