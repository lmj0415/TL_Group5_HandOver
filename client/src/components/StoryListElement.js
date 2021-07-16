import React, {Component} from "react"

class StoryListElement extends Component {

    render() {

        return(
            <tr key={this.props.id}>
                <td key={this.props.id + "-title"}>{this.props.title}</td>
                <td key={this.props.id + "-name"}>{this.props.name}</td>
                <td key={this.props.id + "-date"}>{new Date(this.props.date).toISOString().split('T')[0]}</td>
                <td key={this.props.id + "-edit"}>
                    <button className="btn waves-effect waves-light" name={this.props.id} onClick={this.props.editStory} >Edit</button>
                </td>
                <td key={this.props.id + "-delete"}>
                    <button className="btn waves-effect waves-light" name={this.props.id} onClick={this.props.deleteToDB} >Delete</button>
                </td>
            </tr>
        )
    }
}

export default StoryListElement