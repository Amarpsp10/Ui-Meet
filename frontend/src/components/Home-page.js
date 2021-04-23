import React,{Component} from 'react'

import NavBar from './home-page-components/NavBar/Nav'

export default class home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <h1>hello world and here is my first home page compoent</h1>
            </div>
        );
    };
}