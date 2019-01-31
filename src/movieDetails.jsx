import React, { Component } from 'react';
import axios from 'axios';
import SideBar from './sideBar.jsx';

class movieDetails extends Component {
    state = {
        data:null,
        loading:true
    }
    componentDidMount(){
          let url = "https://swapi.co/api/films";
          axios.get(url).then((response)=>{
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
        const {data,loading} = this.state;
        if(loading)return <h1>Loading...</h1>;
        let id = Number(this.props.match.params.id);
        let optimization = (data.filter((item)=>{return item.episode_id==id}))[0];
        return (<div>
            <SideBar loading={loading} data={data}></SideBar>
            <ul>
                <li>title: {optimization.title}</li>
                <li>Opening crawl: {optimization.opening_crawl}</li>
                <li>Director: {optimization.director}</li>
                <li>Producers: {optimization.producer}</li>
                <li>Release date: {optimization.release_date}</li>
            </ul>
        </div>)
    }
}

export default movieDetails;