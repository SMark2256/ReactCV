import { motion } from "framer-motion"
import PageMotion from "../components/PageMotion.jsx"
import WorksComp from "../components/works/WorksComp.jsx"

const Works = () => {
      return ( 
            <>
                  <PageMotion>
                        <div >
                              <h1 className='font-bold text-5xl pb-5'> Tapasztalataim </h1>
                        </div> 
                        <section className="items-center align-middle flex flex-col">
                              <WorksComp/>
                        </section>
                  </PageMotion>
            </>      
       );
}
 
export default Works;