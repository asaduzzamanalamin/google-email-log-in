import { useState } from "react"

const useFirebase = () =>{
   const [user , setUser] = useState({});
   const signInWithGoogle = () =>{
      console.log('signing in soon');
   }

   return [user , setUser];
}
export default useFirebase;