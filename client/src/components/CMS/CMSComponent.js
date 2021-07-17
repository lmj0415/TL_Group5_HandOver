import React, {Component} from "react"

import CMSContainer from "./CMSContainer"

class CMS extends Component {
    constructor() {
        super()
        this.state = {
            sData: {
                methode: {
                    name: true,
                    date: true,
                    delete: true,
                    edit: true,
                    answer: false

                },
                body: [
                    {title: "this is my title", name: "this is my name", date: new Date("2021-05-12")},
                    {title: "this is your title", name: "this is your name", date: new Date("2021-04-12")},
                    {title: "this is our title", name: "this is our name", date: new Date("2021-03-12")},
                ]
            },

            mData: {
                methode: {
                    name: true,
                    date: true,
                    delete: true,
                    edit: false,
                    answer: true
                },
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
                data={this.state.sData} />
                
        )
    }
} 

export default CMS