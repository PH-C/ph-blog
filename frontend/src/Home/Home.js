import React from 'react';
import Header from '../Common/Header/Header';
class Home extends React.Component {

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="app-container">
                    home
                </div>

            </div>
        );
    }
}

export default Home
