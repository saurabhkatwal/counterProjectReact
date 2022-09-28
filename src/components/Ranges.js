import React from "react"
import Range from "./Range"
import "./css/Ranges.css"
export default class Ranges extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        return (
<div className="rangeBoxes">
{this.props.ranges.map(range=>(
    <Range onClick={this.props.getValues} key={"id"+Math.random().toString(16).slice(2)} clickHandler={this.props.clickHandler}>{range}</Range>
))}
</div>
        )
    }
}