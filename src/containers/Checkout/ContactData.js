import React, { Component } from 'react';
import axios from '../../axios-orders';

import styles from './ContactData.module.css';

import Spinner from '../../components/UI/Spinner';
import Button from '../../components/UI/Button';


class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            number: ''
        },
        loading: false
    }

    orderHandler = () => {
        this.setState({ loading: true });

        // alert('Continued');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Gabriel',
                adress: {
                    street: 'adjaa',
                    number: 45,
                    email: 'gabarros17@gmail.com'
                }
            },
            deliveryMethod: 'normal'
        };
        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false});
            this.props.history.push('/');

        }).catch(err => {
            this.setState({ loading: false });
        });

    }

    render() {

        let form = <form>
        <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
        <input className={styles.Input} type="email" name="email" placeholder="Your email" />
        <input className={styles.Input} type="text" name="street" placeholder="Street" />
        <input className={styles.Input} type="text" name="number" placeholder="Number" />
        <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
    </form>;

        if(this.state.loading){
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