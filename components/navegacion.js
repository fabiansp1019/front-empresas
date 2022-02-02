import Link from "next/link";
const Navegacion = () => {
   return <h1>
       <li>
           <Link href={"/"}><a>inicio</a></Link>
           <Link href={"/public/about"}><a>about</a></Link>
           <Link href={"/public/login"}><a>login</a></Link>
       </li>
   </h1>
}

export default Navegacion