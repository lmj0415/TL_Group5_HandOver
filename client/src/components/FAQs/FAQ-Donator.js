import React from 'react'
import {useState} from 'react'
import './FAQ.css'

function FAQDonator(){
    
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
        question:"How can I hand something over?",
        answer:"If you visit one of our partner restaurants or coffee bars you can say that you like to 'Hand Over' and donate easily in the restaurant while you are ordering something for yourself."
    },
    {
        question:"How do I see if a restaurant is a partner?",
        answer:"Restaurants and coffee bars who are part of the Hand Over Community have a display in their window and on their counter which identifies them as a official partner. You will also find them marked in our Map, which you find linked below."
    },
    {
        question:"Where can I find participating restaurants or coffee bars?",
        answer:"You will find them marked in our Map, which you find linked below. They also promote their partnership by presenting the HAnd Over display in their store windows and on their counters. "
    },
    {
        question:"Do I have to donate a whole meal?",
        answer:"It is up to you if you want to donate for a whole meal or if you just want to donate a certain amount."
    }
]

export default FAQDonator