import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">Phone Directory</div>
                <div>
                    <span>Name</span><br />
                    <span>Phone</span>
                </div>
                <button>Add</button>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" placeholder="Type Here" defaultValue="shilpa"/>
            </div>
        );
    }

}

export default App;