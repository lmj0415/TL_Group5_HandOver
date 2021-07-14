import React, {Component} from "react"

class Stories extends Component {
    constructor(props) {
        super()
        this.state = {
            stories: [],
            api: ""
        }
    }

    callAPI() {
        fetch("http://localhost:9000/stories")
            .then(res => res.json())
            .then(res => this.setState({stories: res}))
            .catch(err => {
                console.log(err)
            })
        
    }
    
    componentDidMount() {
    this.callAPI()
    }
    
    render() {

        return(
            <div>
                {/* <p>{this.state.stories}</p> */}
                <ul>
                {this.state.stories.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
                </ul>
            </div>
        )
    }
}

export default Stories