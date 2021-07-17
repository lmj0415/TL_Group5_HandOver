import React, {Component} from "react"
import { useParams } from "react-router"

import CMSContainer from "./CMSContainer"

class CMS extends Component {
    constructor() {
        super()
        this.state = {
            params: "",
            tData: {
                meta: {},
                methode: [],
                body: []
            },
            stories: {
                meta: {title: "Storie"},
                methode: [
                    {name:"name", tag: "<th>", className:"cmsTh"},
                    {name:"title", tag: "<th>", className:"cmsTh"},
                    {name:"date", tag: "<th>", className:"cmsTh"},
                    {name:"edit", tag: "<button>", body: "Edit"},
                    {name:"delete", tag: "<button>", body: "Delete"},
    
                ],
                body: [
                    {title: "this is my title", name: "this is my name", date: new Date("2021-05-12")},
                    {title: "this is your title", name: "this is your name", date: new Date("2021-04-12")},
                    {title: "this is our title", name: "this is our name", date: new Date("2021-03-12")},
                ]

            },

            messages: {
                meta: {title: "Message"},
                methode: [
                    {name:"name", tag: "<th>", className:"cmsTh"},
                    {name:"title", tag: "<th>", className:"cmsTh"},
                    {name:"date", tag: "<th>", className:"cmsTh"},
                    {name:"edit", tag: "<button>", body: "Edit"},
                    {name:"delete", tag: "<button>", body: "Delete"},
    
                ],
                body: [
                    {title: "this is my title", name: "this is my name", date: new Date("2021-05-12")},
                    {title: "this is your title", name: "this is your name", date: new Date("2021-04-12")},
                    {title: "this is our title", name: "this is our name", date: new Date("2021-03-12")},
                ]

            }
        }


    }
  


    render() {

        return(
            <CMSContainer 
                tData={this.state.tData} />

                
        )
    }
} 

export default CMS