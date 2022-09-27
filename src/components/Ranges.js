import React from "react"
import Range from "./Range"
import "./css/Ranges.css"
export default class Ranges extends React.Component{
    constructor(props){
    super();
    }
    render(){
        return (
<div className="rangeBoxes">
{this.props.ranges.map(range=>(
    <Range key={"id"+Math.random().toString(16).slice(2)}>{range}</Range>
))}
</div>
        )
    }
}