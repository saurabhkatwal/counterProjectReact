import React from "react";
import "./css/Range.css"
export default class Range extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div className="range">{this.props.children}</div>
        )
    }
}