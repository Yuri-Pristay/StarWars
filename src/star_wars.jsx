import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import axios from 'axios';
import SideBar from './sideBar.jsx';

class Star_wars extends Component {
    state = {
        loading:true,
        data:null
    };
    componentDidMount(){
          axios.get("https://swapi.co/api/films").then((response)=>{
            this.setState((prevState)=>{
                return({
                    data:response.data.results,
                    loading:false
                });
            });
          }, (err) => {
              console.log("rejected");
          });
    }
    render(){
        const {loading,data} = this.state;
        return <SideBar loading={loading} data={data}></SideBar>  
    }
}
export default Star_wars;
