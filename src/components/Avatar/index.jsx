import  './index.css';
import React from 'react';

class Avatar extends React.Component{
    render() {
        return <img className='avatar' src={this.props.src} alt={this.props.alt}/>
    }
}

export default Avatar;