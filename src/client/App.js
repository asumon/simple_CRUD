import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    constructor(props){
    super(props);
    this.state={
          mentors:[],
          isLoaded:false,
       
    }

  }
  componentDidMount() {
//fetch('http://localhost:9000/api/allmentors')
  fetch('https://schedule-project4hyf.herokuapp.com/api/allmentors')
      .then(res => res.json())
      .then(mentor =>{
        this.setState({
        isLoaded : true,
        mentors:mentor })
         });
  }

  render() {
    const { isLoaded,mentors } = this.state;
    if(!isLoaded){
      return<div>Loading....</div>
    }
    else {
     

    return (
      <div>
       <ul>
         {mentors.map(mentorList=>(
           <li key={mentorList.id}>
           {mentorList.first_name},{mentorList.last_name} <span> <a href={mentorList.Slack_nickname}>Link to GitHub</a></span> {mentorList.Type}{mentorList.Status}
           </li>
         ))};
        
         </ul>
      </div>
    );
  }
  }
}
