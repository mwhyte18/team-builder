import React, { useState } from 'react';
import '../App.css';


const MemberForm = props => {
    const [member, setMember] = useState(
        {
        name: "",
        email: "",
        role: ""
    });
    const handleChanges = event => {
        console.log(member);
        setMember({...member, [event.target.name]: event.target.value})
      };
    
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({...member, [event.target.value]: ""})
    }
    return ( 
        <form onSubmit={submitForm}>
            <div className = "form">
            <div>
            <label htmlFor="name">Name</label>
            <input
                id="title"
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name}
                placeholder="name"
            />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                onChange={handleChanges}
                value={member.email}
                placeholder="email"
            />
            </div>
             <div>
            <label htmlFor="role">Role</label>
            <input
                id="role"
                name="role"
                onChange={handleChanges}
                value={member.role}
                placeholder="role"
            />
            </div>
            </div>
            <div className="button">
            <button type="submit">Add New Member</button>
            </div>
        </form>
     );
}
 
export default MemberForm;