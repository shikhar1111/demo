import React from 'react';
import Layout from './components/Layout/Layout';
import Burger from './containers/Burger-Builder/Burger-builder';
import Newpost from './components/Newpost/Newpost';
import axios from "axios";

class App extends React.Component {
  state = {
    posts: [],
    selectedPostId: null
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
        // console.log(response);
    })
}

postSelectedHandler=(id)=>{
  this.setState({selectedPostId:id})

}
  render(){
    const posts = this.state.posts.map(post=>{
      return <Burger 
       key={post.id}
       title={post.title} 
       author={post.author}
       clicked={()=>this.postSelectedHandler(post.id)}/>;
  })
    return(
      <div>
        {/* <Layout></Layout> */}
        {posts}
        <Layout id={this.state.selectedPostId}/>
        <Newpost />
          {/* <p>hello</p> */}
      </div>
    );
  }
}

export default App;