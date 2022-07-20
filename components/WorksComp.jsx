import { workListElements_HU } from "../data/works_data"

const WorksComp = () => {
    
        const showElements =  workListElements_HU.map((work) => {
            return (
                                <div className="cursor-pointer inline-flex flex-col border-l-4 border-r-4 border-violet-900 bg-violet-800/40 hover:bg-violet-900 hover:border-violet-800/50 rounded-3xl align-middle mx-5 md:mx-5 w-96 md:w-96 h-56 mb-10 items-center">
                                  <div className="flex flex-col items-center justify-center">
                                      <h1 className="text-3xl font-bold py-10 pb-10 ">{work.position}</h1>
                                      <h2 className="text-2xl font-semibold">{work.location}</h2>                                      
                                      <p className="text-lg justify-end font-semibold">{work.start} <strong>-</strong> {work.end}</p>                                  
                                  </div>
                                </div>
            )
          })


        return (
          <div>
            {showElements}
          </div>
        )
}
 
export default WorksComp;