import React, {useState, createContext, useContext} from "react"

const CMSContext = createContext()

export const CMSProvider = (props) => {

    const [table, setTable] = useState("stories")
    const [modal, setModal] = useState("")
    const [isLoading, setIsLoading] = useState()

    const showTable = (event) => {
        const newTable = event.target.id
        setTable(newTable)
    }

    // const setLoading = () => setIsLoading(true)
    // const unsetLoading = () => setIsLoading(false)
    
    

 
    return(
        <CMSContext.Provider value={[
            table,
            isLoading,
            setTable,
            showTable,
            setIsLoading
        ]}>
            {props.children}
        </CMSContext.Provider>
    )
}


export const useCMSContext = () => {
    return useContext(CMSContext)
}