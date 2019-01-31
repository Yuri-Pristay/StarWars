import React, { Component } from 'react';

const Form = (props)=>{
      return(
        <div>
          <input type="text" onChange={props.changeName} value={props.name}/>
          <button onClick={props.addUser}>Add User</button>
        </div>
      );
}

export default Form;