import React from 'react'
import IntroModule from './IntroModule'

import{useContactContext} from "../Context/ContactContext"

const Contact = (props) => {

    const {message, handleChange} = useContactContext
    console.log(message)

    return (
        <>
            <IntroModule 
            subheading= "If you want more Information"
            heading= {"Contact us now!"}/>
            <form>
                <input name="name" placeholder="Name" value={message.name}  ></input>
                <input name="eMail"  placeholder="E-Mail" value={message.eMail} ></input>
                <textarea name="message" placeholder="Message" value={message.message} ></textarea>
            </form>
        </>
    )
}

export default Contact
