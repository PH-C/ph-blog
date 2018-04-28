import React from 'react';
import Header from '../Common/Header/Header';
import './Home.less'
class Home extends React.Component {

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="home-container">
                    <div className="my-life-motto">
                        <span>一份耕耘，一份收获!</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
