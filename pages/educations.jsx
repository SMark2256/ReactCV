import { motion } from "framer-motion"
import EducationsComp from "../components/educations/EducationsComp.jsx"
import PageMotion from "../components/PageMotion.jsx";

const Educations = () => {
      return ( 
            <PageMotion>
                  <div>
                        <h1 className='font-bold text-5xl pb-5'>  Tanulmányaim </h1>
                  </div> 
                  <section className="items-center align-middle flex-col-reverse flex">
                        <EducationsComp/>
                  </section>
            </PageMotion>
       )
}
 
export default Educations;