import React from "react"

function callAPI() {
    fetch("http://localhost:9000/stories")
        .then(res => res.json())
        .then(res => {
            const sortedData = res.sort((a,b) =>{
                return new Date(b.createdAt) - new Date(a.createdAt)
            })
            console.log(sortedData)
            this.setState(prevState => {
                let tData = Object.assign({}, prevState.tData)
                tData.body = sortedData
                return { tData }
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    
}


export default callAPI