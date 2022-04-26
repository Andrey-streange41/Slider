import React from 'react';
import Header from './components/Header'
import Counter from './components/Counter';
import Slider from './components/Slider';
import MiniGame from './components/MiniGame';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state=
    {
      logo :"LOGO",
      name: 'Oleg', 
      imgSrc:'https://static.toiimg.com/thumb/resizemode-4,msid-83541279,imgsize-86286,width-720/83541279.jpg'
    }
  
    
  }


  render (){
  return(
    <div>
        <Header textContent={this.state.logo} user={this.state.name} imgSrc={this.state.imgSrc}/>
      <main>
          <MiniGame/>
      </main>
    </div>
  )
  }
}


export default App;