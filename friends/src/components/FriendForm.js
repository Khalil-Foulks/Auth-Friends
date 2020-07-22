import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendForm extends React.Component {

    constructor(){
        super();
        this.state = {
            friend:{
                id: Date.now(),
                name:'',
                email:'',
                age:'',
            }
        }
    }
    
    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("api/friends", this.state.friend)
            .then(res => {
                console.log("posted new friend")
                this.setState(
                   res.data
                )
            })
            .catch(err => console.log(err));
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }


    render() {
        return (
            <div >
                <form onSubmit={this.addFriend}>
                    <input 
                        type = "text"
                        name = "name"
                        placeholder = "name here"
                        value = {this.state.friend.name}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type = "email"
                        name = "email"
                        placeholder = "email here"
                        value = {this.state.friend.email}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type = "text"
                        name = "age"
                        placeholder = "age here"
                        value = {this.state.friend.age}
                        onChange={this.handleChange}
                    /> 
                    <button>Add a Friend</button>
                </form> 
            </div>
        )
    }
}

export default FriendForm;