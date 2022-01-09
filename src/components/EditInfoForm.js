import React, { Component} from 'react';
import '../styles/GeneralInfo.css';


class EditInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                firstName: '',
                lastName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        /* this.handleSubmit = this.handleSubmit.bind(this); */
      }
    
    handleChange(event) {
        this.props.onInfoChange(event.target.value)
    };

    render() {
        return (
            <form className='general-info-form'>
                <div className='form-item'>
                    <label htmlFor='firstName'>First Name</label>
                    <input name='firstName' type='text' placeholder='Enter first name' value={this.state.value} onChange={this.handleChange}></input>
                </div>
{/*                 <div className='form-item'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input name='lastName' type='text' placeholder='Enter last name' value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='email'>Email address</label>
                    <input name='email' type='email' placeholder='example@example.com'></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='phone-number'>Phone number</label>
                    <input name='phone-number' type='tel' placeholder='(555) 555-5555'></input>
                </div> */}
                <div className='form-item'>
                    <input type='submit' value='Save'></input>
                </div>
            </form>
        )
    }
}

export default EditInfoForm