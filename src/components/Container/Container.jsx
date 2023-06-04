import React from 'react';
import css from './Container.module.css';
import { Component } from 'react';
import shortid from 'shortid';


class Container extends Component {
    state = {
        name: '',
        number: '',
    };
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();
    
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }; 
    handleSubmit = event => {
        event.preventDefault();
    
        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: ' ', number: ' ' });
    };

 render () {
    return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId} className={css.titleInput} >
            Name
            <input className={css.inputTitle}
                onChange={this.handleChange}    
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id= {this.nameInputId}
            />
            </label >
        <label htmlFor={this.numberInputId} className={css.titleInput} >
            Number
            <input className={css.inputTitle}
                onChange={this.handleChange}    
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id= {this.numberInputId}
            />
            </label>
             <button className={css.btnTitle} type="submit">Add contact</button>
        </form>

    )
}
}
export default Container