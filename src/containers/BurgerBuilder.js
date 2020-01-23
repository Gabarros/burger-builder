import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../axios-orders';

import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary';
import Spinner from '../components/UI/Spinner.js';
import withErrorHandler from '../components/hoc/withErrorHandler';
import * as actionTypes from '../store/actions/index';

class BurgerBuilder extends Component {

    state = {
        purchasing: false
    };

    componentDidMount() {
        this.props.onInitIngredients();

    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0;
    };


    purchaseHander = () => {
        if(this.props.isAuthenticated){
            this.setState({ purchasing: true });
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {

        const disabledInfo = {
            ...this.props.ingredients

        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        };
        let orderSummary = null;

        let burguer = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ingredients) {
            burguer = (<Fragment>

                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={this.props.price}
                    purchaseable={this.updatePurchaseState(this.props.ingredients)}
                    ordered={this.purchaseHander}
                    isAuth = {this.props.isAuthenticated}
                />
            </Fragment>);

            orderSummary = <OrderSummary
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}
                ingredients={this.props.ingredients} />;

        }

        return (
            <Fragment>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burguer}
            </Fragment>
        )
    }

};

const mapStateToProps = state => {
    return{
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        onIngredientAdded: (ingName) => dispatch( actionTypes.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actionTypes.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionTypes.initIngredients()),
        onInitPurchase: () => dispatch(actionTypes.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actionTypes.setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));