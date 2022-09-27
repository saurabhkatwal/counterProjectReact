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
    <Range>{range}</Range>
))}
</div>
        )
    }
}