import React,{Component} from 'react'
import './Nav.css'

// import uimeetLogo from '../../../assests/ui-meet_logo.png'
// import TempLogo from './../../../assests/temp-logo.png'
// import {BsPersonFill,BsEnvelopeFill,BsFillAwardFill,BsBriefcaseFill,BsFillPieChartFill} from 'react-icons/bs'

export default class NavBar extends Component{

    
    render(){
        return(
            <div className={'navbar-container'} >
                <div className={'nav-bar-outer'}>
                   <div className={'nav-bar-logo'}>
                    
                     <text className={'nav-logo'}>UI-MEET</text>          
                   </div>

                   <div className={'nav-bar-buttons'}>
                       <text className={'nav-bar-button'}>Login</text>
                       <text className={'nav-bar-button'}>Register</text>
                   </div>
                </div> 
        </div>
        );
    }
}