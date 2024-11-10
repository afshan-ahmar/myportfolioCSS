import '../style/Services.css'; 
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdNoPhotography } from "react-icons/md";
import { GiGameConsole } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
 


export default function Services(){
     return(
          <main className='main'>
               <div className='ser-container'>
{/*top div*/}
<div className='top-div-services'>
     <h2 className='title-ser'>My Services </h2>
     <p className='des-ser'>As an experienced web developer, I am passionate about creating robust and user-friendly web applications.
          Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React ,Typescript and Next.js.
     </p>
</div>
{/*bottom div*/}
<div className='boxes-con'>
<div className='box'>
<FaLaptopCode className='ser-icons'/>
<h3>Web Development</h3>
<span>Blog,E-Commerce</span>
</div>
<div className='box'>
<GiSoundOn className='ser-icons'/>
<h3>Sound E-Commerce</h3>
<span>Blog,Ecommerce</span>
</div>
<div className='box'>
<RiAdvertisementFill  className='ser-icons'/>
<h3>Advertising</h3>
<span>blog,adavertizing</span>
</div>
<div className='box'>
<MdNoPhotography className='ser-icons'/>
<h3>photography</h3>
<span>blog,photography</span>
</div>
<div className='box'>
<GiGameConsole className="ser-icons"/>
<h3>Gamer Web Developer</h3>
<span>blog,Game</span>
</div>
<div className='box'>
<GiLaptop className='ser-icons' />
<h3>Lapt</h3>
<span>blog,Entertainment</span>
</div>
</div>
               </div>
          </main>
     )
}