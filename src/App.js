import React, { Component } from 'react'
import GeneralInfo from './components/GeneralInfo'
import EduInfo from './components/EduInfo'
import Experience from './components/Experience'
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.state = {
            firstName: ''
            }; 
        }
    
        handleInfoChange(firstName) {
        this.setState({firstName});
        console.log('this works');
        }

    render() {
        const firstName = this.state.firstName;
        return (
            <div className='app'>
                <h1>Curriculum Vitae</h1>
                <GeneralInfo state = {this.state} onInfoChange={this.handleInfoChange}/>
                {/* <EduInfo />
                <Experience /> */}
            </div>
        )
    }
}

export default App


/* const initialState = {
    infoEdit: false,
    educationEdit: false,
    info: {
        firstName: 'Seth',
        lastName: 'Thomas',
        email: 'example@example.com',
        phone: '(555) 555-5555'
    },
    education: [
        {id: 1,
        name: 'SUNY Geneseo',
        major: 'Physics',
        degree: 'Bachelor of Arts',
        graduationYear: '2011'
        },

        {id: 2,
        name: 'University of South Carolina',
        major: 'Physical Therapy',
        degree: 'Doctorate',
        graduationYear: '2018'
        }
    ]
} */
