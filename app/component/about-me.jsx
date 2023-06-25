import {React , useId} from "react";
import Skills   from "@/app/component/skills"

const AboutMe =({data, skills})=> {
    const {title,body} =data;
    const id = useId();
    return (
        <div>
            <section className="shadow-inner hover:shadow-lg m-3 p-4">
                <h2 className="mb-8"> {title}</h2>
                {body?.map((el, i) => (
                    <p key={`${id}_${i}`} className="mb-6"> 
                        {el}
                    </p>
                    ))} 
                
                
                
            </section>
            <section className=" m-3 p-4">
                <Skills data ={skills} />
            </section>
        </div>
    )
}
export default AboutMe 

