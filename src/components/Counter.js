import React from "react";
import "./css/Counter.css";
export default class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="counter">
                <button onClick={this.props.decrement}>-</button>
                <h2>{this.props.initialValue}</h2>
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}