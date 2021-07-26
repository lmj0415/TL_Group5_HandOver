import React from "react"

function UseMethode(props) {
    
 
    return(
        <form style= {{margin: 50, marginLeft: 600, width: 500}}>
            <label>
                {/* {props.pData.id? <h4>Edit Mode</h4>: <h4>New Post</h4>} */}
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="name" placeholder="Name" />
            </label>
            <button style={{marginRight: 20}} className="btn waves-effect waves-light" onClick={event=> event.preventDefault()}> Submit </button>
        </form>
    )
        
    
}

export default UseMethode