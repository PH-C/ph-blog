import React, { Component } from 'react';
import firebase from 'firebase';
import app from "../config";
import "./QuestionDetail.css"
// statefull component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionExampleDoc:"",
      question:{},
      comments: [],
      name: 'Manny',
      currentTitle: '',
      currentDetails: '',
    }
    
    this.db = firebase.firestore(app);
  }

  componentWillMount() {
    var _this = this;
    var questionExampleDoc = this.props.match.params.id; 
    this.setState({
      questionExampleDoc
    })
    this.initQuestion(questionExampleDoc)
    this.initComments(questionExampleDoc)
    
  }

  initQuestion(questionExampleDoc){
    var _this = this;
    this.db.collection("questions").doc(questionExampleDoc).get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        _this.setState({
          question:doc.data()
        })
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

  }

  initComments(questionExampleDoc){
    var items=[];
    var _this = this;
    this.db.collection('questions').doc(questionExampleDoc).collection('comments').orderBy("time", "desc").get().then(function(querySnapshot) {

      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var item = doc.data();
          item['key'] = doc.id;
          items.push(item)
      });
      _this.setState({
        comments:items
      })
    });

  }
  
  handleSubmit(event) {
    event.preventDefault();
    var from = this.refs.from.value.trim();
    var content = this.refs.content.value.trim();
    this.onCommentSubmit({from: from, content: content, time:Date.now()});
    this.refs.from.value = '';
    this.refs.content.value = '';
  }

  onCommentSubmit(data){
    console.log("data", data)
    var _this = this;
    var questionExampleDoc = this.state.questionExampleDoc; 
    this.db.collection('questions').doc(questionExampleDoc).collection('comments').add(data)
    .then(function(docRef) {
      var newComments = [{...data,key:docRef.id},..._this.state.comments]
      _this.setState({
        comments:newComments
      })
      alert("success")
      console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  onDelete(doc){
    var _this = this;
    var questionExampleDoc = this.state.questionExampleDoc; 
    this.db.collection('questions').doc(questionExampleDoc).collection("comments").doc(doc).delete().then(function() {
      alert("successfully deleted!")
      _this.initComments(_this.state.questionExampleDoc)
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      alert("Error")
        console.error("Error removing document: ", error);
    });
  }

  render() {
      console.log("notes",this.state.question, this.state.comments)
      var question = this.state.question;
      var comments = this.state.comments;
      var _this = this;
      return (
      <div className="question">
        <div className="question-detail">
          <h1>{question.title}</h1>
          <p>Sponsored by {question.questioner}</p>
          <p>{question.description}</p>
        </div>
        <div className="comment-box" >
          <div className="input"><input ref='from' type="text" name="from" placeholder="Please enter your name."/></div>
          <div className="input comment-area" >
            <textarea ref='content'  name="content"  placeholder="Please enter your comment."></textarea>
            <button className="submit-btn" onClick={this.handleSubmit.bind(this)}>Comment</button>
            
          </div>
        </div>
        <div className="question-comment">
          {
            comments.length?comments.map(function(item,index){
              return (<div className="comment-item" key={index}>
                <div className="answer">
                  {item.from} Answered 
                  <div className="delete" onClick={function(){_this.onDelete(item.key)}}>×</div>
                </div>
                <div className="content">{item.content}</div>
              </div>)
            }):null
          }
        </div>

      </div>
    );
  }
}
