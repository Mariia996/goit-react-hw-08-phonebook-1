import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { addContactsFetch } from '../../../../../../redux/phonebook/phonebook-operations';
import { getAllContacts } from '../../../../../../redux/phonebook/phonebook-selectors';
import {fields} from "./fields";
import styles from './FormAddContacts.module.css';


class FormAddContacts extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = ({ target }) => {
    const {name, value} = target
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, number} = this.state;
        const { onSubmit, contacts } = this.props;

        const result = contacts.find(contact => {
                return (contact.name === name || contact.number === number);
            });
            if (result) {
               return alert(`${name} is already in contacts`);
        } else {
            onSubmit({ name, number });
            }


        this.reset();
    }

    reset = () => {
        this.setState({
            name: '', number: ''
        });
    }

    render() {
        const { name, number} = this.state;
        const { onSubmit, handleChange, nameInputId, numberInputId } = this;

        return (<form className={styles.formField} onSubmit={onSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor={nameInputId} className={styles.nameInput}>Name</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    type={fields.nameValue.type}
                    value={name}
                    name="name"
                    id={nameInputId}
                    pattern={fields.nameValue.pattern}
                    title={fields.nameValue.title}
                    required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={numberInputId} className={styles.nameInput}>Number</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    id={numberInputId}
                    type={fields.numberValue.type}
                    value={number}
                    name="number"
                    pattern={fields.numberValue.pattern}
                    title={fields.numberValue.title}
                    required />
            </div>
            <button type="submit" className={styles.btn}>Add contact</button>
        </form> )
    }
}

FormAddContacts.defaultProps = {
    name: '',
    number: ''
}

FormAddContacts.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string
}

const mapStateToProps = state => {
    return {
        contacts: getAllContacts(state)
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (value) => dispatch(addContactsFetch(value))

})

export default connect(mapStateToProps, mapDispatchToProps)(FormAddContacts);