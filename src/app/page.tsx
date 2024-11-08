
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/Services";

import Footer from "./components/Footer";



import Link from "next/link";
export default function Home() {
  return (
    <div>
     <Header/> 
     <Hero/>
     <About/>
     <Contact/>

     <Services/>
     <Footer/>


    </div>
  )
}