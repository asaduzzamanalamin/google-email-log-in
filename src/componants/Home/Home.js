import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
   // optional
   const {user} = useFirebase();
   return (
      <div>
         <h2>this is home</h2>
         <p>cirrent user is :{user? user.displayName: 'nobody'}</p>
      </div>
   );
};

export default Home;