import React from "react";

class MiniGame extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.eventBuffer = [
            "Stone",
            "Sun",
            "Water",
            "Trees",
            "Grees"
        ];
        
        this.state=
        {
            prevItem: null,
            currentItem: Math.floor(Math.random() * (4 - 0) + 0)
        }
    }

    makeStep = ()=>{
        this.setState({...this.state,
        prevItem:this.state.currentItem,
        currentItem: Math.floor(Math.random() * (4 - 0) + 0)
    })
    }

    // 
    render(){

        return(<section>
                <div> На прошлом шаге вы видели {this.eventBuffer[this.state.prevItem]}</div>
                <div> Перед собой вы видете {this.eventBuffer[this.state.currentItem]}</div>
                <div>
                    <button onClick={this.makeStep}>Make step</button>
                </div>
            </section>)
        
    }
}

export default MiniGame;
