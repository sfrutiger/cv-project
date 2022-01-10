import React, { Component } from 'react'
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {
//constructor
    constructor() {
        super();

    this.state = {
        edit: true,
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
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

    

    render() {
        const {
            edit,
            firstName,
            lastName,
            email,
            phone,
            } =this.state;

        return (
            <div className='generalInfoContainer'>
                <h2>{firstName} {lastName}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                { edit &&
                <form className='general-info-form'>
                    <div className='form-item'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                             name='firstName' 
                             type='text' 
                             placeholder='Enter first name'
                             value={firstName ? firstName : ''}
                             onChange={this.handleFirstNameChange}></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input 
                            name='lastName' 
                            type='text' 
                            placeholder='Enter last name'
                            value={lastName ? lastName : ''}
                            onChange={this.handleLastNameChange}></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='email'>Email address</label>
                        <input 
                            name='email' 
                            type='email' 
                            placeholder='example@example.com'
                            value={email ? email : ''}
                            onChange={this.handleEmailChange}></input>
                    </div>
                    <div className='form-item'>
                        <label htmlFor='phone-number'>Phone number</label>
                        <input 
                            name='phone-number' 
                            type='tel' 
                            placeholder='(555) 555-5555'
                            value={phone ? phone : ''}
                            onChange={this.handlePhoneChange}></input>
                    </div>
                </form>}
                <button onClick={this.toggleForm}>{edit ? 'Save': 'Edit'}</button>
            </div>
        )
    }
}

export default GeneralInfo