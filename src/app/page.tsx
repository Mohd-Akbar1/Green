import Image from "next/image";
import Nav from "./nav/Nav"
import Main from "./Main/Main"
import Feature from "./feature/Feature"
import Indoor from "./Indoor"

export default function Home() {
  return (
    <div>
      < Nav />
      < Main/>
      <Feature />
      <Indoor />
    </div>
   
  );
}
