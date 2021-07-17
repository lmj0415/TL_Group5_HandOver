import React, {Component} from 'react'

class StoryForm extends Component{
        

    render() {
        return(
            <form style= {{margin: 50, marginLeft: 600, width: 500}}>
                <label>
                    {this.props.pData.id? <h4>Edit Mode</h4>: <h4>New Post</h4>}
                    <input type="text" name="title" placeholder="Title" value= {this.props.pData.title} onChange={this.props.handleChange} />
                    <input type="text" name="name" placeholder="Name" value= {this.props.pData.name} onChange={this.props.handleChange} />
                </label>
                <button style={{marginRight: 20}} className="btn waves-effect waves-light" name={this.props.pData.id} onClick={this.props.submitForm}> Submit </button>
                <button className="btn waves-effect waves-light" onClick={this.props.clearId}> ClearId </button>
            </form>

        )
        
    }
}

export default StoryForm