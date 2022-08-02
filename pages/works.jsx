import { motion } from "framer-motion"
import WorksComp from "../components/works/WorksComp.jsx"

const Works = () => {
      return ( 
            <>
                  <motion.div className="items-center align-middle space-y-10"
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>
                        <div >
                              <h1 className='font-bold text-5xl pb-5'> Tapasztalataim </h1>
                        </div> 
                        <section className="items-center align-middle flex flex-col">
                              <WorksComp/>
                        </section>
                  </motion.div>
            </>      
       );
}
 
export default Works;