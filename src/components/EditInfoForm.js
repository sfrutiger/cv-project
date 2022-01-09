import React, { Component} from 'react';
import { GlobalContext} from '../context/GlobalState';
import '../styles/GeneralInfo.css';


class EditInfoForm extends Component {
    static contextType = GlobalContext;

    render() {
        return (
            <form className='general-info-form'>
                <div className='form-item'>
                    <label htmlFor='first-name'>First Name</label>
                    <input name='first-name' type='text' placeholder='Enter first name'></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='last-name'>Last Name</label>
                    <input name='last-name' type='text' placeholder='Enter last name'></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='email'>Email address</label>
                    <input name='email' type='email' placeholder='example@example.com'></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='phone-number'>Phone number</label>
                    <input name='phone-number' type='tel' placeholder='(555) 555-5555'></input>
                </div>
                <div className='form-item'>
                    <input type='submit' value='Save'></input>
                </div>
            </form>
        )
    }
}

export default EditInfoForm