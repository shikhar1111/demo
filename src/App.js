import React from 'react';
import Layout from './components/Layout/Layout';
import Burger from './containers/Burger-Builder/Burger-builder';
import axios from "axios";

class App extends React.Component {
  state = {
    posts: []
}
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
      const posts = response.data.slice(0,4);
      const updatedPosts = posts.map(post =>{
        return{
          ...post,
          author:'Shikhar'
        }
      })
    this.setState({posts:updatedPosts});
        console.log(response);
    })
}
  render(){
    const posts = this.state.posts.map(post=>{
      return <Burger title={post.title} author={post.author}/>;
  })
    return(
      <div>
        {/* <Layout></Layout> */}
        {posts}

          {/* <p>hello</p> */}
      </div>
    );
  }
}

export default App;