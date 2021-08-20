import React, {useState, createContext, useContext} from "react"

const ContactContext = createContext()

export const ContactProvider = props => {

    const [message, setMessage] = useState({
        name:"1",
        eMail:"2",
        message: "3",
    })


    const handleChange = (event) => {

    }

    const values = {
        message,
        handleChange,
    }

    return(
        <ContactContext.Provider value={values}>
            {props.children}
        </ContactContext.Provider>
    )
}


export const useContactContext = () => {
    return useContext(ContactContext)
}