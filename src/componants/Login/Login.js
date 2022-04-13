import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
   const {signInWithGoogle} = useFirebase()
   return (
      <div>
         <h3>plz log in</h3>
         <div style={{margin:'20px'}}>
         <button onClick={signInWithGoogle}>Sign In useing Google</button>
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