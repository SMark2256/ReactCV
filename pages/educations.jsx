import { motion } from "framer-motion"
import EducationsComp from "../components/EducationsComp.jsx"

const Educations = () => {
      return ( 
            <>
                  <div className='pb-10'>
                        <h1 className='font-bold text-5xl pb-5'>  Tanulmányaim </h1>
                  </div> 
                  <div className="grid grid-rows-4">
                  <EducationsComp/>
                  </div>
            </>
       )
}
 
export default Educations;