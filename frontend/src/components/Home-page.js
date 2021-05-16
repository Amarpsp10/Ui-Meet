import React,{Component} from 'react'

import NavBar from './NavBar/Nav'
import IntroSection from './home-page-components/Intro-section/Intro'
export default class home extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <IntroSection/>
            </div>
        );
    };
}