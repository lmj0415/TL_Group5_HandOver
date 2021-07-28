import React from "react"
//import {Link} from "react-router-dom"



function StoriesTable(props) {

                    
if (props.isLoading) {
    return(
        <div className="cmsHead">
            <h2>Loading...</h2>
        </div>) 
}else {

    const tableHead = props.tHead.map(element => {
        return(
        <th key= {element.title}>
            <button className="waves-effect waves-teal btn-flat" name= {props.meta.tableName} id={element.name} onClick= {props.sortTable} >{element.title}</button>
        </th>)
    })

    const tableBody = props.tData.map(element => {
        return(
            <tr key= {element._id}>
                <td key={props.tBody[0].name} >{element[props.tBody[0].name]}</td>
                <td key={props.tBody[1].name} >{element[props.tBody[1].name]}</td>
                <td key={props.tBody[2].name} >{element[props.tBody[2].name].split('T')[0]}</td>
                <td key={props.tBody[3].name} > 
                    <button className="btn waves-effect waves-light" name= {props.tBody[3].name} onClick={props.handleButton} >{props.tBody[3].title}</button>
                </td>
                <td key={props.tBody[4].name} >
                    <button className="btn waves-effect waves-light" name={props.tBody[4].name} id={element._id} onClick={props.handleButton}  >{props.tBody[4].title}</button>
                </td>
            </tr>
        )
    })

    return(
        <div>       

            <div className="cmsHead">
                <h2>{props.meta.title}</h2>
                    <button className="btn waves-effect waves-light" name= {"new"+ props.meta.name} onClick={props.handleButton} >New {props.meta.name}</button>
            </div>
            <table style= {{marginLeft:150, width: 1200}}>
                <thead>
                    <tr>
                        {tableHead}
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>

        </div>
    )
}




    
}

export default StoriesTable


































// const TableHead = props.methode.map(element => {
//     if (element.tag === "<th>") {
//         return (<th className={element.className} >{element.name}</th>)
//     }
// }) 

// const TableBody = props.data.map(element => {
//     return(
//         <tr>
//             <td >{element.title}</td>
//             <td>{element.name}</td>
//             <td>{element.createdAt.split('T')[0]}</td>
//             <td>
//                 <button className="btn waves-effect waves-light" name={element.id} onClick={element.editStory} >{props.methode[3].name}</button>
//             </td>
//             <td>
//                 <button className="btn waves-effect waves-light" name={element.id} onClick={element.deleteToDB} >{props.methode[4].name}</button>
//             </td>
//         </tr>
//     )
// })



// return(
//     <div className="cmsContent">
//         <div className="cmsHead">
//             <h2>{props.meta.title}s</h2>
//             <Link to={location => `${location.pathname}/new`}>
//                 <button className="btn waves-effect waves-light">New {props.meta.title} </button>
//             </Link>
//         </div>
//         <table className= "cmsTable">
//                 <thead>
//                     <tr>
//                         {TableHead}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {TableBody}
//                 </tbody>
//             </table>
//     </div>
// )