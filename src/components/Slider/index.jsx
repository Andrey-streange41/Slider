import React from "react";
import "./style.css"

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.ImgBuffer = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vOcNsjWHaYDSPiPch_xynvvMwERfd2UBQfCYz7zQyhriBeiGqLuf5_BHIMunTXZAahA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbzspdwU8ehRJvpvJRjmg4Hab1DWF1uY1AxsJUP_V3nuaQHdoT6NDRmDXKuIVAqCaUsA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Qtf6YDJiSfBq0pIhYOyk4eoLEK_K3mwIpxE63EUqWjHjwRdSlgWxMh4YiOuOBZ4BEU8&usqp=CAU',
            'https://c8.alamy.com/comp/PJ140K/new-york-city-usa-june-22-2018-google-sign-with-rainbow-colors-outside-the-google-office-in-new-york-city-during-pride-parade-google-is-a-multin-PJ140K.jpg'
        ];
        
        this.state=
        {
            currentImg: 0,
            timerId: null
        }
    }
    start = () =>{
        if(this.state.timerId === null){
            this.setState({...this.state, timerId :setInterval(this.nextPicture,2000) });
        }
    }

    componentDidMount(){
        if(this.state.timerId === null){
            this.setState({...this.state, timerId :setInterval(this.nextPicture,2000) });
        }
    }
    componentWillUnmount(){
        clearInterval(this.state.timerId);
        this.setState({...this.state, timerId :null });
    }

    pause = () =>{
        clearInterval(this.state.timerId);
        this.setState({...this.state, timerId :null });
    }
   
    nextPicture = () =>{ 
        if(this.state.currentImg >= this.ImgBuffer.length - 1 ){
            this.setState({...this.state, currentImg:0})
            
            return;
        }
        this.setState({...this.state, currentImg:this.state.currentImg + 1})
    }
    
    prevPicture = () =>{ 
        if(this.state.currentImg <= 0){
            this.setState({...this.state, currentImg: 3})
            return;
        }
        this.setState({...this.state, currentImg:this.state.currentImg - 1})
    }

render(){

    return(
        <section className="SliderApp">
            <img className="targetImg" src={this.ImgBuffer[this.state.currentImg]}/>
            <button onClick={this.nextPicture}>Next</button>
            <button onClick={this.prevPicture}>Prev</button>
            <button onClick={this.pause}>Pause</button>
            <button onClick={this.start}>Start</button>
        </section>
    
    )

}

}

export default Slider;