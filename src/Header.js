import React from 'react';
import { Component } from "react"

const headerStyle = { textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase' };

const Header = function () {
    return (
        <div style={headerStyle}>Phone Directory</div>
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