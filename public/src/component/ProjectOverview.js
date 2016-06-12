import React, { PropTypes } from 'react';
import Project from '../container/Project';
import styles from './ProjectOverview.css';

const ProjectOverview = ({ projects }) => (
    <div className={styles.projectOverview}>
        {projects.map((project, i) =>
            <Project
                key={ project.id }
                lastChild ={projects.length - 1 === i}
                {...project}
            />
          )}
    </div>
);

ProjectOverview.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ProjectOverview;
