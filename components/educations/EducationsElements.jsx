import { motion } from "framer-motion"
import EducationsIconChanger from "./EducationsIconChanger";

const EducationElements = ({ education }) => {
      return (
                          <div className="relative cursor-pointer inline-flex flex-col space-y-4 border-cyan-900 bg-cyan-900/30 hover:bg-teal-800/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-xl shadow-black-500/80 rounded-3xl mx-5 w-96 md:flex-auto h-64 mb-10">
                              <h1 className=" text-3xl justify-end font-bold bg-blue-800/30 w-full rounded-t-2xl">{education.start} <strong>-</strong> {education.end}</h1>     
                            <div className="align-middle items-center justify-center py-3">
                              <div className="text-center">
                                <a className="font-bold text-base w-auto" href={education.url} target="_blank">{education.school}</a>
                                <p className="text-base font-semibold text-slate-400">{education.level}</p> 
                              </div>
                              {education.techonology &&
                                <>
                                  <p className="border-t-2 border-slate-500 mx-auto w-5/6 mt-3 pb-3"></p>
                                  <div className="text-lg absolute left-10 right-10 bottom-12">
                                    <p className="hidden font-bold">Techológiák</p> 
                                    <div className="text-5xl font-semibold text-slate-200 align-middle rounded-xl dark:text-slate-900 inline-flex space-x-2.5 "><EducationsIconChanger educationIcon={education.techonology}/></div> 
                                  </div>
                                </>
                              }
                              <div className="absolute text-sm text-slate-400 bottom-2 right-5">
                                <h2 className="font-semibold">{education.location}</h2>                                 
                              </div>                             
                            </div>
                          </div>
      )
    }

    export default EducationElements;