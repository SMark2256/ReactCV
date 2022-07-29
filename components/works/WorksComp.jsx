import WorkElements from "./WorksElements";
import { workListElements_ENG, workListElements_HU } from "../../store/works_data";

const WorksComp = () => {
  return (
          workListElements_HU.map((work, index) => <WorkElements key={index} work={ work }/> )
  )
}
 
export default WorksComp;