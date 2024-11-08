/*Header.tsx*/         
import "../style/Header.css"

import Link from "next/link";
export default function Header(){
    return(
        <div className="header">
            {/*left*/}
              <div>
                <h1 className="logo">PortFolio</h1>
              </div>


            {/*right*/}
            <div className="header-right-div">
                <ul className="header-links">
                    <li>
                   <Link className="nav-links" href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/services"}>Services</Link>
                    </li>
                    <li>
                        <Link className="nav-links" href={"/sign-up"}>Sign-up</Link>
                    </li>

                </ul>
            </div>
            <div className="butnav">
                <Link href="./form"><button className="btn-1">Contact Me</button></Link>

            </div>
            
        </div>
    )
}
