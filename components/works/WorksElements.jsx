import { workListElements_HU, workListElements_ENG } from "../../store/works_data"

export const WorkElements =  workListElements_HU.map((work) => {
      return (
                          <div className="relative cursor-pointer inline-flex flex-col border-cyan-900 bg-cyan-900/30 hover:bg-teal-800/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-xl shadow-black-500/80 rounded-3xl mx-5 md:mx-5 w-96 md:w-96 h-56 mb-10">
                                <p className="text-3xl justify-end font-bold bg-blue-800/30 w-full rounded-t-2xl">{work.start} <strong>-</strong> {work.end}</p>                                  
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-2xl font-bold py-10 pb-10 ">{work.position}</h1>
                                <h2 className="absolute bottom-0 w-full text-center text-sm font-semibold pb-2">{work.location}</h2>                                      
                            </div>
                          </div>
      )
    })