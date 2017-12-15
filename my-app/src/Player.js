import React, { Component } from 'react';
import './App.css';

class Player extends Component {    
    render() {
        return (
        <div className="Player">
            <div className="Player-photo">
                <img src={this.props.photo} alt={this.props.name} />
            </div>
            <div className="Player-info">
                <span className="Player-name">{this.props.name} "{this.props.nickname}" {this.props.lastname}</span>
                <table>
                    <tbody>
                        <tr>
                            <td>Age:</td><td>{this.props.age}</td>
                            <td>Team:</td><td>{this.props.teamName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="Player-cost">                
                {this.props.cost}                
            </div>
        </div>
        );
    }
}

export default Player;
