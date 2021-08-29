import React from 'react'
import {useState} from 'react'
import './FAQ.css'

function FAQGastro(){
    
    const [selected, setSelected] = useState(null)
    
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <div className="FAQ-wrapper">
            <div className="accordion">
                {data.map((faq, i) => (
                    <div className="FAQ-Content">
                        <div className="FAQ-title" onClick={()=> toggle(i)}>
                            <h2>{faq.question}</h2>
                            <span>{selected === i ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</span>
                        </div>
                        <div className={selected === i ? 'FAQ-text show' : 'FAQ-text'}> {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const data = [
    {
        question:"How can I register? ",
        answer:"You want to become a partner? Please use the contact form to get in touch with us and mention your interest in becoming a partner with your location."
    },
    {
        question:"What are the next steps?",
        answer:"After we got your message we will get back to you and offer you a link where you can download all print materials and other documents you will need for your restuarant or coffee bar. "
    },
    {
        question:"What else do I have to do? ",
        answer:"Please print the material we will send to you after registration and expose in your store so that your customers will notice it. "
    },
    {
        question:"How does it work? ",
        answer:"With the print material your customers will notice that you are part of the Hand Over Community. People who want to hand over a small donation, coffee or a whole meal can do so by mentioning it. Please collect those donations and use the display which informs that there are free meals or coffees available.<br/> If people in need appear you can hand it over."
    },
    {
        question:"Do I get support if needed? ",
        answer:"We will always be there for you. Please reach out to us via the contact form or via phone. Our number will be send to you after your registration. "
    }
]

export default FAQGastro