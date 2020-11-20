import React, {Component} from 'react';
import {listPosts} from '../graphql/queries'
import {API, graphqlOperation} from 'aws-amplify'

class CreatePost extends Component{

    constructor(props){
        super(props);

        this.state={
            id: "",// "",// ID!
            name: "",// "",// String!
            postOwnerId: "",// "",// String!
            postOwnerUserName: "",// "",// String!
            postTitle: "",// "",// String!
            postBody: "",// "",// String!
            createdAt: "",// "",// String!
        }    
    }

    componentDidMount = async () => {
         this.getposts();
    }

    getposts= async () => {
        const result = await API.graphql(graphqlOperation(listPosts));
        const result2 = await API.graphql(graphqlOperation(onCre));
        // alert(JSON.stringify(result?.data?.listPosts?.items));
        this.setState( {
            posts : "",// result?.data?.listPosts?.items
        });
    }

    render(){
        const {posts} = this.state;
        return (

            <form className="createpost">
                <input type="text" style={{font: " 19px"}} name="postTitle"></input>
                <input type="text" style={{font: " 19px"}} name="postBody"></input>
                <input type="text" style={{font: " 19px"}} name="name"></input>
                <input type="text" style={{font: " 19px"}} name="postOwnerUserName"></input>
                <input type="text" style={{font: " 19px"}} name="postOwnerId"></input>
                <textarea></textarea>
            </form>
        )
        
    }
};

export default CreatePost;
