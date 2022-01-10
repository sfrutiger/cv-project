import React, { Component} from 'react'
import uniqid from 'uniqid';
import '../styles/EduInfo.css';

class EduInfo extends Component {
    constructor() {
        super();

    this.state = {
        school: '',
        major: '',
        degree: '',
        graduationYear: '',
        education: [
        {
            id: 1,
            school: 'SUNY Geneseo',
            major: 'Physics',
            degree: 'Bachelor of Arts',
            graduationYear: '2011'
        },
        {
            id: 2,
            school: 'University of South Carolina',
            major: 'Physical Therapy',
            degree: 'Doctorate',
            graduationYear: '2018'
        }
        ],
        edit: true
        };
    }

    //edit functions
    toggleForm = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleSchoolChange = e => {
        this.setState({
            school: e.target.value
        })
    }

    handleDegreeChange = e => {
        this.setState({
            degree: e.target.value
        })
    }

    handleMajorChange = e => {
        this.setState({
            major: e.target.value
        })
    }

    handleGradYearChange = e => {
        this.setState({
            graduationYear: e.target.value
        })
    }

    submitEducation = e => {
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                major: this.state.major,
                graduationYear: this.state.graduationYear
            }),
            school: '',
            degree: '',
            major: '',
            graduationYear: '',
            edit: false
        })
    }
    
    render() {
        const {
            school,
            degree,
            major,
            graduationYear,
            education,
            edit
            } =this.state;

        return (
            <div className ='eduInfoContainer'>
                <ul>
                    {education.map(edu => (
                        <li key={edu.id}>
                            <h2>{edu.school}</h2>
                            <p>{edu.degree}, {edu.major}, {edu.graduationYear}</p>
                        </li>
                    ))}
                </ul>
                { edit &&
                <form className='general-info-form'>
                    <div className='form-item'>
                        <label htmlFor='school'>School</label>
                        <input
                             name='school' 
                             type='text' 
                             placeholder='Generic State University'
                             onChange={this.handleSchoolChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='degree'>Degree</label>
                        <input
                             name='degree' 
                             type='text' 
                             placeholder='Bachelor of Arts, PhD, etc.'
                             onChange={this.handleDegreeChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='major'>Major</label>
                        <input
                             name='msjor' 
                             type='text' 
                             placeholder='Chemistry, biology, etc.'
                             onChange={this.handleMajorChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='graduationYear'>Graduation Year</label>
                        <input
                             name='graduationYear' 
                             type='number'
                             min='1900'
                             max='2100'
                             placeholder='YYYY'
                             onChange={this.handleGradYearChange}
                             />
                    </div>
                </form>}
                { edit && <button onClick={this.submitEducation}>Save</button>}
                <button onClick={this.toggleForm}>{edit ? 'Close': 'Edit'}</button>
            </div>
        )
    }
}


export default EduInfo;