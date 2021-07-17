import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

function ShowTable(props) {

    const methode = props.data.methode
    const data = props.data.body
    


    // const TableHead = methode.map(element => {
    //     element ? console.log(element): null
    // }) 

    return(
        <div className="cmsContent">
            <table style= {{marginLeft:150, width: 1600}}>
                    <thead>
                        <tr>
                            <th>
                                <button class="waves-effect waves-teal btn-flat">Title</button>
                            </th>
                            <th>
                                <button class="waves-effect waves-teal btn-flat">Name</button>
                            </th>
                            <th>
                                <button class="waves-effect waves-teal btn-flat">Date</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
        </div>
    )
}

export default ShowTable