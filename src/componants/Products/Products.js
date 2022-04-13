import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
   // optional
   const {user} = useFirebase();
   return (
      <div>
         <h2>Knock Knock ! who is there</h2>
         <h5>{user ? user.displayName:'voooooooooooooot'}</h5>
      </div>
   );
};

export default Products;