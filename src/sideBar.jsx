import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class SideBar extends Component {
    render() {
        if(this.props.loading)return <h1>Loading...</h1>;/*
        return <div><ul>{this.props.data.map((item,index)=>{
            return (<li><Link key={item.episode_id} to={"movies/" + item.episode_id}>
            {item.title}</Link></li>)
        })}</ul></div>*/
        return (
            <SideNav
                onSelect={(selected) => {
                    
                }}
            >
                <SideNav.Nav>
                    {this.props.data.map((item, index) => {
                        return (
                            <NavItem eventKey={'movies/' + item.episode_id}>
                                <Link key={item.episode_id} to={'movies/' + item.episode_id}></Link>
                                <NavText>{item.title}</NavText>
                            </NavItem>
                        );
                    })}
                </SideNav.Nav>
            </SideNav>

        )
    }
}

export default SideBar;