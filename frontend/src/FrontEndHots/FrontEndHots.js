import React from 'react';
import Header from '../Common/Header/Header';

class Common extends React.Component {

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="app-container">
                    hot
                </div>
            </div>
        );
    }
}

export default Common
