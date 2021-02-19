import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../feature/brand/Brand';
import Search from '../feature/search/Search';
import Map from '../feature/Map/Map';
import SearchResult from '../feature/search-result/SearchResult';

const { Content } = Layout;
class Main extends Component{
    render() {
        return  <div>
            <Content>
                <Brand/>
                <Search/>
                <div className='search-content'>
                    </div>
                    <Map/>
                    <SearchResult/>
            </Content>
            </div>;
    }
}

export default Main;