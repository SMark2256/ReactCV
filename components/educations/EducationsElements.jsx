import { educationListElements_HU, educationListElements_ENG } from "../../store/educations_data"

export const educationElements =  educationListElements_HU.map((education) => {
      return (
                          <div className="relative cursor-pointer inline-flex flex-col border-cyan-900 bg-cyan-900/30 hover:bg-teal-800/30 hover:border-teal-500/50 hover:shadow-teal-500/40 shadow-xl shadow-black-500/80 rounded-3xl mx-5 md:mx-5 w-96 md:w-80 h-80 mb-10">
                              <h1 className=" text-3xl justify-end font-bold bg-blue-800/30 w-full rounded-t-2xl">{education.start} <strong>-</strong> {education.end}</h1>     
                            <div className="flex flex-col items-center justify-center">
                              <div className="text-lg py-10 pb-10">
                                <a className=" font-bold" href={education.url} target="_blank">{education.school}</a>
                                <p className="">{education.level}</p> 
                              </div>
                              <div className="text-lg py-10 pb-10">
                                <p className=" font-bold">{education.techonology ? "Techológiák" : ""}</p> 
                                <p className="">{education.techonology}</p> 
                              </div>
                              <div className="absolute text-sm bottom-0 right-10">
                                <h2 className="font-semibold">{education.location}</h2>                                 
                              </div>                             
                            </div>
                          </div>
      )
    })