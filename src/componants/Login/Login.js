import React from 'react';

const Login = () => {
   return (
      <div>
         <h3>plz log in</h3>
         <div style={{margin:'20px'}}>
         <button>Sign In useing Google</button>
         </div>
         
         <form>
            
            <input type="email" name=""placeholder='Your Email' id="" />
            <br>
            </br>
            <input type="password" name="" placeholder='password' id="" />
            <br></br>
            <input type="submit" value="Log in" />
         </form>
      </div>
   );
};

export default Login;