import React, {useState, createContext, useContext} from "react"

const ContactContext = createContext()

export const ContactProvider = props => {

    const [message, setMessage] = useState({
        author:"",
        email:"",
        betreff:"",
        message: "",
    })
    const [error, setError] = useState("")


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

    const checkValues = (obj) => {
        const exists = Object.keys(obj).some(function(k) {
            return obj[k] === "";
        });
        return exists
    }

    const validateEmail = (email) => {
        
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



    const submitMessage = (event) => {
        event.preventDefault()
        setError("")
        if (checkValues(message)) {
            setError("Please fill all the fields!")
            return
        } else if (validateEmail(message.email) === false) {
            setError("Please check your email")
            return
        } else {
            console.log(message)
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
                        author:"",
                        email:"",
                        betreff:"",
                        message: "",
                    })
                    setError("Message was send successfully!")
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setError("Something went wrong, please try again!")
                    });
        }
    }

 
    return(
        <ContactContext.Provider value={[
            message,
            error,
            setError,
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