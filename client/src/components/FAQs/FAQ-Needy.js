import React from 'react'
import {useState} from 'react'
import './FAQ.css'

function FAQNeedy(){
    
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
        question:"When am I qualified to profit from Hand Over?",
        answer:"Anyone whos family relies on government assistance, who is homeless or has a small pension and therefore cannot afford something from a coffee bar or restaurant. "
    },
    {
        question:"How much can I get?",
        answer:"You can get one coffee or meal per person and day."
    },
    {
        question:"Where can I find participating restaurants or coffee bars?",
        answer:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    },
    {
        question:"How do I see if a restaurant is a partner?",
        answer:"Restaurants and coffee bars who are part of the Hand Over Community have a display in their window and on their counter which identifies them as a official partner. You will also find them marked in our Map, which you find linked below."
    }
]

export default FAQNeedy