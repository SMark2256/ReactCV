import { motion } from "framer-motion"
import EducationsComp from "../components/educations/EducationsComp.jsx"

const Educations = () => {
      return ( 
            <div className="items-center align-middle space-y-10">
                  <div>
                        <h1 className='font-bold text-5xl pb-5'>  Tanulmányaim </h1>
                  </div> 
                  <div className="items-center align-middle flex-wrap">
                  <EducationsComp/>
                  </div>
            </div>
       )
}
 
export default Educations;