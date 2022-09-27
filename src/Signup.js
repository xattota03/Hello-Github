import React from 'react';
class Signup extends React.Component {
 constructor(props) {
        super(props);
        this.state = {
          text:' Sign up'
        }
    }
  render() {
    
    const getName = (e) => {
    this.setState({text:e.target.value})
  }
    return (
      
      <div className='container'>
        <h3>SIGN UP</h3>
        <div className='em'>
          <label htmlFor=''>Email</label>
          <input className='emp' placeholder='email' type='email' onChange={(e)=> getName(e)} />
        </div>
        <div className='em'>
          <label htmlFor=''>Password</label>
          <input className='emp' placeholder='password' type='password' />
        </div>
        <div className='sgn'>
          <button className='btn'>SIGN UP</button>
        </div>

        <hr />

        <div className='icons'>
          <div className="icon1"><i  class='fa-brands fa-google'></i></div>
          <div className="icon2"><i  class='fa-brands fa-facebook-f'></i></div>
         <div className="icon2"> <i  class='fa-brands fa-linkedin-in'></i></div>
        </div>
        <div className='footer'>
          <p className='account'>Already an account</p>
          <a className='ls' href=''>
            LOGIN 
          </a>
        </div>
        <h4>{this.state.text}</h4>
      </div>
    );
  }
}
export default Signup;
