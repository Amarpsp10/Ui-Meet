import React,{Component} from 'react'
import './Intro.css'
export default class intro extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={'intro-page'}>
               <h1 className={'intro-text'}>hi, this is intro section</h1>
            </div>
        );
    };
}