import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import BlogPosts from "../components/BlogPosts";


const Index = () => {
  return (

      <>
        <Link href={"/login"}>
          <a>Login</a>
        </Link>
        {/* <BlogPosts /> */}

        <Layout></Layout>
      </>

  );
};

export default Index;
