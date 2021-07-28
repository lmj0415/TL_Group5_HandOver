import React, {Component} from "react"

import CMSContainer from "./CMSContainer"

class CMS extends Component {
    constructor() {
        super()
        this.state = {
            storiesData: [],
            storiesMethode: {},
            messagesData: [],
            messagesMethode: {},

            formData: [],
            formMethode: [],
            isLoading: true,
            sortedBy: ""
        }

        this.getStories = this.getStories.bind(this)
        this.getMessages = this.getMessages.bind(this)
        this.deletePost = this.deletePost.bind(this)

        this.sortTable = this.sortTable.bind(this)
        this.handleButton = this.handleButton.bind(this)
    }



    componentDidMount() {
        this.getStories()
        this.getMessages()
            
    }


    //api
    getStories() {
        this.setState({isLoading: true})
        console.log(this.state.isFetched)
        fetch("http://localhost:9000/cms/stories")
            .then(res => res.json())
            .then(res => {
                const sortedData = res.sort((a,b) =>{
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                this.setState({storiesData: sortedData})
            })
            .catch(err => {
                console.log(err)
            })

        fetch("http://localhost:9000/methode/stories")
            .then(res => res.json())
            .then(res => {
                this.setState({storiesMethode: res[0],
                                isLoading: false})
                })
            .catch(err => {
                console.log(err)
            })
    }

    getMessages() {
        this.setState({isLoading: true})
        console.log(this.state.isFetched)
        fetch("http://localhost:9000/cms/messages")
            .then(res => res.json())
            .then(res => {
                const sortedData = res.sort((a,b) =>{
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                this.setState({messagesData: sortedData})
            })
            .catch(err => {
                console.log(err)
            })

        fetch("http://localhost:9000/methode/messages")
            .then(res => res.json())
            .then(res => {
                this.setState({messagesMethode: res[0],
                                isLoading: false})
                })
            .catch(err => {
                console.log(err)
            })
    }

    deletePost(table, id) {
        console.log(id)
        fetch('http://localhost:9000/cms/'+table + "/" + id, {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                })
            .then(() => {
                this.getStories()
                this.getMessages()
            })
            .catch((error) => {
                console.error('Error:', error);
                });
    }

    getOnePost(event) {
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

    submitPost(event) {
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

    //table

    sortTable(event) {
        event.preventDefault()
        const table = event.target.name
        const sortBy = event.target.id
        
        if ( this.state.sortedBy === sortBy) {
            this.setState({sortedBy: ""})
            if(sortBy === "createdAt") {
                this.setState({
                    [table]: 
                    this.state[`${table}`].sort((a,b) =>{
                        return new Date(a.createdAt) - new Date(b.createdAt)
                    })
                })
            } else {
                this.setState({
                    [table]: 
                    this.state[`${table}`].sort((a,b) =>{
                    var nameA = a[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
                    var nameB = b[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
                    if (nameB < nameA) {
                        return -1;
                    }
                    if (nameB > nameA) {
                        return 1;
                    }

                    return 0;
                    }) 
            
                })
            } 
        } else {
            this.setState({sortedBy: sortBy})
            if(sortBy === "createdAt") {
                this.setState({
                    [table]: 
                    this.state[`${table}`].sort((a,b) =>{
                        return new Date(b.createdAt) - new Date(a.createdAt)
                    })
                })
            } else {
                this.setState({
                    [table]: 
                    this.state[`${table}`].sort((a,b) =>{
                    var nameA = a[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
                    var nameB = b[sortBy].toUpperCase(); // Groß-/Kleinschreibung ignorieren
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    return 0;
                    }) 
            
                })
            }   
        }

    }

    handleButton(event) {
        event.preventDefault()
        const name = event.target.name
        const id = event.target.id

        if(name=== "deleteStories") {
            this.deletePost("stories", id)
        }
        if(name === "deleteMessages") {
            this.deletePost("messages", id)
        }
    }


    //methode
    handleChange() {}

    handleSubmit(){}


 

    render() {

        return(
            <CMSContainer 
            sData= {this.state.storiesData}
            sMethode = {this.state.storiesMethode}
            mData= {this.state.messagesData}
            mMethode = {this.state.messagesMethode}
            fData = {this.state.formData}
            fMethode = {this.state.formMethode}

            isLoading= {this.state.isLoading}

            sortTable = {this.sortTable}
            handleButton = {this.handleButton}
            />

                
        )
    }
} 

export default CMS











































// {
//     params: "",
//     tData: {
//         meta: {},
//         methode: [],
//         body: []
//     },
//     stories: {
//         meta: {title: "Storie"},
//         methode: [
//             {name:"Name", tag: "<th>", className:"cmsTh"},
//             {name:"Title", tag: "<th>", className:"cmsTh"},
//             {name:"Date", tag: "<th>", className:"cmsTh"},
//             {name:"Edit", tag: "<button>", onClick: "edit"},
//             {name:"Delete", tag: "<button>", onClick:" props.delete"},

//         ],
//         body: []

//     },

//     messages: {
//         meta: {title: "Message"},
//         methode: [
//             {name:"Name", tag: "<th>", className:"cmsTh"},
//             {name:"Title", tag: "<th>", className:"cmsTh"},
//             {name:"Date", tag: "<th>", className:"cmsTh"},
//             {name:"Message", tag: "<button>", onclick: "answer"},
//             {name:"Delete", tag: "<button>", onclick: "delete"},

//         ],
//         body: []

//     }
// }

// this.fetchTableData = this.fetchTableData.bind(this)
// this.callAPI = callAPI.bind(this)
// }



// fetchTableData(event) {
// event.preventDefault()
// const dataName= event.target.id

// this.setState({
//     tData: this.state[dataName]
//     })

// this.callAPI()
// }