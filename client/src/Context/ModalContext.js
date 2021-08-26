import React, {createContext, useContext, useState, useEffect} from "react"

import { useCMSContext } from "./CMSContext"
import { useTableContext } from "./TableContext"

const ModalContext = createContext()

export const ModalContextProvider = props => {

    const {table, setLoading, postId } = useCMSContext()
    const {tableMethode, getTableData} = useTableContext()

    const modal = tableMethode.modal

    const [modalData, setModalData] = useState({
        [modal[0].name]: "",
        [modal[1].name]: "",
        [modal[2].name]: "",
        [modal[3].name]: "",
    })
    const [error, setError] = useState("")

     useEffect(() => {
        if (postId !== null) {
            getModalData()
        } 
    }, [postId]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setError(null)
    }, [])


    const getModalData = async () => {
        try {
            setLoading(true)
            const dres = await fetch("http://localhost:9000/cms/" + table +"/"+ postId)
            let data = await dres.json()
            setModalData(data[0])
            return 
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
            return
        }     
    }

    const submitModalData = async (event) => {
        try {
            event.preventDefault()
            setError("")

            //prepare data for send
            const data = modalData
            if(table === "stories"){
                data._title = data.title.trim()
                data._title = data._title.replace(/ /g,"_")
                data._title = data._title.toLowerCase()
            }

            let res 
            if ( postId !== null) {
                res = await fetch('http://localhost:9000/cms/' + table + "/" + postId, {
                    method: 'PATCH', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
            } else {
                res = await fetch('http://localhost:9000/cms/' + table , {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
            }
            const rdata = await res.json()
            console.log("Sucess: ", rdata)
            setError("Sucessfully saved!")
             
        } catch (error) {
            console.error('Error:', error);
            setError("Something went wrong, please try again!")
        } finally {
            getTableData()
        }
    }


    const handleChange = (event) => {
        if(table==="messages") {
            return
        }
        const name = event.target.name
        const value = event.target.value
        setModalData(prevMessage => {
            let newObj = Object.assign({}, prevMessage)
            newObj[name] = value
            return(newObj)
        }
            
        );
    }
    

    const provideMailData = () => {
        const {author, email, betreff, message,} = modalData
        const body = encodeURIComponent(`\n\n\nYou send following Message \n  Name: ${author} \n  Betreff: ${betreff} \n  Message: ${message}`)
        console.log(body)
        var w= window.open( `mailto:${email}?body=${body}`, '_blank')
        setTimeout(() => { w.close() }, 1000);
    }

    return(
        <ModalContext.Provider value={{
            modalData,
            error,
            setModalData,
            handleChange,
            submitModalData,
            provideMailData,
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export const useModalContext =() => {
    return useContext(ModalContext)
}