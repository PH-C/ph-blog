import React from 'react';
import Header from '../Common/Header/Header';
import './About.less';
class About extends React.Component {
  componentWillMount=()=>{

  }

  componentDidMount=()=>{

    // let trans-div = document.getElementById('trans-div');


  }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="app-container">
                  <div className="trans-div" id="trans-div"></div>
                </div>
            </div>
        );
    }
}

export default About
