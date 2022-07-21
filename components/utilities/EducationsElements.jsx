import { educationListElements_HU, educationListElements_ENG } from "../../store/educations_data"

export const educationElements =  educationListElements_HU.map((education) => {
      return (
                          <div className="relative cursor-pointer inline-flex flex-col border-l-4 border-r-4 border-cyan-900 bg-cyan-500/80 hover:bg-teal-800/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-lg shadow-cyan-500/40 rounded-3xl align-middle mx-auto w-auto h-96 mb-10 items-center">
                                <h1 className="justify-end font-bold text-3xl w-full rounded-t-2xl bg-blue-800/30">{education.start} <strong>-</strong> {education.end}</h1>     
                            <div className="flex flex-col items-center justify-center">
                              <div className="py-10 pb-10">
                                <a className="text-2xl font-bold" href={education.url} target="_blank">{education.school}</a>
                                <p className="text-2xl">{education.level}</p> 
                              </div>
                              <div className="py-10 pb-10">
                                <p className="text-2xl font-bold">{education.techonology ? "Techológiák" : ""}</p> 
                                <p className="text-2xl">{education.techonology}</p> 
                              </div>
                              <div className="absolute text-sm bottom-0 right-10">
                                <h2 className="font-semibold">{education.location}</h2>                                 
                              </div>                             
                            </div>
                          </div>
      )
    })