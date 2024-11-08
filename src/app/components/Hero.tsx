                                                              
import "../style/Hero.css"
import Image from "next/image"
export default function Hero(){
    return(
        <>
<div className="header-container">
    <div className="header-boxes-con">
        {/*left*/}
        <div>
            <Image src={"/afshan.jpg"} alt="Ai" width={200} height={200} className="header-image" />
        </div>
        {/*right*/}
<div className="hero-right-div">
    <h1 className="title-hero">I'am Afshan Ahmar Front-End Developer</h1>
    <p className="des-hero">To secure an employment  opportunity  with a progressive
        organization,where I can utilize my professional skills and 
        knowledge to the maximum add value in the growth of the organization
        Seeking an opportunity as a fresh candidate to start my professional
        career.<br/>
Afshan AHMAR House IT Prog: </p>   
 <button className="hero-btn">HIRE ME</button>
</div>
    </div>
</div>

        </>
    )
} 