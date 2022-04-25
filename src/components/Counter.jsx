import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
            counter : 0
        }
    }
    decrement = () =>{
        this.setState({...this.state, counter: this.state.counter-1});
    }
    increment = () =>{
        this.setState({...this.state, counter: this.state.counter+1});
    }
    reset= ()=>{
        this.setState({...this.state, counter: 0});
    }

    render(){
        return (
            <div>
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>Append one</button>
                <button onClick={this.decrement}>Minus one</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
export default Counter;