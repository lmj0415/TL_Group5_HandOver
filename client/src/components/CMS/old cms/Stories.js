import React, {Component} from "react"

import StoryListElement from '../StoryListElement'
import StoryForm from '../StoryForm'


class Stories extends Component {
    constructor(props) {
        super()
        this.state = {
            stories: [],
            pData: {
                name:"",
                title: "",
                id: ""
            }
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.deleteToDB = this.deleteToDB.bind(this)
        this.editStory = this.editStory.bind(this)
        this.clearId = this.clearId.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }


    //handles Change in Text Fields
    handleChange(event) {
        const {name, value} = event.target;
        console.log("working")
        this.setState(prevState => {
            let pData = Object.assign({}, prevState.pData);  
            pData[name] = value;                                     
            return { pData };                                 
          })
    }


    //GETs Array of Stories
    callAPI() {
        fetch("http://localhost:9000/stories")
            .then(res => res.json())
            .then(res => {
                const sortedData = res.sort((a,b) =>{
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                this.setState({stories: sortedData})})
            .catch(err => {
                console.log(err)
            })
        
    }


    //Fetchs data for Editing
    editStory(event) {
        event.preventDefault()

        const id = event.target.name
        fetch("http://localhost:9000/stories/" +id)
            .then(res => res.json())
            .then(res => {
                this.setState(prevState => {
                    console.log(res)
                    let pData = Object.assign({}, prevState.pData)
                    pData.name = res[0].name
                    pData.title = res[0].title
                    pData.id = res[0]._id
                    console.log(pData)
                    return{ pData }})
                })
            .catch(err => {
                console.log(err)
            })
    }

    clearId(event) {
        event.preventDefault()
        this.setState(prevState => {
            let pData = Object.assign({}, prevState.pData)
            pData.id = ""
            return{ pData }
        })
    }


    submitForm(event) {
        event.preventDefault()
        const id = event.target.name
        if(!id) {

            //create Story API
            fetch('http://localhost:9000/stories', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.pData),
                })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                })
            .then(() => {
                this.callAPI()
                this.setState(prevState => {
                    let pData = Object.assign({}, prevState.pData)
                    pData.name = ""
                    pData.title = ""
                    pData.id = ""
                    return{ pData }
                })
            })
            .catch((error) => {
                console.error('Error:', error);
                });
    
            
        } else {

            //Edit Story api
            fetch('http://localhost:9000/stories/' +id, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.pData),
                })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                })
            .then(() => {
                this.callAPI()
                this.setState(prevState => {
                    let pData = Object.assign({}, prevState.pData)
                    pData.name = ""
                    pData.title = ""
                    pData.id = ""
                    return{ pData }
                })
            })
            .catch((error) => {
                console.error('Error:', error);
                });
        }
    }
    

    

    //DELET request to DB
    deleteToDB(event) {
        event.preventDefault()
        const id = event.target.name
        console.log(id)
        fetch('http://localhost:9000/stories/' + id, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                })
            .then(() => {
                this.callAPI()
            })
            .catch((error) => {
                console.error('Error:', error);
                });

    }
    
    componentDidMount() {
    this.callAPI()
    }
    
    render() {

        const StoryTableRows = this.state.stories.map(item => (
            <StoryListElement 
                id= {item._id} 
                name={item.name} 
                title= {item.title} 
                date={item.createdAt}
                deleteToDB={this.deleteToDB}
                editStory={this.editStory} />
        ))

        return(
            <div>
                <StoryForm 
                    handleChange={this.handleChange}
                    submitForm={this.submitForm}
                    clearId= {this.clearId}
                    pData={this.state.pData}/>
                <table style= {{marginLeft:150, width: 1600}}>
                    <thead>
                        <tr>
                            <th>
                                <button class="waves-effect waves-teal btn-flat">Title</button>
                            </th>
                            <th>
                                <button class="waves-effect waves-teal btn-flat">Name</button>
                            </th>
                            <th>
                                <button class="waves-effect waves-teal btn-flat">Date</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {StoryTableRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Stories