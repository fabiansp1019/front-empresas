import React from "react";
import { useAuth } from "../libs/auth";
import LayoutPrivate from "../components/Layoutprivate";
import { useRouter } from 'next/router'


const dashboard = () => {
  const router = useRouter()
  const { isSignedIn } = useAuth();

  React.useEffect(()=>{
    if(isSignedIn == ''){
      router.push('/')
    }
  },[])



  return (
    <>
      {isSignedIn() && (
        <LayoutPrivate>
          Bienvenido
        </LayoutPrivate>
      )}
    </>
  );
};

export default dashboard;
