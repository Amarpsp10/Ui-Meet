import React,{Component} from 'react'
import './Nav.css'

import {BsPersonFill,BsEnvelopeFill,BsFillAwardFill,BsBriefcaseFill,BsFillPieChartFill} from 'react-icons/bs'

export default class NavBar extends Component{
    
    state = { 
        activeClassName :'',
     }

    handleClick = (prop) => {
        console.log('here is my props :',prop)
        this.setState({activeClassName:prop});
        
    }
    
    render(){
        return(
            <div className={'list'}>       
                                <a 
                                 
                                className={'nav-links'} >
                                  <a href={'#'}>
                                 <BsPersonFill className={this.state.activeClassName==='home' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                  </a>
                                 <h6 className={'nav-text'}>
                                  Home 
                                 </h6>
                                </a>
                                <a
                               className={'nav-links'} >
                                    <a href={'#edu'}>

                                <BsFillAwardFill href={'#'} className={this.state.activeClassName==='education'? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                    </a>
                                <h6 className={'nav-text'}>
                                  Education
                                 </h6> 
                               </a>
                               <a
                               
                              className={'nav-links'} >
                                   <a href={'#projects'}>

                               <BsBriefcaseFill href={'#'} className={this.state.activeClassName==='projects' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                   </a>
                               <h6 className={'nav-text'}>
                                  Projects
                                 </h6>  
                              </a>
                              <a
                              
                             className={'nav-links'} >
                                  <a href={'#services'}>

                              <BsFillPieChartFill href={'#'} className={this.state.activeClassName==='services' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                  </a>
                              <h6 className={'nav-text'}>
                                  Services
                                 </h6>  
                             </a>
                             <a
                             
                            className={'nav-links'} >
                                 <a href={'#mail'}>

                             <BsEnvelopeFill href={'#'} className={this.state.activeClassName==='mail' ? 'active-nav-icon nav-icon' : 'nav-icon'}/>   
                                 </a>
                             <h6 className={'nav-text'}>
                                  Mail
                                 </h6> 
                            </a>
                </div>   
        );
    }
}