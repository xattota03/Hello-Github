import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            son: 1
        }
    }
    render() {
        
        const plus = () => {
        this.setState({son: this.state.son + 1})
        }
        
        const minus = () => {
            this.setState({son: this.state.son - 1})
        }
         


        return (
          <div className='plus-minus'>
           <button className="btn" onClick={minus}>-</button>
            <h1 className="son"> { this.state.son } </h1>
             <button className="btn" onClick={plus}>+</button>
          </div>
        );
}

}

export default State