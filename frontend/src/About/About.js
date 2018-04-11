import React from 'react';
import Header from '../Common/Header/Header';

class About extends React.Component {

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="app-container">
                    about
                </div>
            </div>
        );
    }
}

export default About
