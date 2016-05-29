import React from 'react';
// import Header from 'component/Header';
import Rubrics from './Rubrics';
import Rubric from './Rubric';
import styles from './App.css';

export default React.createClass({
    render() {
        return (
            <div>
                <Rubrics />
                <Rubric />
            </div>
        );
    },
});
