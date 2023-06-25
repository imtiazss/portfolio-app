import {React , useId} from "react";
import Skills   from "@/app/component/skills"

const AboutMe =({data, skills})=> {
    const {title,body} =data;
    const id = useId();
    return (
        <div>
            <section className="drop-shadow-xl shadow-Orange shadow-sm hover:shadow-lg m-2 p-2">
                <h2 className="mb-6"> {title}</h2>
                {body?.map((el, i) => (
                    <p key={`${id}_${i}`} className="mb-6"> 
                        {el}
                    </p>
                    ))} 
                
                
                
            </section>
            <section className=" m-2 p-2">
                <Skills data ={skills} />
            </section>
        </div>
    )
}
export default AboutMe 

