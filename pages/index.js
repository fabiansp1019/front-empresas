import React,{useEffect} from "react";
import Layout from "../components/LayoutPublic";
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
      <Layout>
        <CssBaseline />
      </Layout>
    </>
  );
};

export default Index;
