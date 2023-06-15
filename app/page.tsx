import Image from 'next/image'
import AboutMe  from '@/app/component/about-me'
import { aboutMe } from '@/data/page-data'
export default function Home() {
  return (
   <>
    <div >
      About me Professional Ex.
<div>test</div>
      <AboutMe data={aboutMe}/>
    </div>
   </>
  )
}
