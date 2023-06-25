import Image from 'next/image'
import AboutMe  from '@/app/component/about-me'
import ProfessionalExperionce from '@/app/component/professionalExperioence'
import { aboutMe, professionalData, skills } from '@/data/page-data'
export default function Home() {
  return (
   <>
    <div >
         <AboutMe data={aboutMe} skills={skills}/>
         <ProfessionalExperionce data={professionalData} />
      
    </div>
   </>
  )
}
