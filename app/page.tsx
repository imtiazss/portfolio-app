import Image from 'next/image'
import AboutMe  from '@/app/component/about-me'
import { aboutMe } from '@/data/page-data'
export default function Home() {
  return (
   <>
    <div >
      About me Professional Ex.
<h1>imtiaz/index</h1>

      <AboutMe data={aboutMe}/>
    </div>
   </>
  )
}
