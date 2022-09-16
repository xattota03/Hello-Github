import React from 'react';
class Signup extends React.Component {

  render() {
    return (
      <div className='container'>
        <h3>SIGN UP</h3>
        <div className='em'>
          <label htmlFor=''>Email</label>
          <input className='emp' type='email' />
        </div>
        <div className='em'>
          <label htmlFor=''>Password</label>
          <input className='emp' type='password' />
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
      </div>
    );
  }
}
export default Signup;
