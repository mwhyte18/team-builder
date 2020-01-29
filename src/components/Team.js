import React from 'react';
import '../App.css';

const Team = props => {
    return ( 
        <div className="team">
            {props.team.map(member => (
                <div className="member" key={member.id}>
                    <h2>Name: {member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Team;
