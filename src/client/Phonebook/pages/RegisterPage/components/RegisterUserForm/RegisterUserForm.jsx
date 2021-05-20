import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {registerUser} from '../../../../../../redux/phonebook/reducer/auth/operations';

import styles from './RegisterUserForm.module.css';

class RegisterUserForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    nameInputId = uuidv4();
    emailInputId = uuidv4();
    passwordInputId = uuidv4();

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ name, email, password });

        this.reset();
    }

     reset = () => {
        this.setState({
            name: '', email: '', password: ''
        });
    }

    render() {
        const { name, email, password } = this.state;
        const { handleChange, handleSubmit, nameInputId, emailInputId, passwordInputId } = this;
        return (
            <form className={styles.registerFormField} onSubmit={handleSubmit}>
                <label htmlFor={nameInputId} className={styles.inputTitle}>Name</label>
                <input type="text"
                    name="name"
                    id={nameInputId}
                    value={name}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your name'}/>

                <label htmlFor={emailInputId} className={styles.inputTitle}>E-mail</label>
                <input type="email"
                    name="email"
                    id={emailInputId}
                    value={email}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your email'}/>

                <label htmlFor={passwordInputId} className={styles.inputTitle}>Password</label>
                <input type="password"
                    name="password"
                    id={passwordInputId}
                    value={password}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your password'}/>
                <button type="submit" className={styles.btn}>Register</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit:(body) => dispatch(registerUser(body))
    }
}

export default connect(null, mapDispatchToProps)(RegisterUserForm);