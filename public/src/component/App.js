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
                <div className={styles['category-container']}>
                    <Categories className={styles['radar-container']} />
                    <ActiveCategory />
                </div>
            </div>
        );
    },
});
