import React from 'react';
import {Link} from 'react-router-dom';
import './Header.less';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            activeKey: 1
        }
    }

    componentWillMount() {
        let {pathname} = this.props.location;
        this.checkPathName(pathname)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        let {pathname} = nextProps.location;
        this.checkPathName(pathname)
    }


    checkPathName = (pathname) => {
        if (pathname.indexOf("/home") > -1) {
            this.setState({
                activeKey: 1
            })
        } else if (pathname.indexOf("/hot") > -1) {
            this.setState({
                activeKey: 2
            })
        } else if (pathname.indexOf("/project") > -1) {
            this.setState({
                activeKey: 3
            })
        } else if (pathname.indexOf("/about") > -1) {
            this.setState({
                activeKey: 4
            })
        }
    };

    render() {
        let {activeKey} = this.state;
        return (
            <div className="app-header">
                <ul className="list">
                    <li className="item"><Link
                        className={activeKey === 1 ? "link-active" : ""}
                        to={{pathname: '/home'}}>Home</Link></li>
                    <li className="item"><Link
                        className={activeKey === 2 ? "link-active" : ""}
                        to={{pathname: '/hot'}}>前端头条</Link></li>
                    <li className="item"><Link
                        className={activeKey === 3 ? "link-active" : ""}
                        to={{pathname: '/project'}}>我的项目</Link></li>
                    <li className="item"><Link
                        className={activeKey === 4 ? "link-active" : ""}
                        to={{pathname: '/about'}}>关于</Link></li>
                </ul>
                <div className="header-personal">
                  <p className="my-name">Chen PengHui</p>
                  <p className="my-major">WEB前端爱好者</p>
                  <p>
                    <a className="link-button">Get My Skill</a>
                  </p>
                </div>
            </div>
        );
    }
}

export default Header
