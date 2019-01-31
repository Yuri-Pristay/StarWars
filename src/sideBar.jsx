import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class SideBar extends Component {
    render(){
        if(this.props.loading)return <h1>Loading...</h1>;
        return <div><ul>{this.props.data.map((item,index)=>{
            return (<li><Link key={item.episode_id} to={"movies/" + item.episode_id}>
            {item.title}</Link></li>)
        })}</ul></div>
    }
}

export default SideBar;