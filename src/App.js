import React, { Component } from 'react'
import GeneralInfo from './components/GeneralInfo'
import EduInfo from './components/EduInfo'
import Experience from './components/Experience'
import './styles/App.css';

import { GlobalContext} from './context/GlobalState';
import { GlobalProvider} from './context/GlobalState';

class App extends Component {
    static contextType = GlobalContext;

    render() {
        return (
            <GlobalProvider>
            <div className='app'>
                <h1>Curriculum Vitae</h1>
                <GeneralInfo />
                <EduInfo />
                <Experience />
            </div>
            </GlobalProvider>
        )
    }
}

export default App
