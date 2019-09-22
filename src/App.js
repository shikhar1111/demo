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
    this.setState({posts:response.data});
        console.log(response);
    })
}
  render(){
    const posts = this.state.posts.map(post=>{
      return <Burger title={post.title}/>;
  })
    return(
      <div>
        <Layout></Layout>
        {posts}

          <p>hello</p>
      </div>
    );
  }
}

export default App;