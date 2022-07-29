import { motion } from "framer-motion"

const WorkElements = ({ work }) => {
      return (
        <div className="relative cursor-pointer inline-flex flex-col border-cyan-900 bg-cyan-900/30 hover:bg-teal-800/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-xl shadow-black-500/80 rounded-3xl mx-5 w-96 md:flex-auto h-56 mb-10">
              <div className="text-3xl inline-flex justify-center font-bold bg-blue-800/30 w-full rounded-t-2xl">{work.start} <strong>&nbsp;-&nbsp;</strong> 
                {work.end === 'Jelenleg' ? <motion.div animate={{color: ['rgba(255,255,255, 1)', 'rgba(255,255,255, 0.2)', 'rgba(255,255,255, 1)']}} transition={{ repeat: Infinity , duration: 2}}>{work.end}</motion.div> : work.end} 
              </div>                                  
          <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold py-10 pb-10 ">{work.position}</h1>
              <h2 className="absolute bottom-0 right-5 w-auto text-center text-sm text-slate-400 font-semibold pb-2">{work.location}</h2>                                      
          </div>
        </div>
      )
    }


export default WorkElements;



