import React, {useEffect} from 'react'
import IntroModule from './IntroModule'

import{useContactContext} from "../Context/ContactContext"

const Contact = () => {

    const [message, isSent, error, setIsSent, handleChange, submitMessage] = useContactContext()
    let confirmation

    useEffect(() => {
        setIsSent(false)
    }, [])

    if (isSent) {
         error ? 
            confirmation =  <p>Error, please try again</p> 
            :confirmation =  <p>Message was send successfully!</p> 
    }

    return (
        <>
            <IntroModule 
            subheading= "If you want more Information"
            heading= {"Contact us now!"}/>
            <form>
                <input name="name" placeholder="Name" value={message.name} onChange={handleChange} ></input>
                <input name="eMail"  placeholder="E-Mail" value={message.eMail} onChange={handleChange}></input>
                <input name="betreff"  placeholder="Betreff" value={message.betreff} onChange={handleChange}></input>
                <textarea name="message" placeholder="Message" value={message.message} onChange={handleChange}></textarea>
                <button name="submit" onClick={submitMessage}>Send</button>
            </form>
            {confirmation}
            
        </>
    )
}

export default Contact
