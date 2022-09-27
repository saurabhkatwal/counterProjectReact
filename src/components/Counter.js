import React from "react";
import "./css/Counter.css";
export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="counter">
                <button onClick={()=>this.props.decrement(this.props.step)}>-</button>
                <h2>{this.props.initialValue}</h2>
                <button onClick={()=>this.props.increment(this.props.step)}>+</button>
            </div>
        )
    }
}