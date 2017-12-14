import React, { Component } from 'react';
import './App.css';

class Player extends Component {    
    render() {
        return (
        <div className="Player">
            <div className="Player-photo">
                <img src={this.props.photo}  alt="Photo" />
            </div>
            <div className="Player-info">
                <h1 className="Player-name">#{this.props.name}</h1>
                <p >
                {this.props.age}
                </p>
            </div>
            <div className="Player-cost">                
                <p >
                {this.props.cost}
                </p>
            </div>
        </div>
        );
    }
}

export default Player;
