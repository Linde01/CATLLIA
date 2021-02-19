import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../feature/brand/Brand';
import Search from '../feature/search/Search';
import Map from '../feature/Map/Map';
import SearchResult from '../feature/search-result/SearchResult';

import './main.scss';

 const { Content } = Layout;

class Main extends Component{
    state = {
        currentPosition: null,
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(({ coords }) => {
          const currentPosition = {
            lat: coords.latitude,
            lng: coords.longitude,
          };
          this.setState({ currentPosition });
        });
      }

    render() {
        return (
         <div className= 'main-layout' >
            <Content className = 'content'>
                <Brand/>
                <Search/>
                <div className='search-content'>
                    <Map currentPosition={this.state.currentPosition}/>
                    <SearchResult/>
                    </div>
            </Content>
            </div>
        );
    }
}

export default Main;