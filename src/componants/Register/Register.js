import React from 'react';

const Register = () => {
   return (
      <div>
         <h3>Register now</h3>
         <form>
            <input type="text" placeholder='Your Name' />
            <br></br>
            <input type="email" name=""placeholder='Your Email' id="" />
            <br>
            </br>
            <input type="password" name="" placeholder='password' id="" />
            <br></br>
            <input type="submit" value="register" />
         </form>
      </div>
   );
};

export default Register;