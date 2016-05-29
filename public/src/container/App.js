import React from 'react';
// import Header from 'component/Header';
import Rubrics from './Rubrics';
import styles from './App.css';

export default React.createClass({
    render() {
        return (
            <div className={styles.layout}>
                <Rubrics />
            </div>
        );
    },
});
