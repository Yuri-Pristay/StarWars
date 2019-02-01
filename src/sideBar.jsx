import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import SideNav, {
	Toggle,
	Nav,
	NavItem,
	NavIcon,
	NavText
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideBar extends Component {
	render() {
		if (this.props.loading)
			return (
				<h1>Loading...</h1>
			); /*
        return <div><ul>{this.props.data.map((item,index)=>{
            return (<li><Link key={item.episode_id} to={"movies/" + item.episode_id}>
            {item.title}</Link></li>)
        })}</ul></div>*/
		return (
			<React.Fragment>
				<SideNav style={{ backgroundColor: '#1a1400'}}>
					<SideNav.Nav style={{ width: '180px'}}>
						{this.props.data.map((item, index) => {
							return (
								<NavItem eventKey={'/movies/' + item.episode_id}>
									<Link style={{ color: '#ff6', paddingLeft: '5px', textDecoration: 'none'  }}
										key={item.episode_id}
										to={'/movies/' + item.episode_id}
									>{item.title}</Link>
									
								</NavItem>
							);
						})}
					</SideNav.Nav>
				</SideNav>
			</React.Fragment>
		);
	}
}

export default SideBar;
