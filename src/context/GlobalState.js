import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial state
const initialState = {
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
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(<GlobalContext.Provider value={{
        infoEdit: state.infoEdit,
        educationEdit: state.educationEdit,
        info: state.info,
        education: state.education
    }}>
        {children}
    </GlobalContext.Provider>);
}