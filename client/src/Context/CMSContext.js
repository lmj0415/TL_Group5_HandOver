import React, {createContext, useContext, useState, useEffect} from "react"

const CMSContext = createContext()

export const CMSContextProvider = props => {

    const [table, setTable] = useState("stories")
    const [modal, setModal] =useState(false)
    const [postId, setPostId] = useState(null)
    const [loading, setLoading] = useState(true)

    const showTable = (event) => {
        const table = event.target.id
        setTable(table)
        setModal(false)
        setPostId(null)
    }

    const showModal = (event) => {
        const id = event.target.id
        if ( id !== "") {
            setPostId(id)
        }     
        setModal(true)  
    }



    
    return(
        <CMSContext.Provider value={{
            table,
            setTable,
            modal,
            setModal,
            postId,
            setPostId,
            loading,
            setLoading,
            showTable,
            showModal,
        }}>
            {props.children}
        </CMSContext.Provider>
    )

}

export const useCMSContext = () => {
    return useContext(CMSContext)
}