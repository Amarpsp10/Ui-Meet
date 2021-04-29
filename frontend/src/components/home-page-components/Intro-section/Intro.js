import React,{Component} from 'react'
import './Intro.css'
export default class intro extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={'intro-page'}>
               <h1 className={'intro-text'}>Hi, this is the Intro Section added by Akhil Gupta <br></br></h1>
            </div>
        );
    };
}