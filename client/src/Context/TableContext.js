import React, {useState, createContext, useContext} from "react"

import { useCMSContext } from "../Context/CMSContext"

const TableContext = createContext()

export const TableContextProvider = props => {

    const {table, setLoading} = useCMSContext()

    const [tableData, setTableData] = useState([])
    const [tableMethode, setTableMethode] = useState({})
    const [sortedBy, setSortedBy] = useState()
    
    const getTableData = async () => {
        try {
            const dres = await fetch("http://localhost:9000/cms/" + table)
            let data = await dres.json()
            setTableData(data)

            const mres = await fetch("http://localhost:9000/methode/" + table)
            const methode = await mres.json()
            setTableMethode(methode[0])
            return 
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            return
        }     
    }

    const deletePost = async (event) => {
        try {
            event.preventDefault()
            const id = event.target.id
            const res = await fetch('http://localhost:9000/cms/'+table + "/" + id, {
                method: 'DELETE',
                })
            const data = await res.json()
            console.log("Success:", data)
        } catch (err) {
            console.log("Error:", err)
        } finally {
            getTableData()
        }
    }
    

    const sortTable = (event) => {
        event.preventDefault()
        const sortBy = event.target.id
        if (sortedBy === sortBy) {
                const sorted = tableData.reverse()
                setTableData(sorted)
                setSortedBy( sortBy + "-rev")
                return
        } else {
            setSortedBy(sortBy)
            if(sortBy === "createdAt") {
                const sorted = tableData.sort((a,b) => {
                    return new Date(a.createdAt) - new Date(b.createdAt)
                })
                setTableData(sorted)
                return
              
            } else {
            
                const sorted = tableData.sort((a,b) =>{
                    var nameA = a[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
                    var nameB = b[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                    }) 
                setTableData(sorted)    
            }   
        }

    }

    

    return(
        <TableContext.Provider value={{
            tableData,
            tableMethode,
            sortedBy,
            setSortedBy,
            getTableData,
            deletePost,
            sortTable,
        }}>
            {props.children}
        </TableContext.Provider>
    )
}


export const useTableContext = () => {
    return useContext(TableContext)
}




