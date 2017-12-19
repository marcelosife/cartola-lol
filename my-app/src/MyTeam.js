import React from 'react';
import './App.css';
import MyPlayer from './MyPlayer';

const MyTeam = (props) => {  
    return (   
        <div className="MyTeam">
            <div className="MyTeam-title">
                {props.team.name}
            </div>
            <div className="MyTeam-info">
                <MyPlayer {...props.team.myPlayers[0]}  click={props.click}/>
                <MyPlayer line='junggle' click={props.click} />
                <MyPlayer line='Mid' click={props.click} />
                <MyPlayer line='Adcarry' click={props.click} />
                <MyPlayer line='Suport'click={props.click} />
            </div>
        </div>
    );    
}

export default MyTeam;
