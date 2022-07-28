import { motion } from "framer-motion"
import WorksComp from "../components/works/WorksComp.jsx"

const Works = () => {
      return ( 
            <>
                  <div className="items-center align-middle space-y-10">
                        <div >
                              <h1 className='font-bold text-5xl pb-5'> Tapasztalataim </h1>
                        </div> 
                        <div className="items-center align-middle flex-wrap">
                              <WorksComp/>
                        </div>
                  </div>
            </>      
       );
}
 
export default Works;