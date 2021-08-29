import React, {useEffect} from 'react'
import IntroModule from './IntroModule'

import{useContactContext} from "../Context/ContactContext"

const Contact = () => {

    const [message, error, setError, handleChange, submitMessage] = useContactContext()
    let confirmation

    useEffect(() => {
        window.scrollTo(0,0)
        setError()
        return
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (error !== "") {
            confirmation =  <p>{error}</p> 
    }


    return (
        <div className="Contact">
            <IntroModule 
            subheading= "If you want more Information"
            heading= {"Contact us now!"}/>
            <form>
                <label className="ipt">Last & first name
                    <input className="ipt" name="author" placeholder="Name" value={message.author} onChange={handleChange}></input></label>
                <label className="ipt">Mail address
                    <input className="ipt" name="email" placeholder="E-Mail" value={message.email} onChange={handleChange}></input></label>
                <label className="ipt">Subject
                    <input className="ipt" name="betreff"  placeholder="Subject" value={message.betreff} onChange={handleChange}></input></label>
                <label className="ipt">Your message
                    <textarea className="ipt" name="message" placeholder="Message" value={message.message} onChange={handleChange}></textarea></label>
                <input type="submit" name="submit" className="btn" onClick={submitMessage} value="Send ❯" ></input>
             {confirmation}
             </form>
           
            
        </div>
    )
}

export default Contact
 