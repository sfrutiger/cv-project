import React, { Component} from 'react'
import uniqid from 'uniqid';
import '../styles/styles.css';

class Experience extends Component {
    constructor() {
        super();

    this.state = {
        company: '',
        position: '',
        duties: '',
        startDate: '',
        endDate: '',
        edit: true,
        experience: []
        };
    }

    //edit functions
    toggleForm = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleCompanyChange = e => {
        this.setState({
            company: e.target.value
        })
    }

    handlePositionChange = e => {
        this.setState({
            position: e.target.value
        })
    }

    handleDutiesChange = e => {
        this.setState({
            duties: e.target.value
        })
    }

    handleStartDateChange = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDateChange = e => {
        this.setState({
            endDate: e.target.value
        })
    }


    submitExperience = e => {
        e.preventDefault();
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                duties: this.state.duties,
                startDate: this.state.startDate,
                endDate: this.state.endDate
            }),
            company: '',
            position: '',
            duties: '',
            startDate: '',
            endDate: '',
            edit: false
        })
    }

    removeExperience = e => {
        const id = e.target.name;
        const newExperience = this.state.experience.filter(experience => experience.id !== id)

            this.setState({
            experience: newExperience
        })
    }
    
    render() {
        const {
            company,
            position,
            duties,
            startDate,
            endDate,
            edit,
            experience,
            } = this.state;

        return (
            <div className ='section ExperienceContainer'>
                <h2>Experience</h2>
                <ul>
                    {experience.map(job => (
                        <li key={job.id}>
                            <h2>{job.company}</h2>
                            <p>{job.position}, {job.duties}, {job.startDate} to {job.endDate}</p>
                            <button name = {job.id} onClick={this.removeExperience}>Remove</button>
                        </li>
                    ))}
                </ul>
                { edit &&
                <form className='experience-form'>
                    <div className='form-item'>
                        <label htmlFor='company'>Company</label>
                        <input
                             name='company' 
                             type='text' 
                             placeholder='Generic Company, Inc.'
                             onChange={this.handleCompanyChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='position'>Position</label>
                        <input
                             name='position' 
                             type='text' 
                             placeholder='laborer, minion, etc.'
                             onChange={this.handlePositionChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='duties'>Job duties</label>
                        <input
                             name='duties' 
                             type='text' 
                             placeholder='Cleaning, cooking, etc.'
                             onChange={this.handleDutiesChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='startDate'>Start Date</label>
                        <input
                             name='startDate' 
                             type='date'
                             onChange={this.handleStartDateChange}
                             />
                    </div>
                    <div className='form-item'>
                        <label htmlFor='endDate'>End Date</label>
                        <input
                             name='endDate' 
                             type='date'
                             onChange={this.handleEndDateChange}
                             />
                    </div>
                </form>}
                { edit && <button onClick={this.submitExperience}>Save</button>}
                <button onClick={this.toggleForm}>{edit ? 'Close': 'Edit'}</button>
            </div>
        )
    }
}


export default Experience;