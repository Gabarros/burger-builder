import React, { Component } from 'react';
import axios from '../../axios-orders';

import styles from './ContactData.module.css';

import Spinner from '../../components/UI/Spinner';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            number: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1,
                    maxLenght: 8
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{
                        value: 'fastest',
                        displayValue: 'Fastest'
                    }, {
                        value: 'normal',
                        displayValue: 'Normal'
                    }]
                },
                value: 'normal',
                validation: {},
                valid: true
            }
        },
        loading: false,
        formIsValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const formData = {};

        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;

        }

        // alert('Continued');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData

        };
        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false });
            this.props.history.push('/');

        }).catch(err => {
            this.setState({ loading: false });
        });

    }

    checkValidation(value, rules) {

        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLenght) {
            isValid = value.length <= rules.minLength && isValid;

        }
        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedForm = { ...this.state.orderForm };

        const updatedFormElement = { ...updatedForm[inputIdentifier] };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);

        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;

        }

        this.setState({ orderForm: updatedForm, formIsValid });
    }

    render() {

        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
        <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidade={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangeHandler(event, formElement.id)}
                />
            ))}
            <Button clicked={this.orderHandler} disabled={!this.state.formIsValid} btnType="Success">ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={styles.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }

}
export default ContactData;