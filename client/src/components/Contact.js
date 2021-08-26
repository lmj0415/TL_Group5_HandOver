import React, {useEffect} from 'react'
import IntroModule from './IntroModule'

import{useContactContext} from "../Context/ContactContext"

const Contact = () => {

    const [message, error, setError, handleChange, submitMessage] = useContactContext()
    let confirmation

    useEffect(() => {
        setError()
        return
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (error !== "") {
            confirmation =  <p>{error}</p> 
    }

    return (
        <>
            <IntroModule 
            subheading= "If you want more Information"
            heading= {"Contact us now!"}/>
            <form>
                <input className="ipt" name="author" placeholder="Name" value={message.author} onChange={handleChange}></input>
                <input className="ipt" type="email" name="email"  placeholder="E-Mail" value={message.email} onChange={handleChange}></input>
                <input className="ipt" name="betreff"  placeholder="Betreff" value={message.betreff} onChange={handleChange}></input>
                <textarea className="ipt" name="message" placeholder="Message" value={message.message} onChange={handleChange}></textarea>
                <input type="submit" name="submit" className="btn" onClick={submitMessage} value="Send" ></input>
            </form>    
            {confirmation}        
        </>
    )
}

export default Contact
 