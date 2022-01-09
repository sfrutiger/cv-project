import React, { Component} from 'react'
import '../styles/EduInfo.css';

class EduInfo extends Component {
    
    render() {
        return (
            <ul className ='eduInfoContainer'>
                {this.context.education.map(education => (
                    <li key={education.id}>
                        <h2>{education.name}</h2>
                        <p>{education.degree}, {education.major}, {education.graduationYear}</p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default EduInfo;