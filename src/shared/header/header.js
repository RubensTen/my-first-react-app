import React, { Component } from 'react';
import styles from './header.scss';
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <img src={logo} className={styles.logo} alt="logo" />
                <h1 className={styles.title}>Welcome to React</h1>
            </header>
        );
    }
}

export default Header;
