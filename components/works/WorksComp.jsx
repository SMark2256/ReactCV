import WorkElements from "./WorksElements";
import { workListElements_ENG, workListElements_HU } from "../../store/works_data";

const WorksComp = () => {
  return (
    <>
      <div className="flex flex-col-reverse">
          {workListElements_HU.map((work, index) => <WorkElements key={index} work={ work }/> )}
      </div>
    </>
  )
}
 
export default WorksComp;