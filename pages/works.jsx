import { motion } from "framer-motion"
import WorksComp from "../components/WorksComp.jsx"

const Works = () => {
      return ( 
      <>
            <div className='pb-10'>
                  <h1 className='font-bold text-5xl pb-5'>  Works </h1>
                  <p>   This is the main page of the web application.   </p>
                  <p>   You can find the documentation on how to use this site.     </p>
            </div> 
            <WorksComp/>
      </>      
      
       );
}
 
export default Works;