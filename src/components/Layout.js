import React, { Fragment, Component } from 'react';

import styles from './styles/Layout.module.css';

import Toolbar from './Navigation/Toolbar';
import SideDrawer from './Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () =>{
        this.setState({ showSideDrawer: true});
    }

    sideDrawerCloseHandler = () => {

        this.setState({ showSideDrawer: false });

    }
    render() {
        return (
            <Fragment>
                <Toolbar showSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

};

export default Layout;