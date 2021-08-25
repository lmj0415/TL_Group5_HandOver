import React from "react"

function UseMethode(props) {
    
    if (props.isLoading) {
        return(
            <div className="cmsHead">
                <h2>Loading...</h2>
            </div>) 
    }else {

        const input = props.fData.map(element => {
            return(
                <input type="text" name={element.name} placeholder={element.name} value={element.data} onChange ={props.handleChange} />
            )
        }) 

        return(
            <div>       

                <div className="cmsHead">
                    <h2>{props.meta.title}</h2>
                </div>
                <form style= {{marginLeft:150, width: 800}}>
                    {input}
                    <button style={{marginRight: 20}} className="btn waves-effect waves-light" onClick={event=> event.preventDefault()}> Submit </button>
                </form>
            </div>
        )
        
    }
}

export default UseMethode