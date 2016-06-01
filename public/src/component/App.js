import React from 'react';
import Header from './Header';
import ActiveCategory from 'container/ActiveCategory';
import Categories from 'container/Categories';
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
