import React, {Component} from "react"
import callAPI from "./CmsApi"

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
                    {name:"Name", tag: "<th>", className:"cmsTh"},
                    {name:"Title", tag: "<th>", className:"cmsTh"},
                    {name:"Date", tag: "<th>", className:"cmsTh"},
                    {name:"Edit", tag: "<button>", onClick: "edit"},
                    {name:"Delete", tag: "<button>", onClick:" props.delete"},
    
                ],
                body: []

            },

            messages: {
                meta: {title: "Message"},
                methode: [
                    {name:"Name", tag: "<th>", className:"cmsTh"},
                    {name:"Title", tag: "<th>", className:"cmsTh"},
                    {name:"Date", tag: "<th>", className:"cmsTh"},
                    {name:"Message", tag: "<button>", onclick: "answer"},
                    {name:"Delete", tag: "<button>", onclick: "delete"},
    
                ],
                body: []

            }
        }

        this.fetchTableData = this.fetchTableData.bind(this)
        this.callAPI = callAPI.bind(this)
    }
  
    

    fetchTableData(event) {
        event.preventDefault()
        const dataName= event.target.id

        this.setState({
            tData: this.state[dataName]
            })

        this.callAPI()
    }


    render() {

        return(
            <CMSContainer 
                tData={this.state.tData} 
                fetchTableData={this.fetchTableData}
                useMethode ={this.useMethode} />

                
        )
    }
} 

export default CMS