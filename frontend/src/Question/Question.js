import React, { Component } from 'react';
import { Link} from "react-router-dom";
import firebase from 'firebase';
import app from "../config";
import "./Question.css"

// statefull component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionExampleDoc:"Snb5vBgTTXVifFtEnitu",
      question:{},
      items: [],
      name: 'Manny',
      currentTitle: '',
      currentDetails: '',
    }
    
    this.db = firebase.firestore(app);
  
  }

  componentWillMount() {
    var _this = this;
    // var questionExampleDoc = this.state.questionExampleDoc; 
    this.db.collection("questions").get().then(function(querySnapshot) {
      var items = [];
      querySnapshot.forEach(function(doc) {
        var item = doc.data();
        item['key'] = doc.id;
        items.push(item);
      });

      _this.setState({
        items: items
      });
    })
  }
  

  // handleSubmit(event) {
  //   event.preventDefault();
  //   var from = this.refs.from.value.trim();
  //   var content = this.refs.content.value.trim();
  //   this.onCommentSubmit({from: from, content: content});
  //   this.refs.from.value = '';
  //   this.refs.content.value = '';
   
  // }

  // onCommentSubmit(data){
  //   console.log("data", data)
  //   var _this = this;
  //   var questionExampleDoc = this.state.questionExampleDoc; 
  //   this.db.collection('questions').doc(questionExampleDoc).collection('comments').add(data)
  //   .then(function() {
  //     // _this.setState({
  //     //   comments:_this.state.comments.unshift(data)
  //     // })
  //     alert("success")
  //     console.log("Document successfully written!");
  //   })
  //   .catch(function(error) {
  //       console.error("Error writing document: ", error);
  //   });
  // }

  
  render() {
      console.log("notes", this.state.items)
      var _this = this;
      var items = this.state.items;
      var comments = this.state.comments
      return (
      <div className="question-list">
        {
          items.length?items.map(function(item, index){
            return (<div className="item" key={item.key}>
              <div className="question-detail">
                <h1><Link to={"/questionDetail/"+item.key} >{item.title}</Link></h1>
                <p class="sponsor">Sponsored by {item.questioner}</p>
                <p class="description"> {item.description}</p>
              </div>
              {/* <div className="comment-box" >
                <div className="input"><input ref='from' type="text" name="from" placeholder="Please enter your name."/></div>
                <div className="input comment-area" >
                  <textarea ref='content'  name="content"  placeholder="Please enter your comment."></textarea>
                  <button className="submit-btn" onClick={_this.handleSubmit.bind(_this)}>Comment</button>
                  
                </div>
              </div> */}
            </div>)
          }):null
        }
        
        {/* <div className="question-comment">
          {
            comments.length?comments.map(function(item,index){
              return (<div className="comment-item" key={index}>
                <div className="answer">{item.from} Answered </div>
                <div className="content">{item.content}</div>
              </div>)
            }):null
          }
        </div> */}

      </div>
    );
  }
}
