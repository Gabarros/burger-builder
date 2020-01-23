import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles/Layout.module.css';

import Toolbar from './Navigation/Toolbar';
import SideDrawer from './Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    sideDrawerCloseHandler = () => {

        this.setState({ showSideDrawer: false });

    }
    render() {
        return (
            <Fragment>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    showSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }


};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token !== null

});

export default connect(mapStateToProps)(Layout);