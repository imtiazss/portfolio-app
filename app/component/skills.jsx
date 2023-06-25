"use client"
import {React, useState} from "react";

const Skills = ({data}) => {
const [activeTab, setActiveTab] = useState("soft");
const setBg= (active) => activeTab === active ? 
'bg-Orange' : 'bg-lightOrange'

const setTabsAlignment = (tab) => tab === 'soft' ?
'text-left' : 'text-right'

const tabs = (
    <div>
    <div className="flex ">
            {['soft','hard'].map((el) => (
                <button key={el} type ='button' 
                className={
                            `btnAry ${setBg(el)} 
                            ${setTabsAlignment(el)}`
                          }
                onClick={() => setActiveTab (el)}>
                    {el} Skills
                </button>
            ))}

         




            {/* Other Ways to print two button */}
            {/* <button className="btn" type='button' 
            onClick={()=> setActiveTab("soft")}> 
                {" "}
                Soft Skills 
            </button> 
            <button className = "btn" type='button' 
            onClick={()=> setActiveTab("hard")}>
                {" "}
                Hard Skills 
            </button>  */}

        </div>
         <div >
         <div className="p-[3px] bg-Orange"></div>
     </div>
     </div>
);
const contant = (
  <div>
        <ul className={`flex flex-row flex-wrap 
        content-start list-none py-4 gap-2 ${activeTab==='soft' ? "justify-start" : "justify-end"}`}>
    {data[activeTab].map(({icon, text}) => (
    <li key={text} className='skill '>
    <span> {icon}</span> {text}
    </li>
    ))}
    </ul>
<div className="p-[3px] bg-Orange"></div>
</div>
);
    return (
        <div className="">
        {tabs}
          {contant}
        </div>
    )
}

export default  Skills;