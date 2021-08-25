import React, {useState, createContext, useContext} from "react"
import { useCMSContext } from "./CMSContext"

const TableContext = createContext()

export const TableProvider = props => {

    const [table, setIsLoading, isLoading] = useCMSContext()
    const [tableData, setTableData] = useState([])
    const [tableMethode, setTableMethode] = useState([])
    const [modal, setModal] = useState()

    const [sortedBy, setSortedBy] = useState("")

    const getTableData = () => {
        //setIsLoading(true)
        console.log(isLoading)
        // fetch("http://localhost:9000/cms/" + table)
        //     .then(res => res.json())
        //     .then(res => {
        //         const sortedData = res.sort((a,b) =>{
        //             return new Date(b.createdAt) - new Date(a.createdAt)
        //         })
        //         setTableData(sortedData)
        //     })
        //     .then(console.log(tableData))
        //     .catch(err => {
        //         console.log(err)
        //     })

        // fetch("http://localhost:9000/methode/" + table)
        //     .then(res => res.json())
        //     .then(res => {
        //         setTableMethode(res[0])
        //         })
        //     .then(console.log(tableMethode))
        //     .catch(err => {
        //         console.log(err)
        //     })

        //setIsLoading(false)
        //console.log(isLoading)
    }



    return(
        <TableContext.Provider value={[
            tableData,
            tableMethode,
            modal,
            setModal,
            setTableData,
            getTableData,
            // sortTable
        ]}>
            {props.children}
        </TableContext.Provider>
    )
}


export const useTableContext = () => {
    return useContext(TableContext)
}





// const getTableData = useCallback(
    //     async () => {
    //         console.log(table)
    //         try {
    //             setIsLoading(true);
    //             const res1 = await fetch("http://localhost:9000/cms/" + table);
    //             let data = await res1.json();
    //             data = data.sort((a,b) =>{
    //                     return new Date(b.createdAt) - new Date(a.createdAt)
    //                 })
    //             const res2 = await fetch("http://localhost:9000/methode/" + table);
    //             let methode = await res2.json();
    //             setTableData(data);
    //             setTableMethode(methode);
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     },
    //     [setIsLoading]
    // )





        // const sortTable = (event) => {
    //     event.preventDefault()
    //     const sortBy = event.target.id
        
    //     if (sortedBy === sortBy) {
    //         setSortedBy("")
    //         if(sortBy === "createdAt") {
    //             setTableData(prevState => {
    //                 prevState.sort((a,b) =>{
    //                     return new Date(a.createdAt) - new Date(b.createdAt)
    //                 })
    //             })
               
    //         } else {
    //             setTableData(prevState => {
    //                 prevState.sort((a,b) =>{
    //                     var nameA = a[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
    //                     var nameB = b[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
    //                     if (nameB < nameA) {
    //                         return -1;
    //                     }
    //                     if (nameB > nameA) {
    //                         return 1;
    //                     }
    
    //                     return 0;
    //                     }) 
    //             })
    //         } 
    //     } else {
    //         setSortedBy(sortBy)
    //         if(sortBy === "createdAt") {
    //             setTableData(prevState => {
    //                 prevState.sort((a,b) =>{
    //                     return new Date(b.createdAt) - new Date(a.createdAt)
    //                 })
    //             })
              
    //         } else {
    //             setTableData(prevState => {
    //                 prevState.sort((a,b) =>{
    //                 var nameA = a[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
    //                 var nameB = b[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
    //                 if (nameA < nameB) {
    //                     return -1;
    //                 }
    //                 if (nameA > nameB) {
    //                     return 1;
    //                 }

    //                 return 0;
    //                 }) 
    //             })
    //         }   
    //     }

    // }