import React from 'react';
import Header from 'component/Header';
import ActiveCategory from './ActiveCategory';
import Categories from './Categories';
import styles from './App.css';

export default React.createClass({
    render() {
        return (
            <div>
                <Header />
                <ActiveCategory />
                <Categories className={styles['radar-container']} />
            </div>
        );
    },
});
