import React from 'react';
import { Component } from "react"
import './Header.css'

const headerStyle = {  };

const Header = function (props) {
    return (
        <div className="header">{props.heading}</div>
    )
}

// class Header extends Component {
//     render() {
//         return(
//         <div className="header">Phone Directory</div>
//         )
//     }
// }

// class App extends Component {
//     render() {
//         return(
//         <div className="App">
//             <p>Upgrad - Building Career of tommorow!</p>
//             <App/>
//             </div>
//         )
//     }
// }

export default Header;