import React,{useEffect} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  useEffect(()=>{
    router.push('/init') 
    // router.push('/')
  },[])
  return (
    <>
      <div>
        <CssBaseline />
      </div>
    </>
  );
};

export default Index;
