import React, { Component } from 'react';

const Users = (props) => {
    return(
      <div>
      {
         props.users.map((item,index)=>{
           return <div key={index}>{item}</div>
         })
      }
      </div>
    );
}

export default Users;