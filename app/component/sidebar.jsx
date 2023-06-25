import React from "react";
import Image from "next/image";


import {Envelope, Linkedin, Medium, Twitter} from "./icons"

const Sidebar=({data}) => {
     const {name, role, education,contactLink} = data;
    return(
        <div className="bg-black flex flex-col sm:fixed
                        content-between w-full h-auto  
                        sm:h-screen sm:justify-around sm:w-1/3 ">
           
            <div className="text-white flex flex-col content-center  p-10 ">
                 <div className="  flex  justify-center "> 
                   
                    <Image
                    priority
                    width={150}
                    height={150}
                    className='rounded-t-[160px] rounded-b-[20px] border-4 border-white mb-2' 
                    src  ="/images/photo1.jpg" 
                    alt="photo1.jpg"
                    aria-label="Profile Picture"
                    />
                </div>
                <div>
                  
                   <h1 className="mb-4 font-display flex justify-center">{name}</h1>
                    <h2 className="mb-8 flex justify-center">{role}</h2>
                  
                    <p className="mb-2">{education[0]}</p>
                    <p className="mb-2">{education[1]}</p> 
                </div>
                <div className="text-white text-center mb-4 mt-4 sm:mt-8">
                   <h4 className="mb-2">CONTACT ME</h4>
                   
                   <div className="flex flex-row justify-center gap-3 ">
                    <a className ="icons-contactme" href ={contactLink?.[0]} aria-label={'email link'}><Envelope/></a>
                     <a className ="icons-contactme" href ={contactLink?.[1]} aria-label={'twitter link'}><Twitter/></a>
                    <a className ="icons-contactme" href ={contactLink?.[2]} aria-label={'linkedin link'}><Linkedin/></a>
                    <a className ="icons-contactme" href ={contactLink?.[3]} aria-label={'web page link'}><Medium/></a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar