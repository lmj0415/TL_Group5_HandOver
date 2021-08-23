import React, {useState, createContext, useContext} from "react"

export const ContactContext = createContext()

export const ContactProvider = props => {

    const [message, setMessage] = useState({
        name:"",
        eMail:"",
        betreff:"",
        message: "",
    })
    const [isSent, setIsSent] = useState()
    const [error, setError] = useState()


    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setMessage(prevMessage => {
            let newObj = Object.assign({}, prevMessage)
            newObj[name] = value
            return(newObj)
        }
            
        );
    }

    const submitMessage = (event) => {
        event.preventDefault()
        setIsSent(true)
        fetch('http://localhost:9000/cms/messages', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
                })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                })
            .then(() => {
                setMessage({
                    name:"",
                    eMail:"",
                    betreff:"",
                    message: "",
                })
                setError(false)
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(true)
                });
    }

 
    return(
        <ContactContext.Provider value={[
            message,
            isSent,
            error,
            setIsSent,
            handleChange,
            submitMessage
        ]}>
            {props.children}
        </ContactContext.Provider>
    )
}


export const useContactContext = () => {
    return useContext(ContactContext)
}