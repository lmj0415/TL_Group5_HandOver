import React, {useEffect} from "react"

import { useCMSContext } from "../Context/CMSContext"
import { useTableContext } from "../Context/TableContext"

function ShowTable() {

    const {table, loading, setLoading, showModal} = useCMSContext()
    const {tableData, tableMethode, sortTable, getTableData, deletePost} = useTableContext()

    const tHead = tableMethode.tableHead
    const tBody = tableMethode.tableBody
    const meta = tableMethode.meta 
    
    useEffect(()=> {
        setLoading(true)
        getTableData()
    }, [])

    useEffect(()=> {
        setLoading(true) 
        getTableData()
    }, [table])


    if (loading === true ) {
        return(
            <div className="cmsContent">
                <div className="cmsHead">
                    <h2>Loading... </h2>
                </div>
            </div>
            
        )
    } else {        
        const tableHead = tHead.map(element => {
            return(
            <th key= {element.title}>
                <button className="waves-effect waves-teal btn-flat" name= {meta.tableName} id={element.name} onClick= {sortTable} >{element.title}</button>
            </th>)
        }) 

        const tableBody = tableData.map(element => {
            return(
                <tr key= {element._id}>
                    <td key={tBody[0].name} >{element[tBody[0].name]}</td>
                    <td key={tBody[1].name} >{element[tBody[1].name]}</td>
                    <td key={tBody[2].name} >{element[tBody[2].name].split('T')[0]}</td>
                    <td key={tBody[3].name} > 
                        <button className="btn waves-effect waves-light" name= {tBody[3].name} id={element._id} onClick={showModal} >{tBody[3].title}</button>
                    </td>
                    <td key={tBody[4].name} >
                        <button className="btn waves-effect waves-light" name={tBody[4].name} id={element._id} onClick={deletePost}  >{tBody[4].title}</button>
                    </td>
                </tr>
            )
        })

        return(
            <div className="cmsContent" >
                <div className="cmsHead">
                    <h2>{meta.title}</h2>
                    <button className="btn waves-effect waves-light"  name= {"new"+ meta.name} onClick={showModal} >New {meta.name}</button>
                </div>
                <table className="cmsTable">
                    <thead>
                        <tr>
                            {tableHead}
                        </tr>
                    </thead>
                    <tbody className= "tbody">
                        {tableBody}
                    </tbody>
                </table>
            </div>
        )
    }

    
}

export default ShowTable


 