import React, { Component } from 'react';

class Fruits extends Component {
  render() {
    return (
        <div className='fruit'>
            <img src={this.props.title.img} alt="" />
        <p>
             {this.props.title.name}
            </p>
        
      </div>
    );
  }
}
export default Fruits;
