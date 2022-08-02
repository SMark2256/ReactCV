import { motion } from "framer-motion"
import EducationsComp from "../components/educations/EducationsComp.jsx"

const Educations = () => {
      return ( 
            <motion.div className="items-center align-middle space-y-10"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>
                  <div>
                        <h1 className='font-bold text-5xl pb-5'>  Tanulmányaim </h1>
                  </div> 
                  <section className="items-center align-middle flex-col-reverse flex">
                        <EducationsComp/>
                  </section>
            </motion.div>
       )
}
 
export default Educations;