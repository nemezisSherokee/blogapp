 
 import React from 'react';
 import './App.css';
import DisplayPosts from './components/DisplayPosts'
import {withAuthenticator} from 'aws-amplify-react'
function App() {
  return (
    <div className="App">
      <DisplayPosts/>
     </div>
  );
}

export default withAuthenticator(App, {includesGreetings:true});
