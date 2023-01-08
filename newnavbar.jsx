import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/logo/favicon.png";

const Newnavbar  = ()=>{
    return (
        <>
            <div class="h-48 " style={{backgroundColor: "#34aadf", height:"130px"}}>
               <nav class=" px-3 " >
                    <div class="d-flex align-items-center pb-10 justify-content-between pt-2">
                    
                    <Link to="/">
                        <div>
                            <a className="navbar-brand" href="/">
                                <img src={Logo} alt="logo" />
                            </a>
                        </div>
                    </Link>
                    <div class="d-flex align-items-center" >

                        <a href="https://www.producthunt.com/posts/ai-interview-system?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai-interview-system" target="_blank" rel="noopener noreferrer" >
                            <div class="d-flex px-5 align-items-center gap-3 border-2 border-light rounded-2">
                                <FaProductHunt class="fs-1" />

                                <div class="d-flex d-flex-col " style={{backgroundColor: "#00000"}}>
                                    <div class="font-weight-bold  " style={{backgroundColor: "#00000"}}>Product Hunt</div> 
                                </div>

                            </div>
                        </a>

                        <a href="https://discord.gg/dfkX92SMGW" target="_blank" rel="noopener noreferrer" >
                            <div class="d-flex px-5 align-items-center gap-3 border-2 border-light rounded-2" style={{backgroundColor: "#00000"}}>
                                <FaDiscord class="fs-1" />

                                <div class="d-flex d-flex-col " style={{backgroundColor: "#00000"}}>
                                    <div class="font-weight-bold  " style={{backgroundColor: "#00000"}}>AI-Interview</div> 
                                </div>

                            </div>
                        </a>

                    </div>
                    </div>
               </nav>
            </div>
        </>
    );
}

export default Newnavbar;