import React, {useEffect} from "react"

import CMSNav from "./CMSNav"

import { useCMSContext } from "../Context/CMSContext"
import { useTableContext } from "../Context/TableContext"

function ShowTable() {

    const {table, loading, setLoading, showModal} = useCMSContext()
    const {tableData, tableMethode, sortedBy, setSortedBy, sortTable, getTableData, deletePost, copyToClipboard} = useTableContext()

    const tHead = tableMethode.tableHead
    const tBody = tableMethode.tableBody
    const meta = tableMethode.meta 

    const href = ()=> {
        var w= window.open('mailto:', '_blank')
        setTimeout(() => { w.close() }, 1000);

    };

    
    useEffect(()=> {
        setLoading(true)
        setSortedBy("")
        getTableData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(()=> {
        setLoading(true) 
        getTableData()
    }, [table]) // eslint-disable-line react-hooks/exhaustive-deps


    if (loading === true ) {
        return(
            <div className="cmsContainer">
                <div className="cmsHead">
                    <CMSNav />
                </div>
            </div>
            
        )
    } else {        
        const tableHead = tHead.map(element => {
            return(
            <th key= {element.title}>
                <button className={`waves-effect waves-teal btn-flat`} name= {meta.tableName} id={element.name} onClick= {sortTable} >
                {sortedBy===element.name? "↓ " : ""}
                {sortedBy===`${element.name}-rev`? `↑ `: ""} 
                {element.title}
                </button>
            </th>)
        }) 

        const tableBody = tableData.map(element => {
            return(
                <tr key= {element._id}>
                    <td key={tBody[0].name} >{element[tBody[0].name]}</td>
                    <td key={tBody[1].name}>
                            {element[tBody[1].name]}
                            {table === "stories"?<i onClick={copyToClipboard} class="far fa-copy"></i>: null}
                    </td>
                    <td key={tBody[2].name} >{element[tBody[2].name].split('T')[0]}</td>
                    <td key={tBody[3].name} > 
                        <button className="btn waves-effect mapBtn_d" name= {tBody[3].name} id={element._id} onClick={showModal} >{tBody[3].title}</button>
                    </td>
                    <td key={tBody[4].name} >
                        <button className="btn waves-effect mapBtn_d" name={tBody[4].name} id={element._id} onClick={deletePost}  >{tBody[4].title}</button>
                    </td>
                </tr>
            )
        })

        return(
            <div className="cmsContainer" >
                <div className="cmsHead">
                    <CMSNav />
                    <button 
                        className="btn waves-effect mapBtn_l"  
                        name= {"new"+ meta.name} 
                        onClick={table==="messages"? () => href(): showModal} >
                            New {meta.name}
                        </button>
                </div>
                <div className="cmsContent">
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
            </div>
        )
    }

    
}

export default ShowTable


 