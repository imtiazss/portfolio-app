import React from "react";


const ProfessionalExperionce =({data}) => {
    const {title,experiences} = data;
    return (
        <section>
           
            <div className="flex flex-col m-2 ">
            <h2>{title}</h2>
                {experiences.map(({role, description,current})=> (
                    <div key = {role} className="mt-4 bg-lightOrange hover:bg-Orange flex flex-col rounded-lg gap-3">
                        <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`}></span>
                            <div className="bg-green-light p-6 drop-shadow-md hover:drop-shadow-lg">
                                <h3 class>{role}</h3>
                              
                                <p className="mt-3">{description}</p>
                            </div>
                        
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default ProfessionalExperionce