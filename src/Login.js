import React from "react";
class Login extends React.Component {

    render() {
    


        return (
          <div className='container'>
            <h3>LOGIN</h3>
            <div className='em'>
             
              <label htmlFor=''>Email</label>
              <input className='emp' type='email' />
            </div>
            <div className='em'>
              <label htmlFor=''>Password</label>
              <input className='emp' type='password' />
              <p className='rr'>
              
                <input className='chbox' type='checkbox' /> Remember me?
              </p>
            </div>
            <div>
              <button className='btn'> LOGIN</button>
            </div>
            <div className='forgot'>Forgot Password?</div>

            <hr />
                
              <div className='icons'>
                <div className='icon1'>
                  <i class='fa-brands fa-google'></i>
                </div>
                <div className='icon2'>
                  <i class='fa-brands fa-facebook-f'></i>
                </div>
                <div className='icon2'>
                  <i class='fa-brands fa-linkedin-in'></i>
                </div>
                </div>
                
            <div className='footer'>
              <p className='account'>Need an account</p>
              <a className='ls' href=''>
                SIGN UP
              </a>
            </div>
          </div>
        );

}


}
export default Login