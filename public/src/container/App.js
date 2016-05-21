import React from 'react';
// import Header from 'component/Header';
import RadarChart from './RadarChart';
import styles from './App.css';

export default React.createClass({
    render() {
        return (
            <div className={styles.layout}>
                <RadarChart />
            </div>
        );
    },
});
