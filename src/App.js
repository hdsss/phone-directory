import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {

    deleteHandler(message){
        alert(message);
    }
    render() {
        let subscribers = [
            {
                name: "Shilpa Bhat",
                phone: "99999999999"
            },
            {
                name: "Shristi",
                phone: "99999999999"
            }
        ]

        return (
            <div className="component-container">
                <Header heading="Phone Directory"/>
                <div className="component-body-container">
                    <button className="custom-btn add-btn">Add</button>

                    <div className="grid-container heading-container">
                        <span className="grid-item name-heading">Name</span>
                        <span className="grid-item phone-heading">Phone</span>
                    </div>
                    {
                        subscribers.map(sub => {
                            return <div className="grid-container">
                                <span className="grid-item">{sub.name}</span>
                                <span className="grid-item">{sub.phone}</span>
                                <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, "Delete Handler Clicked")}>Delete</button>
                            </div>
                        }
                        )
                    }
                </div>
            </div>
        );
    }

}

export default App;