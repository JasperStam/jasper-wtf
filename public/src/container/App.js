import React from 'react';
import Header from 'component/Header';
import Rubrics from './Rubrics';
import ActiveRubric from './ActiveRubric';
// import styles from './App.css';

export default React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Rubrics />
                <ActiveRubric />
            </div>
        );
    },
});
