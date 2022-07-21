import { motion } from "framer-motion"
import Works from "../components/Works.jsx"

const workspage = () => {
      return ( 
      <>
            <div className='pb-10'>
                  <h1 className='font-bold text-5xl pb-5'>  Munkáim </h1>
            </div> 
            <Works/>
      </>      
      
       );
}
 
export default workspage;