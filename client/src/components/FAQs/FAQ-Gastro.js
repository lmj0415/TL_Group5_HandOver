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
                            <span>{selected === i ? '˄' : '˅'}</span>
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
        question:"Question 1",
        answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    },
    {
        question:"Question 2",
        answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    },
    {
        question:"Question 3",
        answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    }
]

export default FAQGastro