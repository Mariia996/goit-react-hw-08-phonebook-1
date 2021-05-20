import { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { loginUser } from '../../../../../../redux/phonebook/reducer/auth/operations';

import styles from './LoginUserForm.module.css';

class LoginUserForm extends Component {
    state = {
        email: "",
        password: ""
    }

    emailInputId = uuidv4();
    passwordInputId = uuidv4();

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ email, password });

        this.reset();
    }

    reset = () => {
        this.setState({
            email: '', password: ''
        });
    }

    render() {
        const { email, password } = this.state;
        const { handleChange, handleSubmit, emailInputId, passwordInputId } = this;
        return (
            <form className={styles.registerFormField} onSubmit={handleSubmit}>
                <label htmlFor={emailInputId} className={styles.inputTitle}>Enter you E-mail</label>
                <input type="email"
                    name="email"
                    id={emailInputId}
                    value={email}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your email'}/>

                <label htmlFor={passwordInputId} className={styles.inputTitle}>Enter you password</label>
                <input type="password"
                    name="password"
                    id={passwordInputId}
                    value={password}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your password'}/>
                <button type="submit" className={styles.btn}>Login</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (value) => dispatch(loginUser(value))
    }
}

export default connect(null, mapDispatchToProps)(LoginUserForm);

