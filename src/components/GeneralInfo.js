import React, { Component } from 'react'
import '../styles/styles.css';

class GeneralInfo extends Component {
//constructor
    constructor() {
        super();

    this.state = {
        edit: true,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        savedFirstName: '',
        savedLastName: '',
        savedEmail: '',
        savedPhone: '',
        }
    }

//edit functions
    toggleForm = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value
        })
    }

    submitInfo = e => {
        e.preventDefault();
        this.setState({
                savedFirstName: this.state.firstName,
                savedLastName: this.state.lastName,
                savedEmail: this.state.email,
                savedPhone: this.state.phone,
                edit: false
            })
        };
    

    render() {
        const {
            edit,
            firstName,
            lastName,
            email,
            phone,
            savedFirstName,
            savedLastName,
            savedEmail,
            savedPhone,
            } =this.state;


        return (
            <div className='section generalInfoContainer'>
                { savedFirstName ? '': <h2>General Information</h2>}
                <h2>{savedFirstName} {savedLastName}</h2>
                <p>{savedEmail}</p>
                <p>{savedPhone}</p>
                { edit &&
                <form className='general-info-form'>
                    <div className='form-item'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                             name='firstName' 
                             type='text' 
                             placeholder='Enter first name'
                             value={firstName}
                             onChange={this.handleFirstNameChange}></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input 
                            name='lastName' 
                            type='text' 
                            placeholder='Enter last name'
                            value={lastName}
                            onChange={this.handleLastNameChange}></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='email'>Email address</label>
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='example@example.com'
                            value={email}
                            onChange={this.handleEmailChange}></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='phone-number'>Phone number</label>
                        <input 
                            name='phone-number' 
                            type='tel' 
                            placeholder='(555) 555-5555'
                            value={phone}
                            onChange={this.handlePhoneChange}></input>
                    </div>
                </form>}
                { edit && <button onClick={this.submitInfo}>Save</button>}
                <button onClick={this.toggleForm}>{edit ? 'Close': 'Edit'}</button>
            </div>
        )
    }
}
export default GeneralInfo