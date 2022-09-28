import React from "react";
import "./css/Counter.css";
export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    disableMin=()=>{
        return (this.props.currValue===0)?(true):(false);
    }
    disableMax=()=>{
        return (this.props.currValue===this.props.maxValue)?(true):(false);
    }
    render(){
        return(
            <div className="counter">
                <button disabled={this.disableMin()} onClick={()=>this.props.decrement(this.props.step)}>-</button>
                <h2>{this.props.currValue}</h2>
                <button disabled={this.disableMax()}onClick={()=>this.props.increment(this.props.step)}>+</button>
            </div>
        )
    }
}