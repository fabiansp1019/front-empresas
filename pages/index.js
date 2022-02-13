import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import BlogPosts from "../components/BlogPosts";

const Index = () => {
  return (
    <>
      <Layout>
        Hola esta es el index. 
        
        <Link href={"/login"}>
          <a> Login</a>
        </Link>
      </Layout>
    </>
  );
};

export default Index;
