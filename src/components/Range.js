import React from "react";
import "./css/Range.css"
export default class Range extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="range" onClick={this.props.clickHandler}>{this.props.children} </div>
        )
    }
}