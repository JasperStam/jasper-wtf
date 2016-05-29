import React from 'react';
import Rubric from 'component/Rubric';

export default React.createClass({
    getInitialState() {
        return {
            name: 'ActiveRubric',
            tasks: [
                'Task A',
                'Task B',
                'Task C',
            ],
        };
    },
    render() {
        return (
            <Rubric name={this.state.name} tasks={this.state.tasks} />
        );
    },
});
