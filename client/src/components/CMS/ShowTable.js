import React, {useEffect} from "react"
import { useCMSContext } from "../Context/CMSContext"
import { useTableContext } from "../Context/TableContext"



function ShowTable() {

    const [table, isLoading] = useCMSContext()
    const [tableData, tableMethode, getTableData, sortTable, modal, setModal] = useTableContext()

    const tHead = tableMethode.tableHead
    const tBody = tableMethode.tableBody
    const meta = tableMethode.meta 

    useEffect(()=> {
        setModal("I was set!")
        console.log(modal)
    }, [])

    // useEffect(()=>{ 
    //     getTableData
    // }, [table])
      
    if (isLoading) {
        return(
            <div className="cmsHead">
                <h2>Loading... </h2>
            </div>
        )
    } else {

        // const tableHead = tHead.map(element => {
        //     return(
        //     <th key= {element.title}>
        //         <button className="waves-effect waves-teal btn-flat" name= {meta.tableName} id={element.name} onClick= {sortTable} >{element.title}</button>
        //     </th>)
        // }) 

        // const tableBody = tableData.map(element => {
        //     return(
        //         <tr key= {element._id}>
        //             <td key={tBody[0].name} >{element[tBody[0].name]}</td>
        //             <td key={tBody[1].name} >{element[tBody[1].name]}</td>
        //             <td key={tBody[2].name} >{element[tBody[2].name].split('T')[0]}</td>
        //             <td key={tBody[3].name} > 
        //                 <button className="btn waves-effect waves-light" name= {tBody[3].name} id={element.id} onClick={null} >{tBody[3].title}</button>
        //             </td>
        //             <td key={tBody[4].name} >
        //                 <button className="btn waves-effect waves-light" name={tBody[4].name} id={element._id} onClick={null}  >{tBody[4].title}</button>
        //             </td>
        //         </tr>
        //     )
        // })

        return(
            <div> 

                {/* <div className="cmsHead">
                    <h2>{meta.title}</h2>
                    <button className="btn waves-effect waves-light" name= {"new"+ meta.name} onClick={null} >New {meta.name}</button>
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
                </table> */}
                {modal} 
                {table}
            </div>
        )
    }
}



    


export default ShowTable


































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