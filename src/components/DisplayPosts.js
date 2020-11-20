import React, {Component} from 'react';
import {listPosts} from '../graphql/queries'
import {API, graphqlOperation} from 'aws-amplify'

class DisplayPosts extends Component{

    constructor(props){
        super(props);
        this.state={
            posts:[]
        }    
    }

    componentDidMount = async () => {
         this.getposts();
    }

    getposts= async () => {
        const result = await API.graphql(graphqlOperation(listPosts));
        // alert(JSON.stringify(result?.data?.listPosts?.items));
        this.setState( {
            posts : result?.data?.listPosts?.items
        });
    }

    render(){
        const {posts} = this.state;
        return ( posts.map( post => {
            return (<div class="posts">
                   <h1> {post.postTitle}</h1>
                        <span>wrote by {post.postOwnerUserName}</span>
                        <time>{" "}
                        {new Date(post.createdAt).toDateString()}
                        </time>

                        <p>{post.postBody}</p>
                    </div>)
        })
        )
    }
};

export default DisplayPosts;
